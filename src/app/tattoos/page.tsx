import React from "react";
import { TATTOOS } from "../../helpers/photoConsts";
import PhotoContainer from "../../components/PhotoContainer";

export default function Tattoos() {
  return <PhotoContainer photos={TATTOOS} verticalOverride={true} />;
}
