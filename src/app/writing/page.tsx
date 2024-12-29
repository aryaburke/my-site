import React from "react";
import { getRandomPoem, getUrlFromTitle } from "../../helpers/poemHelpers";
import HoverText from "../../components/HoverText";
import Link from "next/link";

export default function Writing() {
  const randomPoem = getRandomPoem();

  return (
    <div className="text-container">
      <p>
        <Link href="/writing/myths">Myths</Link>
      </p>
      <p>
        <Link href={getUrlFromTitle(randomPoem.title)}>Poems</Link>
      </p>
      <p>
        <Link href="/writing/publications">Publications</Link>
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
        hoverText="content warnings: homophobia, transphobia, sexual violence, self-harm, gore, abuse, suicide, addiction, vomiting, needles, spiders, christian sacrilege :)"
        className="content-warning"
      />
    </div>
  );
}
