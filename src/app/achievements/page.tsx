"use client";
import { useEffect, useMemo, useReducer } from "react";
import {
  allAchievementsUnlocked,
  getAchievementCompletionTime,
  getHydratedAchievementsArray,
  resetAchievementProgress,
} from "../../helpers/achievements";
import Link from "next/link";

export default function Achievements() {
  const [x, forceUpdate] = useReducer((x) => x + 1, 0);
  const achievements = useMemo(() => getHydratedAchievementsArray(), [x]);
  const allUnlocked = useMemo(() => allAchievementsUnlocked(), [x]);

  useEffect(() => {
    window.addEventListener("achievementUnlocked", forceUpdate);
    return () => window.removeEventListener("achievementUnlocked", forceUpdate);
  }, []);

  return (
    <div className="text-container">
      {allUnlocked ? (
        <>
          <p className="congratulations">
            <b>👑 Congratulations! You've unlocked all the achievements.</b>
          </p>
          <p>
            <i>Your time: {getAchievementCompletionTime()}</i>
          </p>
          <p>
            <i>
              {" "}
              To be forever memorialized in the{" "}
              <Link href="/achievements/hall-of-fame">Hall of Fame</Link>,{" "}
              <Link href="/me">email me</Link> a screenshot of your time, your
              name (or gamertag), a photo you want featured, and a quote to go
              along with it.
            </i>
          </p>
        </>
      ) : (
        <p>
          <i>
            Check out the{" "}
            <Link href="/achievements/hall-of-fame">Hall of Fame</Link> to see
            the achievement leaderboards! 😈
          </i>
        </p>
      )}
      <br />

      {achievements.map((ach, idx) => {
        const className = `${ach.unlocked ? "unlocked" : "locked"}-achievement`;
        return (
          <div
            className={`${className} ${className}-${ach.key}`}
            key={`achievement_${idx}`}
          >
            <p className="achievement-title">
              {ach.unlocked ? `🏆 ${ach.name}` : "???"}
            </p>
            <p className="achievement-flavor">
              {ach.unlocked ? ach.description : ach.hint}
            </p>
            <br />
          </div>
        );
      })}
      <p className="achievement-reset">
        For the speedrunners:{" "}
        <span
          className="clickable"
          onClick={() => {
            const reset = confirm(
              "Are you sure? This action cannot be undone."
            );
            if (reset) {
              resetAchievementProgress();
              forceUpdate();
            }
          }}
        >
          reset achievement progress
        </span>
      </p>
    </div>
  );
}
