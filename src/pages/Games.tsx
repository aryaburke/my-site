import React from "react";

export function Games() {
  return (
    <div className="text-container">
      <p>
        <a
          href="https://aryaburke.itch.io/eat-it-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          eat-it-all
        </a>
      </p>
      <p>
        <a
          href="https://sceneplay.fireside.fm/guests/arya"
          target="_blank"
          rel="noopener noreferrer"
        >
          Scene Play
        </a>{" "}
        <i>
          (might I recommend{" "}
          <a
            href="https://open.spotify.com/episode/3zdGwYKN2iQvWCgHBvOUsw?si=330e3208cec941fb"
            target="_blank"
            rel="noopener noreferrer"
          >
            A Modern Prometheus
          </a>
          ?)
        </i>
      </p>
    </div>
  );
}
