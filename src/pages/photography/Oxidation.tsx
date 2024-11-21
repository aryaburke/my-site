import React from "react";
import type { Photo } from "../../components/PhotoContainer.tsx";
import PhotoContainer from "../../components/PhotoContainer.tsx";

import brooklyn_crevice from "../../photos/oxidation/brooklyn_crevice.jpg";
import denkmal_fur_die_ermordeten_juden_europas from "../../photos/oxidation/denkmal_fur_die_ermordeten_juden_europas.jpg";
import erie_basin_auto_pound from "../../photos/oxidation/erie_basin_auto_pound.jpg";
import from_the_roof from "../../photos/oxidation/from_the_roof.jpg";
import grimentz from "../../photos/oxidation/grimentz.jpg";
import krakow_sunset from "../../photos/oxidation/krakow_sunset.jpg";
import letchworth from "../../photos/oxidation/letchworth.jpg";
import out_to_sea from "../../photos/oxidation/out_to_sea.jpg";
import rafters from "../../photos/oxidation/rafters.jpg";
import red_hook_grain_terminal from "../../photos/oxidation/red_hook_grain_terminal.jpg";
import returning_home from "../../photos/oxidation/returning_home.jpg";
import steel from "../../photos/oxidation/steel.jpg";
import sun_tunnels_i from "../../photos/oxidation/sun_tunnels_i.jpeg";
import sun_tunnels_ii from "../../photos/oxidation/sun_tunnels_ii.jpeg";
import the_vacant_lot from "../../photos/oxidation/the_vacant_lot.jpg";
import tiergarten from "../../photos/oxidation/tiergarten.jpg";

const photos: Photo[] = [
  {
    src: brooklyn_crevice,
    title: "Brooklyn Crevice",
    year: "2024",
  },
  {
    src: denkmal_fur_die_ermordeten_juden_europas,
    title: "Denkmal für die Ermordeten Juden Europas",
    year: "2024",
  },
  {
    src: erie_basin_auto_pound,
    title: "Erie Basin Auto Pound",
    year: "2024",
  },
  {
    src: from_the_roof,
    title: "From the Roof",
    year: "2024",
  },
  {
    src: grimentz,
    title: "Grimentz",
    year: "2024",
  },
  {
    src: krakow_sunset,
    title: "Kraków Sunset",
    year: "2024",
    vertical: true,
  },
  {
    src: letchworth,
    title: "Letchworth",
    year: "2024",
  },
  {
    src: out_to_sea,
    title: "Out to Sea",
    year: "2024",
  },
  {
    src: rafters,
    title: "Rafters",
    year: "2024",
  },
  {
    src: red_hook_grain_terminal,
    title: "Red Hook Grain Terminal",
    year: "2024",
  },
  {
    src: returning_home,
    title: "Returning Home",
    year: "2024",
  },
  {
    src: steel,
    title: "Steel",
    year: "2024",
  },
  {
    src: sun_tunnels_i,
    title: "Sun Tunnels I",
    year: "2022",
    vertical: true,
  },
  {
    src: sun_tunnels_ii,
    title: "Sun Tunnels II",
    year: "2022",
    vertical: true,
  },
  {
    src: the_vacant_lot,
    title: "The Vacant Lot",
    year: "2024",
    vertical: true,
  },
  {
    src: tiergarten,
    title: "Tiergarten",
    year: "2024",
  },
];

export function Oxidation() {
  return <PhotoContainer photos={photos} />;
}