"use client";
import React, { useEffect, useState } from "react";
import KonamiTrigger from "konami";
import $ from "jquery";
import { toggleCursor } from "../helpers/cursorHelpers";

import complicated from "../assets/complicated.mp3";
import oneDirectionCursor from "../assets/one-direction-cursor.ani";
import bleedingSkullCursor from "../assets/bleeding-skull.ani";
import { CursorEffectResult } from "cursor-effects";
import { emojiCursor } from "../helpers/emojiCursor";
import { makeItRain, stopTheRain } from "../helpers/rain";

const EMOGIRL_STR = "emogirl";

let emojiCursorAnimation: CursorEffectResult | null;

export default function Konami() {
  const [audio] = useState<HTMLAudioElement | null>(
    // Audio can be undefined on server-side, but always available on client
    typeof Audio !== "undefined" ? new Audio(complicated.src) : null
  );

  useEffect(() => {
    const konami = new KonamiTrigger(async () => {
      // early exit if audio is null (should never happen on client)
      if (audio === null) {
        return;
      }

      // check for activity, since music only works with it
      if (!navigator.userActivation.hasBeenActive) {
        alert(
          "This easter egg only works if you've interacted with the site. After you dismiss me, please click or tap anywhere on the screen, then wait a few seconds :)"
        );
        await new Promise((r) => setTimeout(r, 3000));
      }

      // handle CSS
      $("body").toggleClass(EMOGIRL_STR);
      toggleCursor("body", bleedingSkullCursor.src);
      toggleCursor("a", oneDirectionCursor.src);

      // handle cursor animation
      if (emojiCursorAnimation) {
        emojiCursorAnimation.destroy();
        emojiCursorAnimation = null;
      } else {
        emojiCursorAnimation = new (emojiCursor as any)({
          emoji: ["💀", "🖤", "💔", "🌧️", "💖"],
          delay: 99,
        });
      }

      // handle music and rain
      if (audio.paused) {
        audio.play();
        makeItRain();
      } else {
        audio.pause();
        stopTheRain();
      }
    });

    // for debugging: turn pattern to up arrow
    konami.pattern = "38";
  }, []);

  return <></>;
}
