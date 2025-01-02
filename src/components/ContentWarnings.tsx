"use client";
import React, { useState } from "react";
import { ACHIEVEMENTS, unlockAchievement } from "../helpers/achievements";

export default function ContentWarnings() {
  const [hover, setHover] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <p
      className="content-warning"
      onMouseEnter={() => {
        setHover(true);
        unlockAchievement(ACHIEVEMENTS.contentWarnings.name);
      }}
      onMouseLeave={() => setHover(false)}
      onClick={() => setShow(!show)}
    >
      {hover || show
        ? "content warnings: homophobia, transphobia, sexual violence, self-harm, gore, abuse, suicide, addiction, vomiting, needles, spiders, christian sacrilege :)"
        : "content warnings"}
    </p>
  );
}
