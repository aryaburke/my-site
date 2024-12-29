import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-container">
      <p>404</p>
      <p>
        <i>
          You must be lost. <Link href="/">Here's your way home.</Link>
        </i>
      </p>
    </div>
  );
}
