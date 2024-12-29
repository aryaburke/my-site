"use client";
import React, { useEffect, useMemo, useState } from "react";
import KonamiTrigger from "konami";
import $ from "jquery";
import complicated from "../assets/04-avril_lavigne-complicated.flac";

const EMOGIRL_STR = "emogirl";

export default function Konami() {
  const audio = useMemo((): HTMLAudioElement => new Audio(complicated.src), []);
  const [emogirl, setEmogirl] = useState(false);

  useEffect(() => {
    const konami = new KonamiTrigger(() => {
      setEmogirl(!EMOGIRL_STR);
      $("body").toggleClass(EMOGIRL_STR);
      if (emogirl) {
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
