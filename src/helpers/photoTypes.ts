// Shared types for the photo admin system

export type PhotoMetadata = {
  id: string;
  src: string; // Blob URL for new photos, local path for existing
  title: string;
  year?: string;
  alt?: string;
  vertical?: boolean;
  shotBy?: string;
  achievementName?: string;
  collections: string[]; // ['kin', 'anima', 'tattoos', ...]
  source: "local" | "blob";
  createdAt: string;
  updatedAt: string;
};

export type PhotoCollection = {
  slug: string;
  title: string;
  order: number;
};

// The 10 collections defined in the plan
export const COLLECTIONS: PhotoCollection[] = [
  { slug: "kin", title: "Beacons", order: 0 },
  { slug: "reclamation", title: "Oxidation", order: 1 },
  { slug: "anima", title: "Reverence", order: 2 },
  { slug: "cityscape", title: "Metropolis", order: 3 },
  { slug: "hamlet", title: "Crossroads", order: 4 },
  { slug: "luminosity", title: "Aether", order: 5 },
  { slug: "apotheosis", title: "Hubris", order: 6 },
  { slug: "journeys", title: "Strangers", order: 7 },
  { slug: "tattoos", title: "Tattoos", order: 8 },
  { slug: "photos-of-me", title: "Photos of Me", order: 9 },
];

// Metadata file name in Vercel Blob
export const METADATA_FILE_NAME = "photo-metadata.json";
