/*

To add yourself, just fork the repo and put up a PR with your changes

*/
"use client";
import React from "react";
import { shuffle } from "lodash";
import { ACHIEVEMENTS, unlockAchievement } from "../../helpers/achievements";

type Friend = {
  name: string;
  url: string;
  onClick?: () => void;
};

// If you want custom CSS for your name, feel free to utilize the
// automatically added `friend-${name.toLowerCase()}` (e.x. "friend-arya") class.
// You can add styles in index.css. Or do whatever you want, I'm not your boss.
const FRIENDS: Friend[] = [
  {
    name: "Tucker",
    url: "https://tuckerlemos.com",
  },
  {
    name: "Evie",
    url: "https://evieippolito.com",
  },
  {
    name: "Erica",
    url: "https://www.ericacaparelli.com",
  },
  {
    name: "August",
    url: "https://augustkline.com",
  },
  {
    name: "Ankit",
    url: "https://ankit.tech",
  },
  {
    name: "Shreeya",
    url: "https://shreeyagoel.com/",
  },
  {
    name: "Jordan",
    url: "https://jordanscales.com/",
  },
  {
    name: "Nick",
    url: "https://www.nickzuber.com/",
  },
  {
    name: "Jimmy",
    url: "https://oceanshores.com/",
    onClick: () => unlockAchievement(ACHIEVEMENTS.jimmy.name),
  },
];

export default function Friends() {
  const shuffledFriends = shuffle(FRIENDS);
  return (
    <div className="text-container">
      {shuffledFriends.map((friend) => {
        const className = `friend-${friend.name.toLowerCase()}`;
        return (
          <p className={className} key={className} suppressHydrationWarning>
            <a
              href={friend.url}
              onClick={friend?.onClick}
              target="_blank"
              rel="noopener noreferrer"
              suppressHydrationWarning
            >
              {friend.name}
            </a>
          </p>
        );
      })}
      <p>
        <i>
          I love people. If you want to be on this list,{" "}
          <a
            href="https://github.com/aryaburke/my-site/blob/main/src/app/friends/page.tsx"
            target="_blank"
            rel="noopener noreferrer"
          >
            feel free to add yourself
          </a>
          , or <a href="/contact">reach out to me</a>.
        </i>
      </p>
      <p>
        <i>
          Don't have a site, but want to make one? I got inspired by{" "}
          <a
            href="https://coolguy.website/basic-html-competency-is-the-new-punk-folk-explosion/"
            target="_blank"
            rel="noopener noreferrer"
          >
            this article
          </a>{" "}
          by Zach Mandeville.
        </i>
      </p>
    </div>
  );
}
