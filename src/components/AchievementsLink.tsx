"use client";
import { useEffect, useMemo, useReducer, useState } from "react";
import { areAchievementsUnlocked } from "../helpers/achievements";
import Link from "next/link";

export default function AchievementsLink() {
  const [x, forceUpdate] = useReducer((x) => x + 1, 0);
  const show = useMemo(() => areAchievementsUnlocked(), [x]);
  // done to prevent hydration warnings
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    setIsFirstRender(false);
    window.addEventListener("storage", forceUpdate);
    return () => window.removeEventListener("storage", forceUpdate);
  }, []);

  return !isFirstRender && show ? (
    <p>
      <Link href="/achievements">Achievements</Link>
    </p>
  ) : (
    <></>
  );
}
