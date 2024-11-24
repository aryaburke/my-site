import { cloneDeep, sample } from "lodash";

import poemData from "../poems/poems.json";

const WORDS_NOT_TO_LINK: string[] = [];
// TODO: exclude boring prepositions, pronouns, determiners, conjunctions
// const WORDS_NOT_TO_LINK = ["and", "is", "a", "in", "the", "that", "of"];

export type Poem = {
  title: string;
  year: string;
  body: string;
  // can be words or delimiters
  chunks?: string[];
};

export function getUrlFromTitle(title: string): string {
  return `/writing/poems/${title
    // strip out invalid URL characters
    .replace(/[/\\?%*:|"<>]/g, "")
    .split(" ")
    .join("-")}`;
}

export function getPoems() {
  return poemData.poems.filter((p) => p.title !== "");
}

function chunkPoem(poem: Poem): Poem {
  poem.chunks = cloneDeep(poem).body.split(/(\W+)/);
  return poem;
}

function getChunkedPoems(): Poem[] {
  return getPoems().map(chunkPoem);
}

export function getRandomPoem(): Poem {
  return chunkPoem(sample(getPoems())!);
}

// TODO: also annotate title
export function annotatePoem(poem: Poem): Poem {
  // if we ever render on a separate page or move to server-side,
  // break this out into a separate function for performance
  const poems = getChunkedPoems();
  const poemClone = cloneDeep(poem);
  let body = "";
  poemClone.chunks!.forEach((chunk) => {
    // skip if delimiter or excluded word
    const isDelimiter = !!chunk.match(/\W+/);
    if (isDelimiter || WORDS_NOT_TO_LINK.includes(chunk.toLowerCase())) {
      body += chunk;
      return;
    }
    // if word, check every other poem and make a list of ones that share that word
    let linkedPoems: Poem[] = [];
    poems.forEach((p) => {
      if (p.title === poem.title) {
        return;
      }
      // case insensitive
      const isLinked =
        p.chunks!.findIndex((c) => chunk.toLowerCase() === c.toLowerCase()) >
        -1;
      if (isLinked) {
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
