import React from "react";
import { shuffle } from "lodash";

export type Photo = {
  src: string;
  alt?: string;
  title: string;
  year: string;
};

export default function PhotoContainer({ photos }: { photos: Photo[] }) {
  const shuffledPhotos = shuffle(photos);
  return (
    <div className="photo-container">
      {shuffledPhotos.map((photo) => (
        <div className="photo-item">
          <img src={photo.src} alt={photo.alt} />
          <p className="photo-title">
            {photo.title}, {photo.year}
          </p>
        </div>
      ))}
    </div>
  );
}
