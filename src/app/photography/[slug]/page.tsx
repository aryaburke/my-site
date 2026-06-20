import React from "react";
import { PHOTO_PAGES } from "../../../helpers/photoConsts";
import PhotoContainer from "../../../components/PhotoContainer";

export default async function Photos({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const photoPage = PHOTO_PAGES.find(
    (page) => slug === (page.slug || page.title.toLocaleLowerCase())
  )!;
  return <PhotoContainer photos={photoPage.photos} />;
}
