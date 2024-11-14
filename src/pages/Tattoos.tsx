import React from "react";
import PhotoContainer, { Photo } from "../components/PhotoContainer";

const photos: Photo[] = [];

export function Tattoos() {
  return <PhotoContainer photos={photos} />;
}
