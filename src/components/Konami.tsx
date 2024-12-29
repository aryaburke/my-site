"use client";
import React, { useEffect, useState } from "react";
import KonamiTrigger from "konami";
import $ from "jquery";
import { toggleCursor } from "../helpers/cursorHelpers";

import complicated from "../assets/04-avril_lavigne-complicated.mp3";
import oneDirectionCursor from "../assets/one-direction-cursor.ani";
import bioLinkCursor from "../assets/bio-link.ani";

const EMOGIRL_STR = "emogirl";

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
          "This easter egg only works if you've interacted with the site. After you dismiss me, please click or tap anywhere on the screen :)"
        );
        await new Promise((r) => setTimeout(r, 3000));
      }

      // handle CSS
      $("body").toggleClass(EMOGIRL_STR);
      toggleCursor("body", oneDirectionCursor.src);
      toggleCursor("a", bioLinkCursor.src);

      // handle music
      // if (audio.paused) {
      //   audio.play();
      // } else {
      //   audio.pause();
      // }
    });

    // for debugging: turn pattern to up arrow
    konami.pattern = "38";
  }, []);

  return <></>;
}
