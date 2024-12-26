"use client";
import React, { useEffect, useState } from "react";
import KonamiTrigger from "konami";
import $ from "jquery";
import "../index.css";

const GIRLIEPOP_STR = "girliepop";

export default function Konami() {
  const [girliepop, setGirliepop] = useState(false);

  useEffect(() => {
    const stateGirliepop = localStorage.getItem(GIRLIEPOP_STR);
    if (stateGirliepop) {
      $("body").addClass(GIRLIEPOP_STR);
    }
    const konami = new KonamiTrigger(() => {
      setGirliepop(!GIRLIEPOP_STR);
      $("body").toggleClass(GIRLIEPOP_STR);
      localStorage.setItem(GIRLIEPOP_STR, (!girliepop).toString());
    });
    // for debugging: turn pattern to up arrow
    konami.pattern = "38";
  }, []);

  return <></>;
}
