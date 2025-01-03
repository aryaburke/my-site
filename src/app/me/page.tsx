"use client";
import React, { useState } from "react";
import $ from "jquery";
import dragonDaggerAnimated from "../../assets/dragon-dagger-animated.ani";
import { toggleCursor } from "../../helpers/cursorHelpers";
import { CursorEffectResult, textFlag } from "cursor-effects";
import runeScapeFont from "../../assets/RuneScape-Chat-Bold-07.ttf";
import jingle from "../../assets/grand-exchange-jingle.mp3";
import barbarianism from "../../assets/barbarianism.mp3";
import Link from "next/link";
import { ACHIEVEMENTS, unlockAchievement } from "../../helpers/achievements";
import PhotoContainer from "../../components/PhotoContainer";
import { PHOTOS_OF_ME } from "../../helpers/photoConsts";

let cursors: CursorEffectResult[] = [];

const CURSOR_MESSAGES_AND_COLORS: [string, string][] = [
  ["Buying gf 10k <3", "#00ff00"],
  ["Free armor trimming!!!!", "#ff0000"],
  ["Doubling money", "#ffffff"],
  ["wc lvls?", "#00ffff"],
];

const EMAIL = "aryaburke4@gmail.com";

export default function Me() {
  const [jingleAudio] = useState<HTMLAudioElement | null>(
    // Audio can be undefined on server-side, but always available on client
    typeof Audio !== "undefined" ? new Audio(jingle.src) : null
  );
  const [barbarianismAudio] = useState<HTMLAudioElement | null>(
    typeof Audio !== "undefined" ? new Audio(barbarianism.src) : null
  );

  async function toggleRuneScape() {
    unlockAchievement(ACHIEVEMENTS.runeScape.name);
    $("body").toggleClass("runescape");
    toggleCursor("a", dragonDaggerAnimated.src);
    toggleCursor(".clickable", dragonDaggerAnimated.src);
    if (cursors.length > 0) {
      // handle cursor
      cursors.forEach((c) => {
        c.destroy();
      });
      cursors = [];

      // handle audio
      jingleAudio?.pause();
      barbarianismAudio?.pause();
    } else {
      // handle cursor
      CURSOR_MESSAGES_AND_COLORS.forEach(([message, color], idx) => {
        setTimeout(() => {
          cursors.push(
            new (textFlag as any)({
              text: message,
              color: [color],
              font: runeScapeFont,
              textSize: 13,
              gap: 0,
            })
          );
        }, idx * 150);
      });

      // handle audio
      // early exit if audio is null (should never happen on client)
      if (jingleAudio === null) {
        return;
      }
      if (jingleAudio.paused) {
        jingleAudio.play();
      }
      setTimeout(() => {
        if (barbarianismAudio === null) {
          return;
        }
        if (barbarianismAudio.paused) {
          barbarianismAudio.play();
        }
      }, 2100);
    }
  }

  return (
    <>
      <div className="text-container no-bottom-padding">
        <p>Want a hint, or to grab a coffee, get a tattoo, or report a bug?</p>
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
            Rate Your Music,
          </a>{" "}
          or{" "}
          <a
            href="https://stats.fm/user/aryaxo?range=lifetime"
            target="_blank"
            rel="noopener noreferrer"
          >
            stats.fm
          </a>
          .
        </p>
        <p>
          But most importantly, add me on{" "}
          <Link href="/" onClick={toggleRuneScape}>
            RuneScape
          </Link>
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
        <p>
          Here are some of my favorite pics of me, shoutout to my{" "}
          <Link href="/friends">friends.</Link> :)
        </p>
      </div>
      <PhotoContainer photos={PHOTOS_OF_ME} />
    </>
  );
}
