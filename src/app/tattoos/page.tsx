"use client";
import React from "react";
import { TATTOOS } from "../../helpers/photoConsts";
import dynamic from "next/dynamic";

const PhotoContainer = dynamic(
  () => import("../../components/PhotoContainer"),
  { ssr: false }
);

export default function Tattoos() {
  return <PhotoContainer photos={TATTOOS} verticalOverride={true} />;
}
