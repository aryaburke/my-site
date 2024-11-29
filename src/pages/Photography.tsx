import React from "react";
import { PHOTO_PAGES } from "../helpers/photoConsts";

export function Photography() {
  return (
    <div className="text-container">
      {PHOTO_PAGES.map((page) => (
        <p>
          <a href={`/photography/${page.slug || page.title.toLowerCase()}`}>
            {page.title}
          </a>
        </p>
      ))}
      {/* <p>
        <a href="/photography/beacons">Beacons</a>
      </p>
      <p>
        <a href="/photography/oxidation">Oxidation</a>
      </p>
      <p>
        <a href="/photography/wonder">Wonder</a>
      </p>
      <p>
        <a href="/photography/hubris">Hubris</a>
      </p>
      <p>
        <a href="/photography/strangers">Strangers</a>
      </p> */}
    </div>
  );
}
