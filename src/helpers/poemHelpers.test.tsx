import { annotatePoem, getPoems, getUrlFromTitle } from "./poemHelpers";

test("Assert that all poem bodies have links out", () => {
  const poems = getPoems();
  poems.forEach((poem) => {
    const annotated = annotatePoem(poem);
    expect(annotated.body).toContain("<a href");
  });
});

test("Assert that all poems have links in", () => {
  const poems = getPoems();
  // get all annotated text
  let annotatedText = "";
  poems.forEach((poem) => {
    const annotated = annotatePoem(poem);
    annotatedText += annotated.body;
    annotatedText += annotated.title;
    annotatedText += annotated.year;
  });
  // assert that text contains all poem links
  poems.forEach((poem) => {
    expect(annotatedText).toContain(getUrlFromTitle(poem.title));
  });
});
