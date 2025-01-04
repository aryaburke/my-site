"use client";
import React from "react";
import { Photo } from "../helpers/photoConsts";
import { unlockAchievement } from "../helpers/achievements";

// I could migrate to next.js images, if I want
export default function PhotoItem({
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
      <img
        src={photo.src}
        alt={photo.alt}
        onClick={
          photo?.achievementName
            ? () => unlockAchievement(photo.achievementName!)
            : undefined
        }
        className={photo?.achievementName ? "clickable" : ""}
        suppressHydrationWarning
      />
      <p className="photo-title" suppressHydrationWarning>
        {photoStr}
      </p>
    </div>
  );
}
