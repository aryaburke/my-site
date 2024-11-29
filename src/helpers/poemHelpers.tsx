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
  // want to split on non-alphanumeric characters, except apostrophes and Japanese characters
  // (lol @ me in 2018 learning Japanese and using it in my poetry)
  return text.split(/([^a-zA-z0-9'’\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]+)/);
}

export function getUrlFromTitle(title: string): string {
  // strip out invalid URL characters and common punctuation
  const strippedTitle = title
    .toLowerCase()
    .split(" ")
    .join("-")
    .replace(/[^\w-]+/g, "");
  // take old title if title strips to new nothing
  return `/writing/poems/${strippedTitle || title}`;
}

export function getPoems() {
  return poemData.poems.filter((p) => p.title !== "");
}

export function getRandomPoem(): Poem {
  return sample(getPoems())!;
}

function annotateChunk({
  chunk,
  poemTitle,
}: {
  chunk: string;
  poemTitle: string;
}): string {
  /* Returns a chunk annotated with a link to other poems */
  const poems = getPoems();
  // skip if delimiter or excluded word
  const isDelimiter = !!chunk.match(/[\W_]+/);
  if (isDelimiter || WORDS_NOT_TO_LINK.includes(chunk.toLowerCase())) {
    return chunk;
  }
  // if word, check every other poem and make a list of ones that share that word
  let linkedPoems: Poem[] = [];
  poems.forEach((p) => {
    if (p.title === poemTitle) {
      return;
    }
    const chunks = [
      ...chunkText(p.body),
      ...chunkText(p.title),
      ...chunkText(p.year),
    ];
    // case insensitive
    const isLinked =
      chunks.findIndex((c) => chunk.toLowerCase() === c.toLowerCase()) > -1;
    if (isLinked) {
      linkedPoems.push(p);
    }
  });
  // end if no links found
  if (linkedPoems.length === 0) {
    return chunk;
  }
  // annotate chunk with a random linked poem
  const linkedTitle = sample(linkedPoems)!.title;
  // safe to assume that only valid source words have been clicked as links,
  // so only need to apply tag to links
  return `<a href="${getUrlFromTitle(linkedTitle)}">${chunk}</a>`;
}

export function annotatePoem(poem: Poem): Poem {
  const poemClone = cloneDeep(poem);
  // annotate body
  let body = "";
  chunkText(poem.body).forEach((chunk) => {
    body += annotateChunk({
      chunk,
      poemTitle: poem.title,
    });
  });
  poemClone.body = body;
  // annotate title
  let title = "";
  chunkText(poem.title).forEach((chunk) => {
    title += annotateChunk({
      chunk,
      poemTitle: poem.title,
    });
  });
  poemClone.title = title;
  // annotate year
  let year = "";
  chunkText(poem.year).forEach((chunk) => {
    year += annotateChunk({
      chunk,
      poemTitle: poem.title,
    });
  });
  poemClone.year = year;
  return poemClone;
}
