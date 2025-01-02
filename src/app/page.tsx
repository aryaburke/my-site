import Link from "next/link";
import React from "react";
import AchievementsLink from "../components/AchievementsLink";

export default function Home() {
  return (
    <div className="text-container">
      <p>
        <i>
          Hi — I'm Arya Burke — I live in Brooklyn, NY — Here you can find some
          of my art.
        </i>
      </p>
      <p>
        <Link href="/photography">Photography</Link>
      </p>
      <p>
        <Link href="/writing">Writing</Link>
      </p>
      <p>
        <Link href="/music">Music</Link>
      </p>
      <p>
        <Link href="/games">Games</Link>
      </p>
      <p>
        <Link href="/tattoos">Tattoos</Link>
      </p>
      <p>
        <Link href="/friends">Friends</Link>
      </p>
      <p>
        <Link href="/contact">Contact</Link>
      </p>
      <AchievementsLink />
    </div>
  );
}
