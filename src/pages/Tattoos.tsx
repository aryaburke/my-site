import React from "react";
import type { Photo } from "../components/PhotoContainer.tsx";
import PhotoContainer from "../components/PhotoContainer.tsx";

import branching from "../photos/tattoos/branching.jpg";
import cherries from "../photos/tattoos/cherries.jpg";
import coat_hanger from "../photos/tattoos/coat_hanger.jpg";
import ghostie from "../photos/tattoos/ghostie.jpg";
import growing from "../photos/tattoos/growing.jpg";
import moon1 from "../photos/tattoos/moon1.jpeg";
import moon2 from "../photos/tattoos/moon2.jpg";
import moth from "../photos/tattoos/moth.jpg";
import my_body_is_mine from "../photos/tattoos/my_body_is_mine.jpg";
import pine_tree from "../photos/tattoos/pine_tree.jpg";
import present from "../photos/tattoos/present.jpg";
import red_flag from "../photos/tattoos/red_flag.jpg";
import seedling from "../photos/tattoos/seedling.jpg";
import sigil from "../photos/tattoos/sigil.jpg";
import squiggle from "../photos/tattoos/squiggle.jpg";
import tooth from "../photos/tattoos/tooth.jpg";
import tucker from "../photos/tattoos/tucker.jpg";
import tv from "../photos/tattoos/tv.jpg";

const PHOTOS: Photo[] = [
  {
    src: branching,
    title: "Branching",
    year: "2019",
  },
  {
    src: cherries,
    title: "Cherries",
    year: "2020",
  },
  {
    src: coat_hanger,
    title: "Coat Hanger",
    year: "2019",
  },
  {
    src: ghostie,
    title: "Ghostie",
    year: "2019",
  },
  {
    src: growing,
    title: "Growing",
    year: "2020",
  },
  {
    src: moon1,
    title: "Moon",
    year: "2019",
  },
  {
    src: moon2,
    title: "Moon",
    year: "2024",
  },
  {
    src: moth,
    title: "Moth",
    year: "2020",
  },
  {
    src: my_body_is_mine,
    title: "My Body Is Mine",
    year: "2019",
  },
  {
    src: pine_tree,
    title: "Pine Tree",
    year: "2019",
  },
  {
    src: present,
    title: "Present",
    year: "2019",
  },
  {
    src: red_flag,
    title: "Red Flag",
    year: "2021",
  },
  {
    src: seedling,
    title: "Seedling",
    year: "2020",
  },
  {
    src: sigil,
    title: "Sigil",
    year: "2019",
  },
  {
    src: squiggle,
    title: "Squiggle",
    year: "2019",
  },
  {
    src: tooth,
    title: "Tooth",
    year: "2019",
  },
  {
    src: tucker,
    title: "Tucker",
    year: "2021",
  },
  {
    src: tv,
    title: "TV",
    year: "2019",
  },
];

export function Tattoos() {
  return <PhotoContainer photos={PHOTOS} verticalOverride={true} />;
}
