"use client";

import React, { useState } from "react";
import { PhotoMetadata } from "@/helpers/photoTypes";
import CollectionSelector from "./CollectionSelector";

type Props = {
  photo: PhotoMetadata;
  onClose: () => void;
  onSave: () => void;
};

export default function PhotoEditModal({ photo, onClose, onSave }: Props) {
  const [title, setTitle] = useState(photo.title);
  const [year, setYear] = useState(photo.year || "");
  const [alt, setAlt] = useState(photo.alt || "");
  const [shotBy, setShotBy] = useState(photo.shotBy || "");
  const [vertical, setVertical] = useState(photo.vertical || false);
  const [collections, setCollections] = useState<string[]>(photo.collections);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    setSaving(true);
    setError("");

    try {
      const response = await fetch(`/api/photos/${photo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          year: year.trim() || undefined,
          alt: alt.trim() || undefined,
          shotBy: shotBy.trim() || undefined,
          vertical,
          collections,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Save failed");
      }

      onSave();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <style>{`
        .modal-input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #444;
          border-radius: 4px;
          background: #222;
          color: #fff;
          font-size: 1rem;
          box-sizing: border-box;
        }
        .modal-input:focus {
          outline: none;
          border-color: #666;
        }
        .modal-button {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.2s;
        }
        .modal-button-primary {
          background: #333;
          color: #fff;
        }
        .modal-button-primary:hover:not(:disabled) {
          background: #444;
        }
        .modal-button-secondary {
          background: transparent;
          color: #aaa;
          border: 1px solid #444;
        }
        .modal-button-secondary:hover {
          border-color: #666;
          color: #fff;
        }
        .modal-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .modal-checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          color: #aaa;
        }
        .modal-checkbox-label:hover {
          color: #fff;
        }
      `}</style>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.header}>
          <h2 style={styles.title}>Edit Photo</h2>
          <button style={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        <div style={styles.preview}>
          <img
            src={photo.src}
            alt={photo.alt || photo.title}
            style={styles.previewImage}
          />
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          {error && <div style={styles.error}>{error}</div>}

          <div style={styles.field}>
            <label style={styles.label}>Title *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="modal-input"
              required
            />
          </div>

          <div style={styles.row}>
            <div style={styles.field}>
              <label style={styles.label}>Year</label>
              <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="modal-input"
                placeholder="2024"
              />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Shot By</label>
              <input
                type="text"
                value={shotBy}
                onChange={(e) => setShotBy(e.target.value)}
                className="modal-input"
                placeholder="Photographer"
              />
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Alt Text</label>
            <input
              type="text"
              value={alt}
              onChange={(e) => setAlt(e.target.value)}
              className="modal-input"
              placeholder="Description for accessibility"
            />
          </div>

          <div style={styles.field}>
            <label className="modal-checkbox-label">
              <input
                type="checkbox"
                checked={vertical}
                onChange={(e) => setVertical(e.target.checked)}
              />
              Vertical orientation
            </label>
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Collections</label>
            <CollectionSelector selected={collections} onChange={setCollections} />
          </div>

          <div style={styles.actions}>
            <button
              type="button"
              className="modal-button modal-button-secondary"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="modal-button modal-button-primary"
              disabled={saving}
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    zIndex: 1000,
  },
  modal: {
    background: "#1a1a1a",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "500px",
    maxHeight: "90vh",
    overflow: "auto",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 1.5rem",
    borderBottom: "1px solid #333",
  },
  title: {
    margin: 0,
    fontSize: "1.25rem",
  },
  closeButton: {
    background: "transparent",
    border: "none",
    color: "#888",
    fontSize: "1.5rem",
    cursor: "pointer",
    padding: "0.25rem",
    lineHeight: 1,
  },
  preview: {
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    background: "#111",
  },
  previewImage: {
    maxWidth: "100%",
    maxHeight: "200px",
    borderRadius: "4px",
  },
  form: {
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  error: {
    background: "#ff4444",
    color: "#fff",
    padding: "0.75rem",
    borderRadius: "4px",
    textAlign: "center",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
  },
  label: {
    color: "#888",
    fontSize: "0.9rem",
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "0.75rem",
    marginTop: "0.5rem",
  },
};
