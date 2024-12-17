"use client";
import React, { useEffect } from "react";
import KonamiTrigger from "konami";
import "../index.css";

export default function Konami() {
  useEffect(() => {
    new KonamiTrigger(() => alert("Hi!"));
  }, []);

  return <></>;
}
