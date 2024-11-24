import React from "react";
import markdownit from "markdown-it";
import { cloneDeep, sample } from "lodash";

import poemData from "./poems.json";

type Poem = {
  title: string;
  year: string;
  body: string;
  // can be words or delimiters
  chunks?: string[];
};

const md = markdownit({
  html: true,
  breaks: true,
});

function getSlug(title: string) {
  return title.replace(" ", "-");
}

function getChunkedPoems() {
  const poems: Poem[] = cloneDeep(poemData.poems);
  const poemsWithChunks = poems.map((poem) => {
    poem.chunks = poem.body.split(/(\W+)/);
    return poem;
  });
  return poemsWithChunks;
}

function annotatePoem(poem: Poem, poems: Poem[]) {
  let body = "";
  poem.chunks!.forEach((chunk) => {
    // skip if delimiter
    const isDelimiter = !!chunk.match(/\W+/);
    if (isDelimiter) {
      body += chunk;
      return;
    }
    // if word, check every other poem and make a list of ones that share that word
    let linkedPoems: Poem[] = [];
    poems.forEach((p) => {
      if (p.title === poem.title) {
        return;
      }
      if (p.chunks!.includes(chunk)) {
        linkedPoems.push(p);
      }
    });
    // end if no links found
    if (linkedPoems.length === 0) {
      body += chunk;
      return;
    }
    // annotate with a random linked poem
    const linkedTitle = sample(linkedPoems)!.title;
    body += `<a href="/poems/${getSlug(linkedTitle)}">${chunk}</a>`;
  });
  poem.body = body;
  return poem;
}

export function Poems() {
  const poems = getChunkedPoems();
  const annotated = annotatePoem(poems[0], poems);
  console.log(annotated.body);
  return (
    <div className="text-container">
      <div dangerouslySetInnerHTML={{ __html: md.render(annotated.body) }} />
    </div>
  );
}
