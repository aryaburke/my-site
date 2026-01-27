import { put, list, del } from "@vercel/blob";
import { PhotoMetadata, METADATA_FILE_NAME } from "@/helpers/photoTypes";

// Cache for metadata in memory (with TTL)
let metadataCache: PhotoMetadata[] | null = null;
let cacheTimestamp = 0;
const CACHE_TTL = 60 * 1000; // 1 minute

export async function getPhotoMetadata(): Promise<PhotoMetadata[]> {
  // Check cache first
  if (metadataCache && Date.now() - cacheTimestamp < CACHE_TTL) {
    return metadataCache;
  }

  try {
    // List blobs to find the metadata file
    const { blobs } = await list({ prefix: METADATA_FILE_NAME });
    const metadataBlob = blobs.find((b) => b.pathname === METADATA_FILE_NAME);

    if (!metadataBlob) {
      // No metadata file exists yet, return empty array
      return [];
    }

    // Fetch the metadata JSON
    const response = await fetch(metadataBlob.url);
    if (!response.ok) {
      console.error("Failed to fetch metadata:", response.statusText);
      return [];
    }

    const metadata: PhotoMetadata[] = await response.json();
    metadataCache = metadata;
    cacheTimestamp = Date.now();
    return metadata;
  } catch (error) {
    console.error("Error reading photo metadata:", error);
    return [];
  }
}

export async function savePhotoMetadata(
  metadata: PhotoMetadata[]
): Promise<void> {
  try {
    const json = JSON.stringify(metadata, null, 2);
    await put(METADATA_FILE_NAME, json, {
      access: "public",
      contentType: "application/json",
      addRandomSuffix: false,
    });

    // Update cache
    metadataCache = metadata;
    cacheTimestamp = Date.now();
  } catch (error) {
    console.error("Error saving photo metadata:", error);
    throw error;
  }
}

export async function addPhotoMetadata(
  photo: PhotoMetadata
): Promise<PhotoMetadata[]> {
  const metadata = await getPhotoMetadata();
  metadata.push(photo);
  await savePhotoMetadata(metadata);
  return metadata;
}

export async function updatePhotoMetadata(
  id: string,
  updates: Partial<PhotoMetadata>
): Promise<PhotoMetadata | null> {
  const metadata = await getPhotoMetadata();
  const index = metadata.findIndex((p) => p.id === id);

  if (index === -1) {
    return null;
  }

  metadata[index] = {
    ...metadata[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  await savePhotoMetadata(metadata);
  return metadata[index];
}

export async function deletePhotoMetadata(id: string): Promise<boolean> {
  const metadata = await getPhotoMetadata();
  const index = metadata.findIndex((p) => p.id === id);

  if (index === -1) {
    return false;
  }

  const photo = metadata[index];

  // If it's a blob photo, delete the image from blob storage
  if (photo.source === "blob" && photo.src) {
    try {
      await del(photo.src);
    } catch (error) {
      console.error("Error deleting photo from blob storage:", error);
      // Continue with metadata deletion even if blob deletion fails
    }
  }

  metadata.splice(index, 1);
  await savePhotoMetadata(metadata);
  return true;
}

export async function getPhotoById(id: string): Promise<PhotoMetadata | null> {
  const metadata = await getPhotoMetadata();
  return metadata.find((p) => p.id === id) || null;
}

export async function getPhotosByCollection(
  collection: string
): Promise<PhotoMetadata[]> {
  const metadata = await getPhotoMetadata();
  return metadata.filter((p) => p.collections.includes(collection));
}

// Clear the cache (useful for forcing a refresh)
export function clearMetadataCache(): void {
  metadataCache = null;
  cacheTimestamp = 0;
}
