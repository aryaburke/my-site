"use client";

import React from "react";
import { COLLECTIONS } from "@/helpers/photoTypes";

type Props = {
  selected: string[];
  onChange: (collections: string[]) => void;
};

export default function CollectionSelector({ selected, onChange }: Props) {
  const toggle = (slug: string) => {
    if (selected.includes(slug)) {
      onChange(selected.filter((s) => s !== slug));
    } else {
      onChange([...selected, slug]);
    }
  };

  return (
    <div style={styles.container}>
      <style>{`
        .collection-chip {
          padding: 0.5rem 1rem;
          border-radius: 20px;
          border: 1px solid #444;
          background: #222;
          color: #aaa;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 0.9rem;
        }
        .collection-chip:hover {
          border-color: #666;
          color: #fff;
        }
        .collection-chip.selected {
          background: #444;
          border-color: #666;
          color: #fff;
        }
      `}</style>
      {COLLECTIONS.map((collection) => (
        <button
          key={collection.slug}
          type="button"
          className={`collection-chip ${selected.includes(collection.slug) ? "selected" : ""}`}
          onClick={() => toggle(collection.slug)}
        >
          {collection.title}
        </button>
      ))}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
};
