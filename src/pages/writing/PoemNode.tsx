import React from "react";
import markdownit from "markdown-it";
import { annotatePoem, type Poem } from "../../helpers/poemHelpers.tsx";

const md = markdownit({
  html: true,
  // breaks: true,
});

export function PoemNode({ poem }: { poem: Poem }) {
  const annotated = annotatePoem(poem);
  return (
    <div className="text-container">
      <div>
        <p>
          <div className="poem-title">{poem.title}</div>
          <div className="poem-year">{poem.year}</div>
        </p>
      </div>
      <div
        className="poem-container"
        dangerouslySetInnerHTML={{ __html: md.render(annotated.body) }}
      />
    </div>
  );
}
