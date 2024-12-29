"use client";
import React from "react";
import $ from "jquery";
import dragonDaggerAnimated from "../assets/dragon-dagger-animated.ani";
import { toggleCursor } from "../helpers/cursorHelpers";
import Link from "next/link";

export default function IntroText() {
  async function toggleRuneScape() {
    $("body").toggleClass("runescape");
    toggleCursor("a", dragonDaggerAnimated.src);
  }

  return (
    <p>
      <i>
        Hi — I'm{" "}
        <Link href="" onClick={toggleRuneScape}>
          Arya Burke
        </Link>{" "}
        — I live in Brooklyn, NY — Here you can find some of my art.
      </i>
    </p>
  );
}
