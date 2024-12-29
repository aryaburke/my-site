import React from "react";
import { PHOTO_PAGES } from "../../helpers/photoConsts";
import Link from "next/link";

export default function Photography() {
  return (
    <div className="text-container">
      {PHOTO_PAGES.sort((a, b) => (a.order! > b.order! ? 1 : -1)).map(
        (page) => (
          <p key={page.slug}>
            <Link
              href={`/photography/${page.slug || page.title.toLowerCase()}`}
            >
              {page.title}
            </Link>
          </p>
        )
      )}
    </div>
  );
}
