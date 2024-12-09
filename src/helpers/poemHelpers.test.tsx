import { getAnnotatedPoems, getUrlFromTitle } from "./poemHelpers";

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

// TODO: test that annotated and not-annotated poems have the same poems
// TODO: set up GHA for this
