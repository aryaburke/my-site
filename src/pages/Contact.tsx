import React from "react";

const EMAIL = "aryaburke4@gmail.com";
const STORYGRAPH = "https://app.thestorygraph.com/profile/aryaxo";
const RYM = "https://rateyourmusic.com/~aryaburke";
const GITHUB_REPO = "https://github.com/aryaburke/my-site";

export function Contact() {
  return (
    <div className="text-container">
      <p>
        Email me at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
      <p>
        Find me on <a href={STORYGRAPH}>The StoryGraph</a>.
      </p>
      <p>
        Or on <a href={RYM}>Rate Your Music</a>.
      </p>
      <p>
        Find the source code for this site <a href={GITHUB_REPO}>here</a>.
      </p>
    </div>
  );
}
