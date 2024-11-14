import React from "react";
import type { Photo } from "../components/PhotoContainer.tsx";
import PhotoContainer from "../components/PhotoContainer.tsx";

const photos: Photo[] = [];

export function Tattoos() {
  return (
    <>
      <div className="text-container">
        <p>
          If you want a lovely little handpoke, <a href="/contact">just ask</a>.
        </p>
      </div>
      <PhotoContainer photos={photos} />
    </>
  );
}
