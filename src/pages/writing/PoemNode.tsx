import React, { useEffect } from "react";
import { annotatePoem, type Poem } from "../../helpers/poemHelpers.tsx";
import { useSearchParams } from "react-router-dom";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

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

  // useEffect(() => {
  //   const tags = document.querySelectorAll("a");
  //   tags.forEach((tag) => {
  //     tag.replaceWith(<PoemLink text="x" href="x" className="x" />);
  //   });
  // });

  return (
    <div className="text-container">
      <div>
        <div className="poem-header">
          <Markdown className="poem-title" rehypePlugins={[rehypeRaw]}>
            {annotated.title}
          </Markdown>
          <Markdown className="poem-year" rehypePlugins={[rehypeRaw]}>
            {annotated.year}
          </Markdown>
        </div>
      </div>
      <Markdown className="poem-container" rehypePlugins={[rehypeRaw]}>
        {annotated.body}
      </Markdown>
    </div>
  );
}
