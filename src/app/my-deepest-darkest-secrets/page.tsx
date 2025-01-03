"use client";
import React, { useEffect } from "react";
import { ACHIEVEMENTS, unlockAchievement } from "../../helpers/achievements";
import { shuffle } from "lodash";

type Performance = {
  name: string;
  url: string;
};

const PERFORMANCES: Performance[] = [
  {
    name: "Macbeth",
    url: "https://www.youtube.com/watch?v=VhnHK-l-dks",
  },
  {
    name: "King Lear",
    url: "https://www.youtube.com/watch?v=gtvld2NzCQQ",
  },
  {
    name: "Illuminosity",
    url: "https://www.youtube.com/watch?v=JKP3hH7-HQ8",
  },
  {
    name: "The Midnight Comedy Troupe",
    url: "https://www.midnightcomedytroupe.com/",
  },
];

export default function Theater() {
  useEffect(() => {
    // give a bit of time for AchievementsManager to load
    setTimeout(() => {
      unlockAchievement(ACHIEVEMENTS.secrets.name);
    }, 500);
  }, []);

  const shuffledPerformances = shuffle(PERFORMANCES);

  return (
    <div className="text-container">
      <p>Wow, you're nosy.</p>
      <p>
        You can already find out that I rap on this website, what more do you
        want?
      </p>
      <p>But I admire the dedication! Means you're a real head.</p>
      <p>
        You'll probably enjoy these selections from my acting and firedancing
        career, then.
      </p>
      <p>You're gonna have to work harder if you want real secrets, though.</p>
      <br />
      {shuffledPerformances.map((performance, idx) => (
        <p key={`performance_${idx}`}>
          <a
            href={performance.url}
            target="_blank"
            rel="noopener noreferrer"
            suppressHydrationWarning
          >
            {performance.name}
          </a>
        </p>
      ))}
    </div>
  );
}
