/*

WARNING: this page contains spoilers for the achievements on the site



Don't read it unless you want to see them!















*/
import { Duration, DurationLikeObject } from "luxon";

type Achievement = {
  name: string;
  description: string;
  hint: string;
};

type HydratedAchievement = Achievement & {
  unlocked: boolean;
  key: string;
};

export const ACHIEVEMENTS: Record<string, Achievement> = {
  runeScape: {
    name: "Buying gf 10k",
    description: "Free armor trimming!",
    hint: "Try reaching out...",
  },
  emoGirl: {
    name: "Girlz Are Cool",
    description: "Why'd you have to go and make things so complicated?",
    hint: "Try for extra lives...",
  },
  jimmy: {
    name: "My Friend Jimmy",
    description: "Dude saved my life fr, let's go clamming.",
    hint: "Try meeting my friends...",
  },
  contentWarnings: {
    name: "Content Warned",
    description: "You've been warned! Hope it's  not too scary.",
    hint: "Try preparing yourself...",
  },
  getLost: {
    name: "404 Aficionado",
    description: "Page not found, but maybe you found something else?",
    hint: "Try getting lost...",
  },
  secrets: {
    name: "Extra Nosy",
    description: "You could probably already tell I was a theater kid though.",
    hint: "Try digging around...",
  },
  poems: {
    name: "Reading Order",
    description: "You just had to be a completionist, huh?",
    hint: "Try finding a new way to read...",
  },
};

export const STORAGE_KEYS = {
  lastUnlocked: "lastUnlocked",
  firstVisit: "firstVisit",
};

export function getAchievementState(name: string): boolean {
  return localStorage.getItem(name) === "true" || false;
}

export async function unlockAchievement(name: string) {
  if (getAchievementState(name) !== true) {
    localStorage.setItem(name, "true");
    localStorage.setItem(STORAGE_KEYS.lastUnlocked, Date.now().toString());
    window.dispatchEvent(new Event("storage"));
  }
}

export function resetAchievementProgress() {
  Object.values(ACHIEVEMENTS).forEach((achievement) => {
    localStorage.setItem(achievement.name, "false");
  });
  localStorage.setItem(STORAGE_KEYS.firstVisit, Date.now().toString());
}

export function getHydratedAchievementsArray(): HydratedAchievement[] {
  return Object.entries(ACHIEVEMENTS).map(([key, achievement]) => {
    return {
      ...achievement,
      key,
      unlocked: getAchievementState(achievement.name),
    };
  });
}

export function areAchievementsUnlocked(): boolean {
  return getHydratedAchievementsArray().some((ach) => ach.unlocked);
}

export function allAchievementsUnlocked(): boolean {
  return getHydratedAchievementsArray().every((ach) => ach.unlocked);
}

export function getAchievementCompletionTime() {
  let durationStr = "";
  const units: (keyof DurationLikeObject)[] = [
    "year",
    "month",
    "week",
    "day",
    "hour",
    "minute",
    "second",
  ];
  const duration = Duration.fromMillis(
    Number(localStorage.getItem(STORAGE_KEYS.lastUnlocked)!) -
      Number(localStorage.getItem(STORAGE_KEYS.firstVisit)!)
  ).rescale();
  units.forEach((unit) => {
    const amount = duration.get(unit);
    if (amount > 0) {
      if (durationStr.length > 0) {
        durationStr += ", ";
      }
      durationStr += `${amount} ${unit}`;
      if (amount > 1 && unit !== "seconds") {
        durationStr += "s";
      }
    }
  });
  return durationStr;
}
