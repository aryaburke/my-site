import React from "react";
import { shuffle } from "lodash";

export type Photo = {
  src: string;
  title: string;
  year: string;
  alt?: string;
  vertical?: boolean;
};

export default function PhotoContainer({
  photos,
  verticalOverride = false,
}: {
  photos: Photo[];
  verticalOverride?: boolean;
}) {
  const shuffledPhotos = shuffle(photos);
  return (
    <div className="photo-container">
      {shuffledPhotos.map((photo) => (
        <div
          className={`photo-item ${
            photo.vertical || verticalOverride ? "vertical" : "horizontal"
          }`}
        >
          <img src={photo.src} alt={photo.alt} />
          <p className="photo-title">
            {photo.title}, {photo.year}
          </p>
        </div>
      ))}
    </div>
  );
}
