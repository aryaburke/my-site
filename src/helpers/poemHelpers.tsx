import { sample } from "lodash";

import poemData from "../poems/poems.json";
import annotatedPoemData from "../poems/annotated_poems.json";

var pluralize = require("pluralize");
// omit the i <> we match
pluralize.addIrregularRule("we", "we");
// omit the she <> they match
pluralize.addIrregularRule("they", "they");
// omit the we <> us match
pluralize.addIrregularRule("us", "us");
const PLURAL_MATCHES: Set<String> = new Set();

const INDENT_STRING =
  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
// want to split on non-alphanumeric characters, except apostrophes, diacritics, Japanese characters
// (lol @ me in 2018 learning Japanese and using it in my poetry)
const DELIMITER_REGEX =
  /([^\p{L}0-9'’\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]+)/u;

const WORDS_NOT_TO_LINK = [
  // boring words
  "at",
  "by",
  "in",
  "for",
  "of",
  "to",
  "a",
  "an",
  "the",
  "this",
  "these",
  "those",
  "much",
  "each",
  "and",
  "nor",
  "or",
  "so",
  "as",
  "like",
  "too",
  "on",
  "it",
  "its",
  "that",
  "with",
  "there",
];

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
  return text.split(DELIMITER_REGEX);
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

export function chunksMatch(
  chunkA: string,
  chunkB: string,
  log?: boolean
): boolean {
  // matching logic
  chunkA = chunkA.toLowerCase();
  chunkB = chunkB.toLowerCase();
  let newChunkA = pluralize.isSingular(chunkA)
    ? chunkA
    : pluralize.singular(chunkA);
  let newChunkB = pluralize.isSingular(chunkB)
    ? chunkB
    : pluralize.singular(chunkB);
  const chunksMatch = newChunkA === newChunkB;

  // log plural matches
  // TODO: fix this logic
  if (
    log &&
    chunksMatch &&
    chunkA !== chunkB &&
    !PLURAL_MATCHES.has(chunkA) &&
    !PLURAL_MATCHES.has(chunkB)
  ) {
    PLURAL_MATCHES.add(chunkA);
    PLURAL_MATCHES.add(chunkA);
    console.log(`New plural match: ${chunkA} === ${chunkB}`);
  }

  return chunksMatch;
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
  const isDelimiter = !!chunk.match(DELIMITER_REGEX);
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
    const isLinked = chunks.findIndex((c) => chunksMatch(chunk, c, true)) > -1;
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
  // replace tabs with indent string
  annotatedBody = annotatedBody.replaceAll("\t", INDENT_STRING);
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
