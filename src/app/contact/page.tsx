import React from "react";

const EMAIL = "aryaburke4@gmail.com";

export default function Contact() {
  return (
    <div className="text-container">
      <p>
        Email me at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
      <p>
        Find me on{" "}
        <a
          href="https://app.thestorygraph.com/profile/aryaxo"
          target="_blank"
          rel="noopener noreferrer"
        >
          The StoryGraph
        </a>
        .
      </p>
      <p>
        Or on{" "}
        <a
          href="https://rateyourmusic.com/~aryaburke"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rate Your Music
        </a>
        .
      </p>
      <p>
        Or maybe{" "}
        <a
          href="https://stats.fm/user/aryaxo?range=current_year"
          target="_blank"
          rel="noopener noreferrer"
        >
          stats.fm
        </a>
        ?
      </p>
      <p>
        Find the source code for this site{" "}
        <a
          href="https://github.com/aryaburke/my-site"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
    </div>
  );
}
