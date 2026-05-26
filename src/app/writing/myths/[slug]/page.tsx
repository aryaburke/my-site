"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Markdown, { Components } from "react-markdown";
import remarkBreaks from "remark-breaks";
import { MYTHS } from "../../../../helpers/mythConsts";
import { ACHIEVEMENTS, unlockAchievement } from "@/helpers/achievements";

export default async function Myth({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  useEffect(() => {
    // give a bit of time for AchievementsManager to load
    setTimeout(() => {
      unlockAchievement(ACHIEVEMENTS.myths.name);
    }, 500);
  }, []);

  const slug = (await params).slug;
  const myth = MYTHS[slug];

  const componentsOverride: Components = {
    hr(_) {
      return (
        <Image
          priority
          src={myth.divider}
          alt="Divider"
          width={35}
          height={35}
          className="myth-divider"
        />
      );
    },
  };

  return (
    <div className="text-container-myth">
      <Markdown
        className="myth-container"
        components={componentsOverride}
        // use remarkBreaks for double newlines
        remarkPlugins={[remarkBreaks]}
      >
        {myth.markdown}
      </Markdown>
    </div>
  );
}
