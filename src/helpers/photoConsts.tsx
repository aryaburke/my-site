import andrew_at_night from "../photos/andrew_at_night.jpg";
import andrew_in_red_hook from "../photos/andrew_in_red_hook.jpg";
import andrew_in_the_fall from "../photos/andrew_in_the_fall.jpg";
import ankit_on_the_rocks from "../photos/ankit_on_the_rocks.jpg";
import arya_and_light from "../photos/arya_and_light.jpg";
import building_trains from "../photos/building_trains.jpg";
import charley_and_light from "../photos/charley_and_light.jpg";
import charley_in_the_desert from "../photos/charley_in_the_desert.jpeg";
import diane_in_the_park from "../photos/diane_in_the_park.jpg";
import erica_at_jacob_riis from "../photos/erica_at_jacob_riis.jpg";
import erica_focusing from "../photos/erica_focusing.jpg";
import grbanzo from "../photos/grbanzo.jpg";
import kaitlin_and_dan_and_the_land from "../photos/kaitlin_and_dan_and_the_land.jpg";
import kaitlin_and_winter_and_light from "../photos/kaitlin_and_winter_and_light.jpg";
import kenny_and_bill_chained from "../photos/kenny_and_bill_chained.jpg";
import kenny_on_the_beach from "../photos/kenny_on_the_beach.jpg";
import lane_at_broadway_junction from "../photos/lane_at_broadway_junction.jpg";
import lauren_chains_kenny from "../photos/lauren_chains_kenny.jpg";
import lauren_in_the_forest from "../photos/lauren_in_the_forest.jpg";
import mary_mary_steeple from "../photos/mary_mary_steeple.jpg";
import nancy_as_dragula from "../photos/nancy_as_dragula.jpg";
import sharabesh_in_the_rearview from "../photos/sharabesh_in_the_rearview.jpg";
import shes_evergreen from "../photos/shes_evergreen.jpg";

import auschwitz_i from "../photos/auschwitz_i.jpg";
import crystal_vision from "../photos/crystal_vision.jpg";
import from_varick_street from "../photos/from_varick_street.jpg";
import haleakala from "../photos/haleakala.jpg";
import siegessaule from "../photos/siegessaule.jpg";
import sunset_park_materials_recovery_facility from "../photos/sunset_park_materials_recovery_facility.jpg";

import brooklyn_crevice from "../photos/brooklyn_crevice.jpg";
import denkmal_fur_die_ermordeten_juden_europas from "../photos/denkmal_fur_die_ermordeten_juden_europas.jpg";
import erie_basin_auto_pound from "../photos/erie_basin_auto_pound.jpg";
import from_the_roof from "../photos/from_the_roof.jpg";
import grimentz from "../photos/grimentz.jpg";
import krakow_sunset from "../photos/krakow_sunset.jpg";
import equipment from "../photos/equipment.jpg";
import out_to_sea from "../photos/out_to_sea.jpg";
import rafters from "../photos/rafters.jpg";
import red_hook_grain_terminal from "../photos/red_hook_grain_terminal.jpg";
import returning_home from "../photos/returning_home.jpg";
import steel from "../photos/steel.jpg";
import sun_tunnels_i from "../photos/sun_tunnels_i.jpeg";
import sun_tunnels_ii from "../photos/sun_tunnels_ii.jpeg";
import the_vacant_lot from "../photos/the_vacant_lot.jpg";
import tiergarten from "../photos/tiergarten.jpg";

import a_joust_begins from "../photos/a_joust_begins.jpg";
import a_rainbow from "../photos/a_rainbow.jpg";
import giewont_ascent from "../photos/giewont_ascent.jpg";
import in_the_tatras from "../photos/in_the_tatras.jpg";
import krakow_afternoon from "../photos/krakow_afternoon.jpg";
import photographing from "../photos/photographing.jpg";

import alps_aflame from "../photos/alps_aflame.jpg";
import andrew_in_the_glades from "../photos/andrew_in_the_glades.jpg";
import combe_de_sorebois from "../photos/combe_de_sorebois.jpg";
import czarny_staw_gasienicowy from "../photos/czarny_staw_gasienicowy.jpg";
import elation from "../photos/elation.jpg";
import great_salt_lake from "../photos/great_salt_lake.jpeg";
import into_the_lakebed from "../photos/into_the_lakebed.jpg";
import mostly_sky from "../photos/mostly_sky.jpg";
import oceanshine from "../photos/oceanshine.jpg";
import pine_creek_falls from "../photos/pine_creek_falls.jpg";
import tatra_cliffs from "../photos/tatra_cliffs.jpg";

