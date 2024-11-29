import React from "react";

import { getPoems, getUrlFromTitle } from "../../helpers/poemHelpers.tsx";

export function PoemList() {
  // TODO: sickos
  const sortedPoems = getPoems().sort((a, b) => a.title.localeCompare(b.title));
  return (
    <div className="text-container">
      {sortedPoems.map((poem) => (
        <p>
          <a href={getUrlFromTitle(poem.title)}>{poem.title}</a>
        </p>
      ))}
    </div>
  );
}
