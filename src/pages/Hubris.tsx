import React from "react";
import type { Photo } from "../components/PhotoContainer.tsx";
import PhotoContainer from "../components/PhotoContainer.tsx";

import auschwitz_i from "../photos/hubris/auschwitz_i.jpg";
import crystal_vision from "../photos/hubris/crystal_vision.jpg";
import from_varick_street from "../photos/hubris/from_varick_street.jpg";
import haleakala from "../photos/hubris/haleakala.jpg";
import out_to_sea from "../photos/hubris/out_to_sea.jpg";
import siegessaule from "../photos/hubris/siegessaule.jpg";
import sunset_park_materials_recovery_facility from "../photos/hubris/sunset_park_materials_recovery_facility.jpg";

const photos: Photo[] = [
  {
    src: auschwitz_i,
    title: "Auschwitz I",
    year: "2024",
  },
  {
    src: crystal_vision,
    title: "Crystal Vision",
    year: "2024",
  },
  {
    src: from_varick_street,
    title: "From Varick Street",
    year: "2024",
  },
  {
    src: haleakala,
    title: "Haleakalā",
    year: "2024",
  },
  {
    src: out_to_sea,
    title: "Out to Sea",
    year: "2024",
  },
  {
    src: siegessaule,
    title: "Siegessäule",
    year: "2024",
  },
  {
    src: sunset_park_materials_recovery_facility,
    title: "Sunset Park Materials Recovery Facility",
    year: "2024",
  },
];

export function Hubris() {
  return <PhotoContainer photos={photos} />;
}
