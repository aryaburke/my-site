"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { ACHIEVEMENTS, unlockAchievement } from "../helpers/achievements";

export default function NotFound() {
  useEffect(() => {
    // give a bit of time for AchievementsManager to load
    setTimeout(() => {
      unlockAchievement(ACHIEVEMENTS.getLost.name);
    }, 500);
  }, []);

  return (
    <div className="text-container">
      <div className="not-found">
        <p>404</p>
        <p>
          <i>
            You must be lost.{" "}
            <Link href="/">Here's your way home, when you want it.</Link>
          </i>
        </p>
        <p>
          <i>But maybe pause a minute and enjoy one of my favorite poems?</i>
        </p>
      </div>
      <br />
      <br />
      <p className="poem-title">When I Heard the Learn’d Astronomer</p>
      <p className="poem-year">Walt Whitman</p>
      <br />
      <div className="poem-container">
        <p>When I heard the learn’d astronomer,</p>
        <p>When the proofs, the figures, were ranged in columns before me, </p>
        <p>
          When I was shown the charts and diagrams, to add, divide, and measure
          them,
        </p>
        <p>
          When I sitting heard the astronomer where he lectured with much
          applause in the lecture-room,
        </p>
        <p>How soon unaccountable I became tired and sick,</p>
        <p>Till rising and gliding out I wander’d off by myself,</p>
        <p>In the mystical moist night-air, and from time to time,</p>
        <p>Look’d up in perfect silence at the stars.</p>
      </div>
    </div>
  );
}
