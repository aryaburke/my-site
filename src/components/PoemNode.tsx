"use client";
import React from "react";
import { type AnnotatedPoem } from "../helpers/poemHelpers";
import Markdown, { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import PoemLink from "./PoemLink";

export default function PoemNode({ poem }: { poem: AnnotatedPoem }) {
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
            {poem.annotatedTitle}
          </Markdown>
          <Markdown
            className="poem-year"
            rehypePlugins={[rehypeRaw]}
            components={componentsOverride}
          >
            {poem.annotatedYear}
          </Markdown>
        </div>
      </div>
      <Markdown
        className="poem-container"
        rehypePlugins={[rehypeRaw]}
        components={componentsOverride}
      >
        {poem.annotatedBody}
      </Markdown>
    </div>
  );
}
