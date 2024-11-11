import React from "react";

const EMAIL = "aryaburke4@gmail.com";
const STORYGRAPH = "https://app.thestorygraph.com/profile/aryaxo";
const RYM = "https://rateyourmusic.com/~aryaburke";

export function Contact() {
  return (
    <>
      <p>
        email me at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>
      <p>
        find me on <a href={STORYGRAPH}>The StoryGraph</a>
      </p>
      <p>
        or <a href={RYM}>RateYourMusic</a>
      </p>
    </>
  );
}
