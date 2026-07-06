"use client";
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
        <Link href="/me">Me :)</Link>
      </p>
      <AchievementsLink />
      <br />
      <p>
        <i>
          If you want to be kept up to date on new photos, new writing, or get
          the occasional virtual holiday card, sign up below.
        </i>
      </p>
      <form
        action="https://buttondown.com/api/emails/embed-subscribe/aryas-room"
        method="post"
        target="popupwindow"
        onSubmit={() =>
          window.open("https://buttondown.com/aryas-room", "popupwindow")
        }
        className="embeddable-buttondown-form"
      >
        <input
          type="email"
          name="email"
          id="bd-email"
          placeholder="Enter your email..."
        />
        <input type="submit" value="Sign me up!" />
      </form>
    </div>
  );
}
