import React from "react";
import { getRandomPoem, getUrlFromTitle } from "../../helpers/poemHelpers";
import HoverText from "../../components/HoverText";

export default function Writing() {
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <HoverText
        text="content warnings"
        hoverText="content warnings: homophobia, transphobia, sexual violence, gore, abuse, suicide, addiction, vomiting, needles, spiders, christian sacrilege :)"
        className="content-warning"
      />
    </div>
  );
}
