import { getAnnotatedPoems, getPoems, getUrlFromTitle } from "./poemHelpers";

test("Assert that all poems have been annotated", () => {
  const notAnnotated = getPoems();
  const annotated = getAnnotatedPoems();
  const notAnnotatedTitles = notAnnotated.map((p) => p.title);
  const annotatedTitles = annotated.map((p) => p.title);
  expect(new Set(annotatedTitles)).toEqual(new Set(notAnnotatedTitles));
});

test("Assert that all poem bodies have links out", () => {
  const poems = getAnnotatedPoems();
  poems.forEach((poem) => {
    expect(poem.annotatedBody).toContain("<a href");
  });
});

test("Assert that all poems have links in", () => {
  const poems = getAnnotatedPoems();
  // get all annotated text
  let annotatedText = "";
  poems.forEach((poem) => {
    annotatedText += poem.annotatedBody;
    annotatedText += poem.annotatedTitle;
    annotatedText += poem.annotatedYear;
  });
  // assert that text contains all poem links
  poems.forEach((poem) => {
    expect(annotatedText).toContain(getUrlFromTitle(poem.title));
  });
});
