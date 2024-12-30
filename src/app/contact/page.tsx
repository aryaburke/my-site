"use client";
import React from "react";
import $ from "jquery";
import dragonDaggerAnimated from "../../assets/dragon-dagger-animated.ani";
import { toggleCursor } from "../../helpers/cursorHelpers";
import { CursorEffectResult, textFlag } from "cursor-effects";
import runeScapeFont from "../../assets/RuneScape-Chat-Bold-07.ttf";

let cursor: CursorEffectResult | null = null;

const EMAIL = "aryaburke4@gmail.com";

export default function Contact() {
  async function toggleRuneScape() {
    $("body").toggleClass("runescape");
    toggleCursor("a", dragonDaggerAnimated.src);
    toggleCursor(".clickable", dragonDaggerAnimated.src);
    if (cursor) {
      cursor.destroy();
      cursor = null;
    } else {
      cursor = new (textFlag as any)({
        text: "<3 Buying gf 10k <3",
        color: ["#00ff00"],
        font: runeScapeFont,
        textSize: 13,
        gap: 0,
      });
    }
  }

  return (
    <div className="text-container">
      <p>
        Email me at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
      <p>
        Find me on{" "}
        <a
          href="https://app.thestorygraph.com/profile/aryaxo"
          target="_blank"
          rel="noopener noreferrer"
        >
          The StoryGraph
        </a>
        .
      </p>
      <p>
        Or on{" "}
        <a
          href="https://rateyourmusic.com/~aryaburke"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rate Your Music
        </a>
        .
      </p>
      <p>
        Or maybe{" "}
        <a
          href="https://stats.fm/user/aryaxo?range=current_year"
          target="_blank"
          rel="noopener noreferrer"
        >
          stats.fm
        </a>
        ?
      </p>
      <p>
        But most importantly, add me on{" "}
        <span className="clickable" onClick={toggleRuneScape}>
          RuneScape
        </span>
        .
      </p>
      <p>
        Find the source code for this site{" "}
        <a
          href="https://github.com/aryaburke/my-site"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
    </div>
  );
}
