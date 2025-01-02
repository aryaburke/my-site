import React from "react";
import { getRandomPoem, getUrlFromTitle } from "../../helpers/poemHelpers";
import Link from "next/link";
import ContentWarnings from "../../components/ContentWarnings";

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
      <ContentWarnings />
    </div>
  );
}
