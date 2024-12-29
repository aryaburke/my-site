import React from "react";
import Link from "next/link";

export default function Myths() {
  return (
    <div className="text-container">
      <p>
        <Link href="/writing/myths/milkmen">Milkmen</Link>
      </p>
      <p>
        <Link href="/writing/myths/the-procedure">The Procedure</Link>
      </p>
    </div>
  );
}
