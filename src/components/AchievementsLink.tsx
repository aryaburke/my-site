"use client";
import { useEffect, useMemo, useReducer, useState } from "react";
import { areAchievementsUnlocked } from "../helpers/achievements";
import Link from "next/link";

export default function AchievementsLink() {
  const [x, forceUpdate] = useReducer((x) => x + 1, 0);
  const show = useMemo(() => areAchievementsUnlocked(), [x]);

  useEffect(() => {
    window.addEventListener("storage", forceUpdate);
    return () => window.removeEventListener("storage", forceUpdate);
  }, []);

  return show ? (
    <p>
      <Link href="/achievements">Achievements</Link>
    </p>
  ) : (
    <></>
  );
}
