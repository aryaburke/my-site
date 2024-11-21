import React from "react";
import type { Photo } from "../../components/PhotoContainer.tsx";
import PhotoContainer from "../../components/PhotoContainer.tsx";

import a_joust_begins from "../../photos/strangers/a_joust_begins.jpg";
import a_rainbow from "../../photos/strangers/a_rainbow.jpg";
import giewont_ascent from "../../photos/strangers/giewont_ascent.jpg";
import in_the_tatras from "../../photos/strangers/in_the_tatras.jpg";
import krakow_afternoon from "../../photos/strangers/krakow_afternoon.jpg";
import photographing from "../../photos/strangers/photographing.jpg";

const photos: Photo[] = [
  {
    src: a_joust_begins,
    title: "A Joust Begins",
    year: "2024",
  },
  {
    src: a_rainbow,
    title: "A Rainbow",
    year: "2024",
  },
  {
    src: giewont_ascent,
    title: "Giewont Ascent",
    year: "2024",
    vertical: true,
  },
  {
    src: in_the_tatras,
    title: "In the Tatras",
    year: "2024",
  },
  {
    src: krakow_afternoon,
    title: "Kraków Afternoon",
    year: "2024",
    vertical: true,
  },
  {
    src: photographing,
    title: "Photographing",
    year: "2024",
  },
];

export function Strangers() {
  return <PhotoContainer photos={photos} />;
}
