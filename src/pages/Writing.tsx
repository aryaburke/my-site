import React from "react";
import { getRandomPoem, getUrlFromTitle } from "../helpers/poemHelpers.tsx";

export function Writing() {
  const randomPoem = getRandomPoem();

  return (
    <div className="text-container">
      <p>
        <a href="/writing/myths">Myths</a>
      </p>
      <p>
        <a href={getUrlFromTitle(randomPoem.title)}>Poems</a>
      </p>
      <p>
        <a href="/writing/publications">Publications</a>
      </p>
    </div>
  );
}
