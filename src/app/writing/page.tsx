import React from "react";
import Link from "next/link";
import ContentWarnings from "../../components/ContentWarnings";

export default function Writing() {
  return (
    <div className="text-container">
      <p>
        <i>
          Check out my new book,{" "}
          <a
            href="https://newwordspress.com/products/revenant-walk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Revenant Walk
          </a>
          !
        </i>
      </p>
      <p>
        <Link href="/writing/myths">Myths</Link>
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
