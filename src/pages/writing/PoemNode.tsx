import React from "react";
import {
  annotatePoem,
  chunksMatch,
  type Poem,
} from "../../helpers/poemHelpers";
import { useSearchParams } from "react-router-dom";
import Markdown, { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";

function PoemLink({ text, href }: { text: string | undefined; href: string }) {
  const [searchParams, _] = useSearchParams();
  const sourceWord = searchParams.get("source") || "";

  // not actually sure where these "ghost links" where text is undefined
  // come from, but can just not render them
  return text ? (
    <a
      href={`${href}?source=${text.toLowerCase()}`}
      className={chunksMatch(sourceWord, text) ? "source-word" : ""}
    >
      {text}
    </a>
  ) : (
    <></>
  );
}

export function PoemNode({ poem }: { poem: Poem }) {
  const componentsOverride: Components = {
    a(props) {
      const { children, href } = props;
      return <PoemLink href={href!} text={children as string} />;
    },
  };

  const annotated = annotatePoem(poem);

  return (
    <div className="text-container">
      <div>
        <div className="poem-header">
          <Markdown
            className="poem-title"
            rehypePlugins={[rehypeRaw]}
            components={componentsOverride}
          >
            {annotated.title}
          </Markdown>
          <Markdown
            className="poem-year"
            rehypePlugins={[rehypeRaw]}
            components={componentsOverride}
          >
            {annotated.year}
          </Markdown>
        </div>
      </div>
      <Markdown
        className="poem-container"
        rehypePlugins={[rehypeRaw]}
        components={componentsOverride}
      >
        {annotated.body}
      </Markdown>
    </div>
  );
}
