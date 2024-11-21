import React from "react";

import { shuffle } from "lodash";

type Publication = {
  title: string;
  year: string;
  publisher: string;
  links: {
    print?: string;
    digital?: string;
  };
};

const publications: Publication[] = [
  {
    title: "Milkmen",
    year: "2021",
    publisher: "B O N E M I L K II",
    links: {
      print: "",
      digital: "",
    },
  },
  {
    title: "She, Starlight Spirit / ☆ / ☾ / Meditation I",
    year: "2021",
    publisher: "FERAL Journal Issue 9",
    links: {
      print: "",
      digital: "",
    },
  },
  {
    title: "from form",
    year: "2017",
    publisher: "misery tourism",
    links: {
      print: "",
      digital: "",
    },
  },
  {
    title: "deus opening / after wires",
    year: "2021",
    publisher: "new words {press} issue 1",
    links: {
      print: "",
      digital: "",
    },
  },
];

function Publication({ publication }: { publication: Publication }) {
  return (
    <div className="publication-item">
      <p>{publication.title}</p>
      <p>{publication.year}</p>
      <p>{publication.publisher}</p>
      <p>
        Available in <a href={publication.links.print}>print</a> and{" "}
        <a href={publication.links.digital}>digital</a>
      </p>
    </div>
  );
}

export function Publications() {
  const shuffledPublications = shuffle(publications);
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
