import { annotatePoem, getUrlFromTitle, Poem } from "./poemHelpers";
import poemData from "../poems/poems.json";
const fs = require("fs");
const path = require("path");

function createAnnotatedPoemData() {
  const poems: Poem[] = poemData.poems.filter((p: Poem) => p.title !== "");
  console.log("Annotating poems...");
  let annotatedPoems = poems.map((p) => {
    console.log(`\nAnnotating ${p.title}`);
    return annotatePoem(p);
  });

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
      console.warn(`${p.title} has no links out, retrying`);
      createAnnotatedPoemData();
      return;
    } else if (!allAnnotatedText.includes(getUrlFromTitle(p.title))) {
      console.warn(`${p.title} has no links in, retrying`);
      createAnnotatedPoemData();
      return;
    }
  });

  console.log("\nAnnotated poems!");
  fs.writeFileSync(
    path.resolve(__dirname, "..") + "/poems/annotated_poems.json",
    JSON.stringify({ poems: annotatedPoems }),
    {
      flag: "w",
    }
  );
}

createAnnotatedPoemData();