import branching from "../photos/branching.jpg";
import cherries from "../photos/cherries.jpg";
import coat_hanger from "../photos/coat_hanger.jpg";
import ghostie from "../photos/ghostie.jpg";
import growing from "../photos/growing.jpg";
import moon1 from "../photos/moon1.jpeg";
import moon2 from "../photos/moon2.jpg";
import moth from "../photos/moth.jpg";
import my_body_is_mine from "../photos/my_body_is_mine.jpg";
import pine_tree from "../photos/pine_tree.jpg";
import present from "../photos/present.jpg";
import red_flag from "../photos/red_flag.jpg";
import seedling from "../photos/seedling.jpg";
import sigil from "../photos/sigil.jpg";
import squiggle from "../photos/squiggle.jpg";
import tooth from "../photos/tooth.jpg";
import tucker from "../photos/tucker.jpg";
import tv from "../photos/tv.jpg";

import kaitlin_and_i_crossing_the_lamar_river from "../photos/kaitlin_and_i_crossing_the_lamar_river.jpg";
import lauren_and_i_in_a_jewelry_store from "../photos/lauren_and_i_in_a_jewelry_store.jpg";
import me_in_a_ruin from "../photos/me_in_a_ruin.jpg";
import me_in_the_alps from "../photos/me_in_the_alps.jpg";
import me_in_the_hudson_valley from "../photos/me_in_the_hudson_valley.jpg";
import me_in_the_botanic_gardens from "../photos/me_in_the_botanic_gardens.JPG";

export type Photo = {
  src: string;
  title: string;
  year?: string;
  alt?: string;
  vertical?: boolean;
  shotBy?: string;
};

export type PhotoPage = {
  title: string;
  photos: Photo[];
  slug?: string;
  order?: number;
};

