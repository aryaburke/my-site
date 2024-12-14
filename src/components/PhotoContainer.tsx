import React, { useState } from "react";
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
  // handle loading so titles don't flash in
  // const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`photo-item ${
        photo.vertical || verticalOverride ? "vertical" : "horizontal"
      }`}
      // style={loaded ? {} : { display: "none" }}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        // onLoad={() => setLoaded(true)}
      />
      <p className="photo-title">
        {photo.title}, {photo.year}
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
