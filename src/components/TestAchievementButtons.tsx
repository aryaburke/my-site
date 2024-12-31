"use client";
import {
  ACHIEVEMENTS,
  resetAchievementProgress,
  unlockAchievement,
} from "../helpers/achievements";

export function TestAchievementButtons() {
  return (
    <>
      <button
        onClick={async () => {
          resetAchievementProgress();
          await unlockAchievement(ACHIEVEMENTS.runeScape.name);
        }}
      >
        Achievement
      </button>
      <button onClick={resetAchievementProgress}>Reset state</button>
    </>
  );
}
