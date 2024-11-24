import React from "react";
import type { Photo } from "../../components/PhotoContainer.tsx";
import PhotoContainer from "../../components/PhotoContainer.tsx";

import andrew_at_night from "../../photos/beacons/andrew_at_night.jpg";
import andrew_in_red_hook from "../../photos/beacons/andrew_in_red_hook.jpg";
import andrew_in_the_fall from "../../photos/beacons/andrew_in_the_fall.jpg";
import ankit_on_the_rocks from "../../photos/beacons/ankit_on_the_rocks.jpg";
import arya_and_light from "../../photos/beacons/arya_and_light.jpg";
import building_trains from "../../photos/beacons/building_trains.jpg";
import charley_and_light from "../../photos/beacons/charley_and_light.jpg";
import charley_in_the_desert from "../../photos/beacons/charley_in_the_desert.jpeg";
import diane_in_the_park from "../../photos/beacons/diane_in_the_park.jpg";
import erica_at_jacob_riis from "../../photos/beacons/erica_at_jacob_riis.jpg";
import erica_focusing from "../../photos/beacons/erica_focusing.jpg";
import grbanzo from "../../photos/beacons/grbanzo.jpg";
import kaitlin_and_dan_and_the_land from "../../photos/beacons/kaitlin_and_dan_and_the_land.jpg";
import kaitlin_and_winter_and_light from "../../photos/beacons/kaitlin_and_winter_and_light.jpg";
import kenny_and_bill_chained from "../../photos/beacons/kenny_and_bill_chained.jpg";
import kenny_on_the_beach from "../../photos/beacons/kenny_on_the_beach.jpg";
import lane_at_broadway_junction from "../../photos/beacons/lane_at_broadway_junction.jpg";
import lauren_chains_kenny from "../../photos/beacons/lauren_chains_kenny.jpg";
import lauren_in_the_forest from "../../photos/beacons/lauren_in_the_forest.jpg";
import mary_mary_steeple from "../../photos/beacons/mary_mary_steeple.jpg";
import nancy_as_dragula from "../../photos/beacons/nancy_as_dragula.jpg";
import sharabesh_in_the_rearview from "../../photos/beacons/sharabesh_in_the_rearview.jpg";
import shes_evergreen from "../../photos/beacons/shes_evergreen.jpg";

const PHOTOS: Photo[] = [
  {
    src: andrew_at_night,
    title: "Andrew at Night",
    year: "2024",
  },
  {
    src: andrew_in_red_hook,
    title: "Andrew in Red Hook",
    year: "2024",
  },
  {
    src: andrew_in_the_fall,
    title: "Andrew in the Fall",
    year: "2024",
  },
  {
    src: ankit_on_the_rocks,
    title: "Ankit on the Rocks",
    year: "2024",
  },
  {
    src: arya_and_light,
    title: "Arya and Light",
    year: "2024",
    vertical: true,
  },
  {
    src: building_trains,
    title: "Building Trains",
    year: "2024",
  },
  {
    src: charley_and_light,
    title: "Charley and Light",
    year: "2024",
  },
  {
    src: charley_in_the_desert,
    title: "Charley in the Desert",
    year: "2022",
    vertical: true,
  },
  {
    src: diane_in_the_park,
    title: "Diane in the Park",
    year: "2024",
  },
  {
    src: erica_at_jacob_riis,
    title: "Erica at Jacob Riis",
    year: "2024",
  },
  {
    src: erica_focusing,
    title: "Erica Focusing",
    year: "2024",
  },
  {
    src: grbanzo,
    title: "GRBANZO",
    year: "2024",
  },
  {
    src: kaitlin_and_dan_and_the_land,
    title: "Kaitlin and Dan and Yellowstone",
    year: "2024",
  },
  {
    src: kaitlin_and_winter_and_light,
    title: "Kaitlin and Winter and Light",
    year: "2024",
  },
  {
    src: kenny_and_bill_chained,
    title: "Kenny and Bill Chained",
    year: "2024",
  },
  {
    src: kenny_on_the_beach,
    title: "Kenny on the Beach",
    year: "2024",
  },
  {
    src: lane_at_broadway_junction,
    title: "Lane at Broadway Junction",
    year: "2024",
  },
  {
    src: lauren_chains_kenny,
    title: "Lauren Chains Kenny",
    year: "2024",
  },
  {
    src: lauren_in_the_forest,
    title: "Lauren in the Forest",
    year: "2024",
  },
  {
    src: mary_mary_steeple,
    title: "Mary / Mary / Steeple",
    year: "2024",
  },
  {
    src: nancy_as_dragula,
    title: "Nancy as Dragula",
    year: "2024",
  },
  {
    src: sharabesh_in_the_rearview,
    title: "Sharabesh in the Rearview",
    year: "2024",
  },
  {
    src: shes_evergreen,
    title: "She's Evergreen",
    year: "2024",
  },
];

export function Beacons() {
  return <PhotoContainer photos={PHOTOS} />;
}
