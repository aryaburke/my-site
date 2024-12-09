"use client";
import React from "react";
import { chunksMatchFast } from "../../../../helpers/poemHelpers";
import { useSearchParams } from "next/navigation";

export default function PoemLink({
  text,
  href,
}: {
  text: string | undefined;
  href: string;
}) {
  const searchParams = useSearchParams();
  const sourceWord = searchParams.get("source") || "";

  // not actually sure where these "ghost links" where text is undefined
  // come from, but can just not render them
  return text ? (
    <a
      href={`${href}?source=${text.toLowerCase()}`}
      className={chunksMatchFast(sourceWord, text) ? "source-word" : ""}
      suppressHydrationWarning
    >
      {text}
    </a>
  ) : (
    <></>
  );
}
