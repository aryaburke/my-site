import React from "react";
import Markdown from "react-markdown";
import { MYTHS } from "../../../../helpers/mythHelpers";

export default async function Poem({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return (
    <div className="text-container">
      <Markdown className="myth-container">{MYTHS[slug].markdown}</Markdown>
    </div>
  );
}
