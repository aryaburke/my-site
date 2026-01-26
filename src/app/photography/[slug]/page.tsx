import React from "react";
import { getPhotosForCollection } from "../../../helpers/photoConsts";
import PhotoContainer from "../../../components/PhotoContainer";

// ISR: Revalidate every 60 seconds to pick up new blob photos
export const revalidate = 60;

export default async function Photos({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const photos = await getPhotosForCollection(slug);
  return <PhotoContainer photos={photos} />;
}
