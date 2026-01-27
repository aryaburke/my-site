import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import {
  getPhotoById,
  updatePhotoMetadata,
  deletePhotoMetadata,
} from "@/lib/photoMetadata";

type RouteParams = { params: Promise<{ id: string }> };

// GET /api/photos/[id] - Get single photo
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const photo = await getPhotoById(id);

    if (!photo) {
      return NextResponse.json({ error: "Photo not found" }, { status: 404 });
    }

    return NextResponse.json({ photo });
  } catch (error) {
    console.error("Error fetching photo:", error);
    return NextResponse.json(
      { error: "Failed to fetch photo" },
      { status: 500 }
    );
  }
}

// PUT /api/photos/[id] - Update photo metadata
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const authenticated = await isAuthenticated();
    if (!authenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();

    const { title, year, alt, vertical, shotBy, collections, achievementName } =
      body;

    const updates: Partial<{
      title: string;
      year: string;
      alt: string;
      vertical: boolean;
      shotBy: string;
      collections: string[];
      achievementName: string;
    }> = {};

    if (title !== undefined) updates.title = title;
    if (year !== undefined) updates.year = year;
    if (alt !== undefined) updates.alt = alt;
    if (vertical !== undefined) updates.vertical = vertical;
    if (shotBy !== undefined) updates.shotBy = shotBy;
    if (collections !== undefined) updates.collections = collections;
    if (achievementName !== undefined) updates.achievementName = achievementName;

    const photo = await updatePhotoMetadata(id, updates);

    if (!photo) {
      return NextResponse.json({ error: "Photo not found" }, { status: 404 });
    }

    return NextResponse.json({ photo });
  } catch (error) {
    console.error("Error updating photo:", error);
    return NextResponse.json(
      { error: "Failed to update photo" },
      { status: 500 }
    );
  }
}

// DELETE /api/photos/[id] - Delete photo
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const authenticated = await isAuthenticated();
    if (!authenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const deleted = await deletePhotoMetadata(id);

    if (!deleted) {
      return NextResponse.json({ error: "Photo not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting photo:", error);
    return NextResponse.json(
      { error: "Failed to delete photo" },
      { status: 500 }
    );
  }
}