export const ALL_PHOTOS: Record<string, Photo> = {
  andrewAtNight: {
    src: andrew_at_night.src,
    title: "Andrew at Night",
    year: "2024",
  },
  andrewInRedHook: {
    src: andrew_in_red_hook.src,
    title: "Andrew in Red Hook",
    year: "2024",
  },
  andrewInTheFall: {
    src: andrew_in_the_fall.src,
    title: "Andrew in the Fall",
    year: "2024",
  },
  ankitOnTheRocks: {
    src: ankit_on_the_rocks.src,
    title: "Ankit on the Rocks",
    year: "2024",
  },
  buildingTrains: {
    src: building_trains.src,
    title: "Building the L Train for Crabs",
    year: "2024",
  },
  charleyAndLight: {
    src: charley_and_light.src,
    title: "Charley and Light",
    year: "2024",
  },
  charleyInTheDesert: {
    src: charley_in_the_desert.src,
    title: "Charley in the Desert",
    year: "2022",
    vertical: true,
  },
  dianeInThePark: {
    src: diane_in_the_park.src,
    title: "Diane in the Park",
    year: "2024",
  },
  ericaAtJacobRiis: {
    src: erica_at_jacob_riis.src,
    title: "Erica at Jacob Riis",
    year: "2024",
  },
  ericaFocusing: {
    src: erica_focusing.src,
    title: "Erica Focusing",
    year: "2024",
  },
  grbanzo: {
    src: grbanzo.src,
    title: "GRBANZO",
    year: "2024",
  },
  kaitlinAndDanAndTheLand: {
    src: kaitlin_and_dan_and_the_land.src,
    title: "Kaitlin and Dan and Yellowstone",
    year: "2024",
  },
  kaitlinAndWinterAndLight: {
    src: kaitlin_and_winter_and_light.src,
    title: "Kaitlin and Winter and Light",
    year: "2024",
  },
  kennyAndBillChained: {
    src: kenny_and_bill_chained.src,
    title: "Kenny and Bill Chained",
    year: "2024",
  },
  kennyOnTheBeach: {
    src: kenny_on_the_beach.src,
    title: "Kenny on the Beach",
    year: "2024",
  },
  laneAtBroadwayJunction: {
    src: lane_at_broadway_junction.src,
    title: "Lane at Broadway Junction",
    year: "2024",
  },
  laurenChainsKenny: {
    src: lauren_chains_kenny.src,
    title: "Lauren Chains Kenny",
    year: "2024",
  },
  laurenInTheForest: {
    src: lauren_in_the_forest.src,
    title: "Lauren in the Forest",
    year: "2024",
  },
  maryMarySteeple: {
    src: mary_mary_steeple.src,
    title: "Mary / Mary / Steeple",
    year: "2024",
  },
  nancyAsDragula: {
    src: nancy_as_dragula.src,
    title: "Nancy as Dragula",
    year: "2024",
  },
  sharabeshInTheRearview: {
    src: sharabesh_in_the_rearview.src,
    title: "Sharabesh in the Rearview",
    year: "2024",
  },
  shesEvergreen: {
    src: shes_evergreen.src,
    title: "She's Evergreen",
    year: "2024",
  },
  auschwitzI: {
    src: auschwitz_i.src,
    title: "Auschwitz I",
    year: "2024",
  },
  crystalVision: {
    src: crystal_vision.src,
    title: "Crystal Vision",
    year: "2024",
  },
  fromVarickStreet: {
    src: from_varick_street.src,
    title: "From Varick Street",
    year: "2024",
  },
  haleakala: {
    src: haleakala.src,
    title: "Haleakalā",
    year: "2024",
  },
  siegessaule: {
    src: siegessaule.src,
    title: "Siegessäule",
    year: "2024",
  },
  sunsetParkMaterialsRecoveryFacility: {
    src: sunset_park_materials_recovery_facility.src,
    title: "Sunset Park Materials Recovery Facility",
    year: "2024",
  },
  brooklynCrevice: {
    src: brooklyn_crevice.src,
    title: "Brooklyn Crevice",
    year: "2024",
  },
  denkmalFurDieErmordetenJudenEuropas: {
    src: denkmal_fur_die_ermordeten_juden_europas.src,
    title: "Denkmal für die Ermordeten Juden Europas",
    year: "2024",
  },
  erieBasinAutoPound: {
    src: erie_basin_auto_pound.src,
    title: "Erie Basin Auto Pound",
    year: "2024",
  },
  fromTheRoof: {
    src: from_the_roof.src,
    title: "From the Roof",
    year: "2024",
  },
  grimentz: {
    src: grimentz.src,
    title: "Grimentz",
    year: "2024",
  },
  krakowSunset: {
    src: krakow_sunset.src,
    title: "Kraków Sunset",
    year: "2024",
    vertical: true,
  },
  equipment: {
    src: equipment.src,
    title: "Equipment",
    year: "2024",
  },
  outToSea: {
    src: out_to_sea.src,
    title: "Out to Sea",
    year: "2024",
  },
  rafters: {
    src: rafters.src,
    title: "Rafters",
    year: "2024",
  },
  redHookGrainTerminal: {
    src: red_hook_grain_terminal.src,
    title: "Red Hook Grain Terminal",
    year: "2024",
  },
  returningHome: {
    src: returning_home.src,
    title: "Returning Home",
    year: "2024",
  },
  steel: {
    src: steel.src,
    title: "Steel",
    year: "2024",
  },
  sunTunnelsI: {
    src: sun_tunnels_i.src,
    title: "Sun Tunnels I",
    year: "2022",
    vertical: true,
  },
  sunTunnelsII: {
    src: sun_tunnels_ii.src,
    title: "Sun Tunnels II",
    year: "2022",
    vertical: true,
  },
  theVacantLot: {
    src: the_vacant_lot.src,
    title: "The Vacant Lot",
    year: "2024",
    vertical: true,
  },
  tiergarten: {
    src: tiergarten.src,
    title: "Tiergarten",
    year: "2024",
  },
  aJoustBegins: {
    src: a_joust_begins.src,
    title: "A Joust Begins",
    year: "2024",
  },
  aRainbow: {
    src: a_rainbow.src,
    title: "A Rainbow",
    year: "2024",
  },
  giewontAscent: {
    src: giewont_ascent.src,
    title: "Giewont Ascent",
    year: "2024",
    vertical: true,
  },
  inTheTatras: {
    src: in_the_tatras.src,
    title: "In the Tatras",
    year: "2024",
  },
  krakowAfternoon: {
    src: krakow_afternoon.src,
    title: "Kraków Afternoon",
    year: "2024",
    vertical: true,
  },
  photographing: {
    src: photographing.src,
    title: "Photographing",
    year: "2024",
  },
  alpsAflame: {
    src: alps_aflame.src,
    title: "Alps Aflame",
    year: "2024",
  },
  andrewInTheGlades: {
    src: andrew_in_the_glades.src,
    title: "Andrew in the Glades",
    year: "2024",
  },
  combeDeSorebois: {
    src: combe_de_sorebois.src,
    title: "Combe de Sorebois",
    year: "2024",
  },
  czarnyStawGasienicowy: {
    src: czarny_staw_gasienicowy.src,
    title: "Czarny Staw Gąsienicowy",
    year: "2024",
    vertical: true,
  },
  elation: {
    src: elation.src,
    title: "Elation",
    year: "2024",
    vertical: true,
  },
  greatSaltLake: {
    src: great_salt_lake.src,
    title: "Great Salt Lake",
    year: "2022",
    vertical: true,
  },
  intoTheLakebed: {
    src: into_the_lakebed.src,
    title: "Into the Lakebed",
    year: "2022",
    vertical: true,
  },
  mostlySky: {
    src: mostly_sky.src,
    title: "Mostly Sky",
    year: "2024",
  },
  oceanshine: {
    src: oceanshine.src,
    title: "Oceanshine",
    year: "2024",
  },
  pineCreekFalls: {
    src: pine_creek_falls.src,
    title: "Pine Creek Falls",
    year: "2024",
    vertical: true,
  },
  tatraCliffs: {
    src: tatra_cliffs.src,
    title: "Tatra Cliffs",
    year: "2024",
  },
  branching: {
    src: branching.src,
    title: "Branching",
    year: "2019",
  },
  cherries: {
    src: cherries.src,
    title: "Cherries",
    year: "2020",
  },
  coatHanger: {
    src: coat_hanger.src,
    title: "Coat Hanger",
    year: "2019",
  },
  ghostie: {
    src: ghostie.src,
    title: "Ghostie",
    year: "2019",
  },
  growing: {
    src: growing.src,
    title: "Growing",
    year: "2020",
  },
  moon1: {
    src: moon1.src,
    title: "Moon",
    year: "2019",
  },
  moon2: {
    src: moon2.src,
    title: "Moon",
    year: "2024",
  },
  moth: {
    src: moth.src,
    title: "Moth",
    year: "2020",
  },
  myBodyIsMine: {
    src: my_body_is_mine.src,
    title: "My Body Is Mine",
    year: "2019",
  },
  pineTree: {
    src: pine_tree.src,
    title: "Pine Tree",
    year: "2019",
  },
  present: {
    src: present.src,
    title: "Present",
    year: "2019",
  },
  redFlag: {
    src: red_flag.src,
    title: "Red Flag",
    year: "2021",
  },
  seedling: {
    src: seedling.src,
    title: "Seedling",
    year: "2020",
  },
  sigil: {
    src: sigil.src,
    title: "Sigil",
    year: "2019",
  },
  squiggle: {
    src: squiggle.src,
    title: "Squiggle",
    year: "2019",
  },
  tooth: {
    src: tooth.src,
    title: "Tooth",
    year: "2019",
  },
  tucker: {
    src: tucker.src,
    title: "Tucker",
    year: "2021",
  },
  tv: {
    src: tv.src,
    title: "TV",
    year: "2019",
  },
  meInARuin: {
    src: me_in_a_ruin.src,
    title: "Me in a Ruin",
    shotBy: "Andrew",
    vertical: true,
  },
  meInTheHudsonValley: {
    src: me_in_the_hudson_valley.src,
    title: "Me on Breakneck Ridge",
    shotBy: "Peter",
    vertical: true,
  },
  meInTheAlps: {
    src: me_in_the_alps.src,
    title: "Skiing the Alps",
    shotBy: "Andrew",
  },
  meInTheBotanicGardens: {
    src: me_in_the_botanic_gardens.src,
    title: "Me in the Botanic Gardens",
    shotBy: "Shreeya",
    vertical: true,
  },
  laurenAndIInAJewelryStore: {
    src: lauren_and_i_in_a_jewelry_store.src,
    title: "Lauren and I in Popular Jewelry",
    shotBy: "Lauren",
    vertical: true,
  },
  kaitlinAndICrossingTheLamarRiver: {
    src: kaitlin_and_i_crossing_the_lamar_river.src,
    title: "Kaitlin and I Crossing the Lamar River",
    shotBy: "Dan",
    vertical: true,
  },
};

