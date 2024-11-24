import React from "react";

import { getPoems, getUrlFromTitle } from "../../helpers/poemHelpers.tsx";

export function PoemsList() {
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
