import React from "react";
import {
  getAnnotatedPoems,
  getSlugFromTitle,
} from "../../../../helpers/poemHelpers";
import PoemNode from "../../../../components/PoemNode";

export default async function Poem({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const poem = getAnnotatedPoems().find(
    (p) => slug === getSlugFromTitle(p.title)
  )!;

  return <PoemNode poem={poem} />;
}
