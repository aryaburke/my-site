import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { v4 as uuidv4 } from "uuid";
import { isAuthenticated } from "@/lib/auth";
import {
  getPhotoMetadata,
  addPhotoMetadata,
  getPhotosByCollection,
} from "@/lib/photoMetadata";
import { PhotoMetadata } from "@/helpers/photoTypes";

// GET /api/photos - List all photos or filter by collection
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const collection = searchParams.get("collection");

    let photos: PhotoMetadata[];
    if (collection) {
      photos = await getPhotosByCollection(collection);
    } else {
      photos = await getPhotoMetadata();
    }

    return NextResponse.json({ photos });
  } catch (error) {
    console.error("Error fetching photos:", error);
    return NextResponse.json(
      { error: "Failed to fetch photos" },
      { status: 500 }
    );
  }
}

// POST /api/photos - Upload a new photo
export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const authenticated = await isAuthenticated();
    if (!authenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const title = formData.get("title") as string;
    const year = formData.get("year") as string | null;
    const alt = formData.get("alt") as string | null;
    const vertical = formData.get("vertical") === "true";
    const shotBy = formData.get("shotBy") as string | null;
    const collectionsJson = formData.get("collections") as string;

    if (!file) {
      return NextResponse.json({ error: "File is required" }, { status: 400 });
    }

    if (!title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    let collections: string[] = [];
    try {
      collections = JSON.parse(collectionsJson || "[]");
    } catch {
      collections = [];
    }

    // Generate a unique filename
    const ext = file.name.split(".").pop() || "jpg";
    const filename = `photos/${uuidv4()}.${ext}`;

    // Upload to Vercel Blob
    const blob = await put(filename, file, {
      access: "public",
      contentType: file.type,
    });

    // Create metadata entry
    const now = new Date().toISOString();
    const photo: PhotoMetadata = {
      id: uuidv4(),
      src: blob.url,
      title,
      year: year || undefined,
      alt: alt || undefined,
      vertical,
      shotBy: shotBy || undefined,
      collections,
      source: "blob",
      createdAt: now,
      updatedAt: now,
    };

    await addPhotoMetadata(photo);

    return NextResponse.json({ photo }, { status: 201 });
  } catch (error) {
    console.error("Error uploading photo:", error);
    return NextResponse.json(
      { error: "Failed to upload photo" },
      { status: 500 }
    );
  }
}
