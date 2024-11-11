import React from "react";
import type { Photo } from "./PhotoContainer.tsx";
import PhotoContainer from "./PhotoContainer.tsx";

import alps_aflame from "../photos/wonder/alps_aflame.jpg";
import combe_de_sorebois from "../photos/wonder/combe_de_sorebois.jpg";
import oceanshine from "../photos/wonder/oceanshine.jpg";

const photos: Photo[] = [
  {
    src: alps_aflame,
    title: "Alps Aflame",
    year: "2024",
  },
  {
    src: combe_de_sorebois,
    title: "Combe de Sorebois",
    year: "2024",
  },
  {
    src: oceanshine,
    title: "Oceanshine",
    year: "2024",
  },
];

export function Wonder() {
  return <PhotoContainer photos={photos} />;
}
