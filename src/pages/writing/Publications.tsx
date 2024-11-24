import React from "react";

import { shuffle } from "lodash";

type Publication = {
  title: string;
  publicationYear: string;
  writtenYear: string;
  publisher: string;
  links: {
    print?: string;
    digital?: string;
  };
};

const PUBLICATIONS: Publication[] = [
  {
    title: "Milkmen",
    publicationYear: "2021",
    writtenYear: "2017",
    publisher: "B O N E M I L K II",
    links: {
      print:
        "https://gutslutpress.com/product/pre-order-the-b-o-n-e-m-i-l-k-collective-volume-ii-print/",
      digital:
        "https://gutslutpress.com/product/pre-order-the-b-o-n-e-m-i-l-k-collective-volume-ii-digital/",
    },
  },
  {
    title: "She, Starlight Spirit / ☆ / ☾ / Meditation I",
    publicationYear: "2021",
    writtenYear: "2015—2017",
    publisher: "FERAL: A Journal of Poetry and Art, Issue 9",
    links: {
      print:
        "https://www.lulu.com/shop/beth-gordon/feral-a-journal-of-poetry-and-art-issue-nine-august-2021-the-space-issue/paperback/product-pm67r6.html",
      digital: "https://feralpoetry.net/four-poems-by-arya-burke/",
    },
  },
  {
    title: "from form",
    publicationYear: "2021",
    writtenYear: "2017",
    publisher: "misery tourism",
    links: {
      digital: "https://www.miserytourism.com/from-form/",
    },
  },
  {
    title: "deus: opening / after wires",
    publicationYear: "2021",
    writtenYear: "2021",
    publisher: "new words {press}, Issue 1",
    links: {
      print:
        "https://store.newwordspress.com/products/Issue-One-new-words-p569384531",
      digital:
        "https://store.newwordspress.com/products/Issue-One-new-words-PDF-p569317737",
    },
  },
];

function Publication({ publication }: { publication: Publication }) {
  const primaryLink = publication.links.digital || publication.links.print;
  const secondaryLink = publication.links.print || publication.links.digital;

  return (
    <div className="publication-item">
      <p>
        <a href={primaryLink} target="_blank" rel="noopener noreferrer">
          {publication.title}
        </a>
      </p>
      <p>
        <i>
          Published {publication.publicationYear} in{" "}
          <a href={secondaryLink} target="_blank" rel="noopener noreferrer">
            {publication.publisher}
          </a>
          , written {publication.writtenYear}
        </i>
      </p>
    </div>
  );
}

export function Publications() {
  const shuffledPublications = shuffle(PUBLICATIONS);
  return (
    <div className="text-container">
      {shuffledPublications.map((publication, index) => (
        <>
          <Publication publication={publication} />
          {index !== shuffledPublications.length - 1 && <br />}
        </>
      ))}
    </div>
  );
}
