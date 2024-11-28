import { cloneDeep, sample } from "lodash";

import poemData from "../poems/poems.json";

const WORDS_NOT_TO_LINK: string[] = [];
// TODO: exclude boring prepositions, pronouns, determiners, conjunctions
// const WORDS_NOT_TO_LINK = ["and", "is", "a", "in", "the", "that", "of"];

export type Poem = {
  title: string;
  year: string;
  body: string;
};

function chunkText(text: string): string[] {
  return text.split(/(\W+)/);
}

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

export function getRandomPoem(): Poem {
  return sample(getPoems())!;
}

// TODO: also annotate title, year, animate redirect word
export function annotatePoem(poem: Poem): Poem {
  // if we ever render on a separate page or move to server-side,
  // break this out into a separate function for performance
  const poems = getPoems();
  const poemClone = cloneDeep(poem);
  const bodyChunks = chunkText(poem.body);
  let body = "";
  bodyChunks.forEach((chunk) => {
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
      const chunks = chunkText(p.body);
      const isLinked =
        chunks.findIndex((c) => chunk.toLowerCase() === c.toLowerCase()) > -1;
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
