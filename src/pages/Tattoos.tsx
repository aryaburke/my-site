import React from "react";
import PhotoContainer from "../components/PhotoContainer";
import { TATTOOS } from "../helpers/photoConsts";

export function Tattoos() {
  return <PhotoContainer photos={TATTOOS} verticalOverride={true} />;
}
