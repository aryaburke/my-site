"use client";
import React from "react";
import { chunksMatch } from "../../../../helpers/poemHelpers";
import { useSearchParams } from "next/navigation";
import { sample } from "lodash";

export default function PoemLink({
  text,
  href,
}: {
  text: string | undefined;
  href: string;
}) {
  const searchParams = useSearchParams();
  const sourceWord = searchParams!.get("source") || "";
  const singleHref = sample(href.split("|"));

  // not actually sure where these "ghost links" where text is undefined
  // come from, but can just not render them
  return text ? (
    <a
      href={`${singleHref}?source=${text.toLowerCase()}`}
      className={chunksMatch(sourceWord, text) ? "source-word" : ""}
      suppressHydrationWarning
    >
      {text}
    </a>
  ) : (
    <></>
  );
}
