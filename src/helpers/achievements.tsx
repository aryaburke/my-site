type Achievement = {
  name: string;
  description: string;
  hint: string;
};

export const ACHIEVEMENTS: Record<string, Achievement> = {
  contentWarnings: {
    name: "Content Warned",
    description: "You got warned",
    hint: "Try preparing yourself...",
  },
  runeScape: {
    name: "Buying gf 10k",
    description: "Free armor trimming!",
    hint: "Try PVP...",
  },
};

export function getAchievementState(name: string): boolean {
  return localStorage.getItem(name) === "true" || false;
}

export async function unlockAchievement(name: string) {
  if (getAchievementState(name) !== true) {
    localStorage.setItem(name, "true");
    window.dispatchEvent(new Event("achievementUnlocked"));
    console.log("Achievement unlocked");
  }
}

export function resetAchievementProgress() {
  Object.values(ACHIEVEMENTS).forEach((achievement) => {
    localStorage.setItem(achievement.name, "false");
  });
}
