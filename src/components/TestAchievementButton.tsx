"use client";
import {
  ACHIEVEMENTS,
  resetAchievementProgress,
  unlockAchievement,
} from "../helpers/achievements";

export function TestAchievementButton() {
  return (
    <button
      onClick={async () => {
        resetAchievementProgress();
        await unlockAchievement(ACHIEVEMENTS.runeScape.name);
      }}
    >
      Achievement
    </button>
  );
}
