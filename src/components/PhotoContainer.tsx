import React from "react";
import { shuffle } from "lodash";
import { Photo } from "../helpers/photoConsts";
import PhotoItem from "./PhotoItem";

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
