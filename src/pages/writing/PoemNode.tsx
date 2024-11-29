import React, { useEffect } from "react";
import markdownit from "markdown-it";
import { annotatePoem, type Poem } from "../../helpers/poemHelpers.tsx";
import { useSearchParams } from "react-router-dom";
import Markdown from "react-markdown";

const md = markdownit({
  html: true,
});

function PoemLink({
  text,
  href,
  className,
}: {
  text: string;
  href: string;
  className: string;
}) {
  const [_, setSearchParams] = useSearchParams();

  return (
    <a href={href} onClick={() => setSearchParams(text)} className={className}>
      {text}
    </a>
  );
}

export function PoemNode({ poem }: { poem: Poem }) {
  const [searchParams, _] = useSearchParams();

  const sourceWord = searchParams.get("source") || "";
  const annotated = annotatePoem(poem, sourceWord);

  useEffect(() => {
    const tags = document.querySelectorAll("a");
    tags.forEach((tag) => {
      tag.replaceWith(<PoemLink text="x" href="x" className="x" />);
    });
  });

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
