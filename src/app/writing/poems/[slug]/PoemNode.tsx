"use client";
import React from "react";
import { annotatePoem, type Poem } from "../../../../helpers/poemHelpers";
import Markdown, { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import PoemLink from "./PoemLink";

export default function PoemNode({ poem }: { poem: Poem }) {
  const annotated = annotatePoem(poem);

  const componentsOverride: Components = {
    a(props) {
      const { children, href } = props;
      return <PoemLink href={href!} text={children as string} />;
    },
  };

  return (
    <div className="text-container">
      <div>
        <div className="poem-header">
          <Markdown
            className="poem-title"
            rehypePlugins={[rehypeRaw]}
            components={componentsOverride}
          >
            {annotated.annotatedTitle}
          </Markdown>
          <Markdown
            className="poem-year"
            rehypePlugins={[rehypeRaw]}
            components={componentsOverride}
          >
            {annotated.annotatedYear}
          </Markdown>
        </div>
      </div>
      <Markdown
        className="poem-container"
        rehypePlugins={[rehypeRaw]}
        components={componentsOverride}
      >
        {annotated.annotatedBody}
      </Markdown>
    </div>
  );
}
