"use client";
import React, { useEffect } from "react";

import {
  getAnnotatedPoems,
  getUrlFromTitle,
} from "../../../helpers/poemHelpers";
import Link from "next/link";
import { ACHIEVEMENTS, unlockAchievement } from "../../../helpers/achievements";

export default function PoemList() {
  useEffect(() => {
    // give a bit of time for AchievementsManager to load
    setTimeout(() => {
      unlockAchievement(ACHIEVEMENTS.poems.name);
    }, 500);
  }, []);

  const sortedPoems = getAnnotatedPoems().sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div className="text-container">
      <div className="poem-list-monologue">
        <p>Oh, hi.</p>
        <p>
          You must be one of those freaks looking around for a linear way to
          read these poems.
        </p>
        <p>Ugh, here it is.</p>
        <p>
          But just know that alphabetical title order is a nonsense way to read
          poetry. If you want the real order, ask to read my manuscript. You'll
          even get to read some that aren't on the site.
        </p>
        <p>
          Not to mention that I put so much work into connecting all the poems
          into this lovely poem web. And you're just going to stomp all over
          that. Get the work dirty with your greasy little linear paws. Feels a
          little disrespectful, huh?
        </p>
        <p>But if you must be the completionist, the list is right here.</p>
        <p>
          <i>Sicko.</i>
        </p>
      </div>
      <br />
      {sortedPoems.map((poem) => (
        <p key={poem.title}>
          <Link href={getUrlFromTitle(poem.title)}>{poem.title}</Link>
        </p>
      ))}
    </div>
  );
}
