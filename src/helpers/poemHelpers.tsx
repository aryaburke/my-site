import { chunk, clone, cloneDeep, get, sample } from "lodash";

import poemData from "../poems/poems.json";

export type Poem = {
  title: string;
  year: string;
  body: string;
  // can be words or delimiters
  chunks?: string[];
};

export function getUrlFromTitle(title: string): string {
  return `/writing/poems/${title.split(" ").join("-")}`;
}

function chunkPoem(poem: Poem): Poem {
  poem.chunks = cloneDeep(poem).body.split(/(\W+)/);
  return poem;
}

function getChunkedPoems(): Poem[] {
  return poemData.poems.map(chunkPoem);
}

export function getRandomPoem(): Poem {
  return chunkPoem(sample(poemData.poems)!);
}

export function annotatePoem(poem: Poem): Poem {
  // if we ever render on a separate page or move to server-side,
  // break this out into a separate function for performance
  const poems = getChunkedPoems();
  const poemClone = cloneDeep(poem);
  let body = "";
  poemClone.chunks!.forEach((chunk) => {
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
    body += `<a href="${getUrlFromTitle(linkedTitle)}">${chunk}</a>`;
  });
  poemClone.body = body;
  return poemClone;
}
