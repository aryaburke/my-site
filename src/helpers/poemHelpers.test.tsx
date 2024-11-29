import { annotatePoem, getPoems } from "./poemHelpers.tsx";

/*
TODO:

assert that all poems have links out
assert that all poems have links in
*/
test("Assert that all poem bodies have links out", () => {
  const poems = getPoems();
  poems.forEach((poem) => {
    const annotated = annotatePoem(poem);
    expect(annotated.body).toContain("<a href");
  });
});