export const PHOTO_PAGES: PhotoPage[] = [
  {
    title: "Beacons",
    slug: "kin",
    order: 0,
    photos: [
      ALL_PHOTOS.andrewAtNight,
      ALL_PHOTOS.andrewInRedHook,
      ALL_PHOTOS.andrewInTheFall,
      ALL_PHOTOS.ankitOnTheRocks,
      ALL_PHOTOS.buildingTrains,
      ALL_PHOTOS.charleyAndLight,
      ALL_PHOTOS.charleyInTheDesert,
      ALL_PHOTOS.dianeInThePark,
      ALL_PHOTOS.ericaAtJacobRiis,
      ALL_PHOTOS.ericaFocusing,
      ALL_PHOTOS.kaitlinAndDanAndTheLand,
      ALL_PHOTOS.kaitlinAndWinterAndLight,
      ALL_PHOTOS.kennyAndBillChained,
      ALL_PHOTOS.kennyOnTheBeach,
      ALL_PHOTOS.laneAtBroadwayJunction,
      ALL_PHOTOS.laurenChainsKenny,
      ALL_PHOTOS.laurenInTheForest,
      ALL_PHOTOS.maryMarySteeple,
      ALL_PHOTOS.nancyAsDragula,
      ALL_PHOTOS.sharabeshInTheRearview,
      ALL_PHOTOS.shesEvergreen,
      ALL_PHOTOS.grbanzo,
    ],
  },
  {
    title: "Oxidation",
    order: 1,
    slug: "reclamation",
    photos: [
      ALL_PHOTOS.denkmalFurDieErmordetenJudenEuropas,
      ALL_PHOTOS.erieBasinAutoPound,
      ALL_PHOTOS.fromTheRoof,
      ALL_PHOTOS.grimentz,
      ALL_PHOTOS.equipment,
      ALL_PHOTOS.rafters,
      ALL_PHOTOS.redHookGrainTerminal,
      ALL_PHOTOS.steel,
      ALL_PHOTOS.sunTunnelsI,
      ALL_PHOTOS.sunTunnelsII,
      ALL_PHOTOS.theVacantLot,
      ALL_PHOTOS.tiergarten,
    ],
  },
  {
    title: "Reverence",
    slug: "anima",
    order: 2,
    photos: [
      ALL_PHOTOS.alpsAflame,
      ALL_PHOTOS.andrewInTheGlades,
      ALL_PHOTOS.combeDeSorebois,
      ALL_PHOTOS.czarnyStawGasienicowy,
      ALL_PHOTOS.elation,
      ALL_PHOTOS.greatSaltLake,
      ALL_PHOTOS.intoTheLakebed,
      ALL_PHOTOS.mostlySky,
      ALL_PHOTOS.oceanshine,
      ALL_PHOTOS.pineCreekFalls,
      ALL_PHOTOS.returningHome,
      ALL_PHOTOS.tatraCliffs,
    ],
  },
  {
    title: "Metropolis",
    slug: "cityscape",
    order: 3,
    photos: [
      ALL_PHOTOS.fromVarickStreet,
      ALL_PHOTOS.brooklynCrevice,
      ALL_PHOTOS.krakowSunset,
      ALL_PHOTOS.krakowAfternoon,
    ],
  },
  {
    title: "Hubris",
    slug: "apotheosis",
    order: 4,
    photos: [
      ALL_PHOTOS.auschwitzI,
      ALL_PHOTOS.crystalVision,
      ALL_PHOTOS.haleakala,
      ALL_PHOTOS.siegessaule,
      ALL_PHOTOS.sunsetParkMaterialsRecoveryFacility,
      ALL_PHOTOS.outToSea,
    ],
  },
  {
    title: "Strangers",
    slug: "journeys",
    order: 5,
    photos: [
      ALL_PHOTOS.aJoustBegins,
      ALL_PHOTOS.aRainbow,
      ALL_PHOTOS.giewontAscent,
      ALL_PHOTOS.inTheTatras,
      ALL_PHOTOS.photographing,
    ],
  },
];

export const TATTOOS: Photo[] = [
  ALL_PHOTOS.branching,
  ALL_PHOTOS.cherries,
  ALL_PHOTOS.coatHanger,
  ALL_PHOTOS.ghostie,
  ALL_PHOTOS.growing,
  ALL_PHOTOS.moon1,
  ALL_PHOTOS.moon2,
  ALL_PHOTOS.moth,
  ALL_PHOTOS.myBodyIsMine,
  ALL_PHOTOS.pineTree,
  ALL_PHOTOS.present,
  ALL_PHOTOS.redFlag,
  ALL_PHOTOS.seedling,
  ALL_PHOTOS.sigil,
  ALL_PHOTOS.squiggle,
  ALL_PHOTOS.tooth,
  ALL_PHOTOS.tucker,
  ALL_PHOTOS.tv,
];

export const PHOTOS_OF_ME: Photo[] = [
  ALL_PHOTOS.meInARuin,
  ALL_PHOTOS.meInTheAlps,
  ALL_PHOTOS.meInTheBotanicGardens,
  ALL_PHOTOS.meInTheHudsonValley,
  ALL_PHOTOS.laurenAndIInAJewelryStore,
  ALL_PHOTOS.kaitlinAndICrossingTheLamarRiver,
];
