import React from "react";
import { shuffle } from "lodash";

type Friend = {
  name: string;
  url: string;
};

// If you want custom CSS for your name, feel free to utilize the
// automatically added `friend-${name.toLowerCase()}` (e.x. "friend-arya") class.
// You can add styles in index.css. Or do whatever you want, I'm not your boss.
const FRIENDS: Friend[] = [
  {
    name: "Tucker",
    url: "https://www.tuckerlemos.com/",
  },
];

export function Friends() {
  const shuffledFriends = shuffle(FRIENDS);
  return (
    <div className="text-container">
      <p>
        My friends are so cool. If you want to be on this list,{" "}
        <a
          href="https://github.com/aryaburke/my-site/blob/main/src/pages/Friends.tsx"
          target="_blank"
          rel="noopener noreferrer"
        >
          feel free to add yourself
        </a>
        , or <a href="/contact">reach out to me</a>.
      </p>
      {shuffledFriends.map((friend) => (
        <p className={`friend-${friend.name.toLowerCase()}`}>
          <a href={friend.url} target="_blank" rel="noopener noreferrer">
            {friend.name}
          </a>
        </p>
      ))}
    </div>
  );
}
