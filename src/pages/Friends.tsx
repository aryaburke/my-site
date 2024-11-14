import React from "react";
import { shuffle } from "lodash";

type Friend = {
  name: string;
  url: string;
};

// If you want custom CSS for your name, feel free to utilize the
// automatically added `friend-${name.toLowerCase()}` (e.x. "friend-arya") class.
// You can add styles in index.css. Or do whatever you want, I'm not your boss.
const friends: Friend[] = [
  {
    name: "Tucker",
    url: "https://www.tuckerlemos.com/",
  },
  {
    name: "Evie",
    url: "https://www.irrelevantpress.com/tears-of-other-people",
  },
  {
    name: "Jimmy",
    url: "",
  },
];

export function Friends() {
  const shuffledFriends = shuffle(friends);
  return (
    <div className="text-container">
      {shuffledFriends.map((friend) => (
        <p className={`friend-${friend.name.toLowerCase()}`}>
          <a href={friend.url} target="_blank" rel="noopener noreferrer">
            {friend.name}
          </a>
        </p>
      ))}
      <p>
        <i>
          I love people. If you want to be on this list,{" "}
          <a
            href="https://github.com/aryaburke/my-site/blob/main/src/pages/Friends.tsx"
            target="_blank"
            rel="noopener noreferrer"
          >
            feel free to add yourself
          </a>
          , or <a href="/contact">reach out to me</a>.
        </i>
      </p>
    </div>
  );
}
