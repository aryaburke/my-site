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
        <Link href="/writing/publications">Publications</Link>
      </p>
      <p>
        You can read my{" "}
        <Link href={getUrlFromTitle(randomPoem.title)}>poems</Link>, but they'll
        be better if you wait for my upcoming book! Stay tuned!
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
