import React from "react";
import {
  annotatePoem,
  getPoems,
  getSlugFromTitle,
  type Poem,
} from "../../../../helpers/poemHelpers";
import PoemNode from "./PoemNode";
// import dynamic from "next/dynamic";

// const PoemLink = dynamic(() => import("./PoemNode"), { ssr: false });

// TODO: fix the loading of words slowly
export default async function Poem({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  console.log(slug);
  const poem = getPoems().find((p) => slug === getSlugFromTitle(p.title))!;
  const annotated = annotatePoem(poem);

  return <PoemNode poem={annotated} />;
}
