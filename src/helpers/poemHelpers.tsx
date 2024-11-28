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
  // strip out invalid URL characters and common punctuation
  const strippedTitle = title
    .toLowerCase()
    .replace(/[/\\?%*:|"<>!()@#$%^&*\[\]{};',\.~`]/g, "")
    .split(" ")
    .join("-");
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
  isSourceWord,
}: {
  chunk: string;
  poemTitle: string;
  isSourceWord: boolean;
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
  return `<a${
    isSourceWord ? ' class="source-word"' : ""
  } href="${getUrlFromTitle(linkedTitle)}">${chunk}</a>`;
}

export function annotatePoem(poem: Poem, sourceWord?: string): Poem {
  // if we ever render on a separate page or move to server-side,
  // break this out into a separate function for performance
  const poemClone = cloneDeep(poem);
  // annotate body
  let body = "";
  chunkText(poem.body).forEach((chunk) => {
    body += annotateChunk({
      chunk,
      poemTitle: poem.title,
      isSourceWord: chunk === sourceWord,
    });
  });
  poemClone.body = body;
  // annotate title
  let title = "";
  chunkText(poem.title).forEach((chunk) => {
    title += annotateChunk({
      chunk,
      poemTitle: poem.title,
      isSourceWord: chunk === sourceWord,
    });
  });
  poemClone.title = title;
  // annotate year
  let year = "";
  chunkText(poem.year).forEach((chunk) => {
    year += annotateChunk({
      chunk,
      poemTitle: poem.title,
      isSourceWord: chunk === sourceWord,
    });
  });
  poemClone.year = year;
  return poemClone;
}
