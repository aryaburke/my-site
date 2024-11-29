import React from "react";

import { getPoems, getUrlFromTitle } from "../../helpers/poemHelpers.tsx";

export function PoemList() {
  const sortedPoems = getPoems().sort((a, b) => a.title.localeCompare(b.title));
  return (
    <div className="text-container">
      <div className="poem-list-monologue">
        <p>Oh, hi.</p>
        <p>
          You must be one of those freaks looking around for a linear way to
          read these poems.
        </p>
        <p>Well, here it is, miscreant.</p>
        <p>
          But just know that alphabetical title order is a nonsense way to read
          poetry. If you want the real order, ask to read my manuscript.
        </p>
        <p>
          Not to mention that I put so much work into connecting all the poems
          into this lovely poem web. And you're just going to stomp all over
          that. Get the work dirty with your greasy little linear paws. Feels a
          little disrespectful, huh?
        </p>
        <p>But if you must be the completionist, the list is right here.</p>
        <p>
          <i>Sicko.</i>
        </p>
      </div>
      <br />
      {sortedPoems.map((poem) => (
        <p>
          <a href={getUrlFromTitle(poem.title)}>{poem.title}</a>
        </p>
      ))}
    </div>
  );
}
