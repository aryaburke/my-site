"use client";
import { useMemo } from "react";
import { areAchievementsUnlocked } from "../helpers/achievements";
import Link from "next/link";

export default function AchievementsLink() {
  const achievements = useMemo(() => areAchievementsUnlocked(), []);

  return achievements ? (
    <p>
      <Link href="/achievements">Achievements</Link>
    </p>
  ) : (
    <></>
  );
}
