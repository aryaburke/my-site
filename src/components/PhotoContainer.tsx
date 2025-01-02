import React from "react";
import { shuffle } from "lodash";
import { Photo } from "../helpers/photoConsts";

// I could migrate to next.js images, if I want
function PhotoItem({
  photo,
  verticalOverride,
}: {
  photo: Photo;
  verticalOverride?: boolean;
}) {
  let photoStr = photo.title;
  if (photo?.year) {
    photoStr += `, ${photo.year}`;
  }
  if (photo?.shotBy) {
    photoStr += `, shot by ${photo.shotBy}`;
  }

  return (
    <div
      className={`photo-item ${
        photo.vertical || verticalOverride ? "vertical" : "horizontal"
      }`}
      suppressHydrationWarning
    >
      <img src={photo.src} alt={photo.alt} suppressHydrationWarning />
      <p className="photo-title" suppressHydrationWarning>
        {photoStr}
      </p>
    </div>
  );
}

export default function PhotoContainer({
  photos,
  verticalOverride,
}: {
  photos: Photo[];
  verticalOverride?: boolean;
}) {
  const shuffledPhotos = shuffle(photos);
  return (
    <div className="photo-container">
      {shuffledPhotos.map((photo, idx) => (
        <PhotoItem
          photo={photo}
          verticalOverride={verticalOverride}
          key={`photo-item-${idx}`}
        />
      ))}
    </div>
  );
}
