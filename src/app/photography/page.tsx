import React from "react";
import { PHOTO_PAGES } from "../../helpers/photoConsts";

export default function Photography() {
  return (
    <div className="text-container">
      {PHOTO_PAGES.sort((a, b) => (a.order! > b.order! ? 1 : -1)).map(
        (page) => (
          <p key={page.slug}>
            <a href={`/photography/${page.slug || page.title.toLowerCase()}`}>
              {page.title}
            </a>
          </p>
        )
      )}
    </div>
  );
}
