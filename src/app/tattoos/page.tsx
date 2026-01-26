import React from "react";
import { getTattoos } from "../../helpers/photoConsts";
import PhotoContainer from "../../components/PhotoContainer";

// ISR: Revalidate every 60 seconds to pick up new blob photos
export const revalidate = 60;

export default async function Tattoos() {
  const tattoos = await getTattoos();
  return <PhotoContainer photos={tattoos} verticalOverride={true} />;
}
