"use client";
import React, { useEffect, useState } from "react";
import KonamiTrigger from "konami";
import $ from "jquery";
import complicated from "../assets/04-avril_lavigne-complicated.mp3";

const EMOGIRL_STR = "emogirl";

export default function Konami() {
  const [audio] = useState<HTMLAudioElement | null>(
    // Audio can be undefined on server-side, but always available on client
    typeof Audio !== "undefined" ? new Audio(complicated.src) : null
  );

  useEffect(() => {
    const konami = new KonamiTrigger(() => {
      $("body").toggleClass(EMOGIRL_STR);
      if (audio === null) {
        return;
      }
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    });
    // for debugging: turn pattern to up arrow
    konami.pattern = "38";
  }, []);

  return <></>;
}
