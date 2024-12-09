import { sample } from "lodash";
import { isSingular, singular } from "pluralize";

import poemData from "../poems/poems.json";

const WORDS_NOT_TO_LINK: string[] = [];
// TODO: exclude boring prepositions, pronouns, determiners, conjunctions
// const WORDS_NOT_TO_LINK = ["and", "is", "a", "in", "the", "that", "of"];

export type Poem = {
  title: string;
  year: string;
  body: string;
};

type AnnotatedPoem = Poem & {
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

export function getRandomPoem(): Poem {
  return sample(getPoems())!;
}

function chunksMatchPlural(chunkA: string, chunkB: string): boolean {
  let newChunkA = isSingular(chunkA) ? chunkA : singular(chunkA);
  let newChunkB = isSingular(chunkB) ? chunkB : singular(chunkB);
  return newChunkA.toLowerCase() === newChunkB.toLowerCase();
}

export function chunksMatchFast(chunkA: string, chunkB: string): boolean {
  return chunkA.toLowerCase() === chunkB.toLowerCase();
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
    const isLinked = chunks.findIndex((c) => chunksMatchPlural(chunk, c)) > -1;
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

export function createAnnotatedPoemData() {
  const poems: Poem[] = poemData.poems.filter((p: Poem) => p.title !== "");
  console.log("Annotating poems...");
  let annotatedPoems = poems.map((p) => annotatePoem(p));

  // check to ensure correctness of annotated data,
  // ensure all poems have links in and out
  let allAnnotatedText = "";
  annotatedPoems.forEach((p) => {
    allAnnotatedText += p.annotatedBody;
    allAnnotatedText += p.annotatedTitle;
    allAnnotatedText += p.annotatedYear;
  });
  annotatedPoems.forEach((p) => {
    if (!p.annotatedBody.includes("<a href")) {
      console.log(`${p.title} has no links out, retrying`);
      createAnnotatedPoemData();
      return;
    } else if (!allAnnotatedText.includes(getUrlFromTitle(p.title))) {
      console.log(`${p.title} has no links in, retrying`);
      createAnnotatedPoemData();
      return;
    }
  });

  return annotatedPoems;
}
