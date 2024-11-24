import React from "react";
import markdownit from "markdown-it";
import { annotatePoem, type Poem } from "../../helpers/poemHelpers.tsx";

const md = markdownit({
  html: true,
  breaks: true,
});

export function PoemNode({ poem }: { poem: Poem }) {
  const annotated = annotatePoem(poem);
  return (
    <div className="text-container">
      <div dangerouslySetInnerHTML={{ __html: md.render(annotated.body) }} />
    </div>
  );
}
