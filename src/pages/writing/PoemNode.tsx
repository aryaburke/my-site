import React from "react";
import markdownit from "markdown-it";
import { annotatePoem, type Poem } from "../../helpers/poemHelpers.tsx";
import { useSearchParams } from "react-router-dom";

const md = markdownit({
  html: true,
  // breaks: true,
});

export function PoemNode({ poem }: { poem: Poem }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const sourceWord = searchParams.get("source");
  const annotated = annotatePoem(poem, sourceWord);

  return (
    <div className="text-container">
      <div>
        <div className="poem-header">
          <div
            className="poem-title"
            dangerouslySetInnerHTML={{ __html: md.render(annotated.title) }}
          />
          <div
            className="poem-year"
            dangerouslySetInnerHTML={{ __html: md.render(annotated.year) }}
          />
        </div>
      </div>
      <div
        className="poem-container"
        dangerouslySetInnerHTML={{ __html: md.render(annotated.body) }}
      />
    </div>
  );
}
