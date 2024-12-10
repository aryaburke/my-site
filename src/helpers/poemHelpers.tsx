import { sample } from "lodash";
import { isSingular, singular } from "pluralize";

import poemData from "../poems/poems.json";
import annotatedPoemData from "../poems/annotated_poems.json";

const WORDS_NOT_TO_LINK: string[] = [];
// TODO: exclude boring prepositions, pronouns, determiners, conjunctions
// const WORDS_NOT_TO_LINK = ["and", "is", "a", "in", "the", "that", "of"];

export type Poem = {
  title: string;
  year: string;
  body: string;
};

export type AnnotatedPoem = Poem & {
  annotatedTitle: string;
  annotatedYear: string;
  annotatedBody: string;
};

function chunkText(text: string): string[] {
  // want to split on non-alphanumeric characters, except apostrophes and Japanese characters
  // (lol @ me in 2018 learning Japanese and using it in my poetry)
  return text.split(/([^a-zA-z0-9'’\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]+)/);
}

export function getSlugFromTitle(title: string): string {
  // strip out invalid or ugly URL characters and common punctuation
  const strippedTitle = title
    .toLowerCase()
    .split(" ")
    .join("-")
    .replace(/[^\w-]+/g, "");
  return encodeURI(strippedTitle || title);
}

export function getUrlFromTitle(title: string): string {
  return `/writing/poems/${getSlugFromTitle(title)}`;
}

export function getPoems(): Poem[] {
  return poemData.poems.filter((p: Poem) => p.title !== "");
}

export function getAnnotatedPoems(): AnnotatedPoem[] {
  return annotatedPoemData.poems;
}

export function getRandomPoem(): AnnotatedPoem {
  return sample(getAnnotatedPoems())!;
}

export function chunksMatch(chunkA: string, chunkB: string): boolean {
  let newChunkA = isSingular(chunkA) ? chunkA : singular(chunkA);
  let newChunkB = isSingular(chunkB) ? chunkB : singular(chunkB);
  return newChunkA.toLowerCase() === newChunkB.toLowerCase();
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
    const isLinked = chunks.findIndex((c) => chunksMatch(chunk, c)) > -1;
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

export function annotatePoem(poem: Poem): AnnotatedPoem {
  // annotate body
  let annotatedBody = "";
  chunkText(poem.body).forEach((chunk) => {
    annotatedBody += annotateChunk({
      chunk,
      poemTitle: poem.title,
    });
  });
  // annotate title
  let annotatedTitle = "";
  chunkText(poem.title).forEach((chunk) => {
    annotatedTitle += annotateChunk({
      chunk,
      poemTitle: poem.title,
    });
  });
  // annotate year
  let annotatedYear = "";
  chunkText(poem.year).forEach((chunk) => {
    annotatedYear += annotateChunk({
      chunk,
      poemTitle: poem.title,
    });
  });
  return {
    title: poem.title,
    year: poem.year,
    body: poem.body,
    annotatedTitle,
    annotatedYear,
    annotatedBody,
  };
}
