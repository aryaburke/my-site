"use client";
import React, { MouseEventHandler, useEffect, useState } from "react";
import KonamiTrigger from "konami";
import $ from "jquery";
import useSound from "use-sound";

import complicated from "../assets/04-avril_lavigne-complicated.flac";

const EMOGIRL_STR = "emogirl";

export default function Konami() {
  const [play] = useSound(complicated);
  const [emogirl, setEmogirl] = useState(false);

  useEffect(() => {
    const konami = new KonamiTrigger(() => {
      setEmogirl(!EMOGIRL_STR);
      $("body").toggleClass(EMOGIRL_STR);
      play();
    });
    // for debugging: turn pattern to up arrow
    konami.pattern = "38";
  }, []);

  return <button onClick={play as MouseEventHandler}>xxx</button>;
}
