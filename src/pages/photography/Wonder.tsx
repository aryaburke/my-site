import React from "react";
import type { Photo } from "../../components/PhotoContainer.tsx";
import PhotoContainer from "../../components/PhotoContainer.tsx";

import alps_aflame from "../../photos/wonder/alps_aflame.jpg";
import andrew_in_the_glades from "../../photos/wonder/andrew_in_the_glades.jpg";
import combe_de_sorebois from "../../photos/wonder/combe_de_sorebois.jpg";
import czarny_staw_gasienicowy from "../../photos/wonder/czarny_staw_gasienicowy.jpg";
import elation from "../../photos/wonder/elation.jpg";
import great_salt_lake from "../../photos/wonder/great_salt_lake.jpeg";
import into_the_lakebed from "../../photos/wonder/into_the_lakebed.jpg";
import mostly_sky from "../../photos/wonder/mostly_sky.jpg";
import oceanshine from "../../photos/wonder/oceanshine.jpg";
import pine_creek_falls from "../../photos/wonder/pine_creek_falls.jpg";
import tatra_cliffs from "../../photos/wonder/tatra_cliffs.jpg";

const PHOTOS: Photo[] = [
  {
    src: alps_aflame,
    title: "Alps Aflame",
    year: "2024",
  },
  {
    src: andrew_in_the_glades,
    title: "Andrew in the Glades",
    year: "2024",
  },
  {
    src: combe_de_sorebois,
    title: "Combe de Sorebois",
    year: "2024",
  },
  {
    src: czarny_staw_gasienicowy,
    title: "Czarny Staw Gąsienicowy",
    year: "2024",
    vertical: true,
  },
  {
    src: elation,
    title: "Elation",
    year: "2024",
    vertical: true,
  },
  {
    src: great_salt_lake,
    title: "Great Salt Lake",
    year: "2022",
    vertical: true,
  },
  {
    src: into_the_lakebed,
    title: "Into the Lakebed",
    year: "2022",
    vertical: true,
  },
  {
    src: mostly_sky,
    title: "Mostly Sky",
    year: "2024",
  },
  {
    src: oceanshine,
    title: "Oceanshine",
    year: "2024",
  },
  {
    src: pine_creek_falls,
    title: "Pine Creek Falls",
    year: "2024",
    vertical: true,
  },
  {
    src: tatra_cliffs,
    title: "Tatra Cliffs",
    year: "2024",
  },
];

export function Wonder() {
  return <PhotoContainer photos={PHOTOS} />;
}
