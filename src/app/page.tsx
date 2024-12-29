import Link from "next/link";
import React from "react";
import IntroText from "../components/IntroText";

export default function Home() {
  return (
    <div className="text-container">
      <IntroText />
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
    </div>
  );
}
