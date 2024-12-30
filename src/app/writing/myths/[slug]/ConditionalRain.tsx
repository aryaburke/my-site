"use client";
import React, { useEffect } from "react";
import { makeItRain, stopTheRain } from "../../../../helpers/rain";

export default function ConditionalRain({ slug }: { slug: string }) {
  useEffect(() => {
    if (slug === "milkmen") {
      makeItRain();
    }
  }, [slug]);

  useEffect(() => {
    return () => {
      stopTheRain();
    };
  }, []);

  return <></>;
}
