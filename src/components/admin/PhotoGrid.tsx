"use client";

import React, { useState } from "react";
import { PhotoMetadata, COLLECTIONS } from "@/helpers/photoTypes";
import PhotoEditModal from "./PhotoEditModal";

type Props = {
  photos: PhotoMetadata[];
  onUpdate: () => void;
};

export default function PhotoGrid({ photos, onUpdate }: Props) {
  const [editingPhoto, setEditingPhoto] = useState<PhotoMetadata | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (photo: PhotoMetadata) => {
    if (!confirm(`Delete "${photo.title}"? This cannot be undone.`)) {
      return;
    }

    setDeletingId(photo.id);
    try {
      const response = await fetch(`/api/photos/${photo.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      onUpdate();
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete photo");
    } finally {
      setDeletingId(null);
    }
  };

  const getCollectionNames = (collections: string[]) => {
    return collections
      .map((slug) => COLLECTIONS.find((c) => c.slug === slug)?.title || slug)
      .join(", ");
  };

  if (photos.length === 0) {
    return (
      <div style={styles.empty}>
        <p>No photos found. Upload some photos to get started!</p>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .photo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .photo-card {
          background: #222;
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.2s;
        }
        .photo-card:hover {
          transform: translateY(-2px);
        }
        .photo-image-container {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
          background: #111;
        }
        .photo-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .photo-info {
          padding: 1rem;
        }
        .photo-title {
          font-weight: bold;
          margin: 0 0 0.5rem;
          color: #fff;
        }
        .photo-meta {
          color: #888;
          font-size: 0.85rem;
          margin: 0 0 0.5rem;
        }
        .photo-collections {
          color: #666;
          font-size: 0.8rem;
          margin: 0;
        }
        .photo-actions {
          display: flex;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        .photo-action-btn {
          flex: 1;
          padding: 0.5rem;
          border: 1px solid #444;
          border-radius: 4px;
          background: transparent;
          color: #aaa;
          cursor: pointer;
          font-size: 0.85rem;
          transition: all 0.2s;
        }
        .photo-action-btn:hover {
          border-color: #666;
          color: #fff;
        }
        .photo-action-btn.delete:hover {
          border-color: #ff4444;
          color: #ff4444;
        }
        .photo-action-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>

      <div className="photo-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-card">
            <div className="photo-image-container">
              <img src={photo.src} alt={photo.alt || photo.title} className="photo-image" />
            </div>
            <div className="photo-info">
              <h3 className="photo-title">{photo.title}</h3>
              <p className="photo-meta">
                {photo.year && <span>{photo.year}</span>}
                {photo.shotBy && <span> • Shot by {photo.shotBy}</span>}
                {photo.vertical && <span> • Vertical</span>}
              </p>
              {photo.collections.length > 0 && (
                <p className="photo-collections">
                  {getCollectionNames(photo.collections)}
                </p>
              )}
              <div className="photo-actions">
                <button
                  className="photo-action-btn"
                  onClick={() => setEditingPhoto(photo)}
                >
                  Edit
                </button>
                <button
                  className="photo-action-btn delete"
                  onClick={() => handleDelete(photo)}
                  disabled={deletingId === photo.id}
                >
                  {deletingId === photo.id ? "..." : "Delete"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editingPhoto && (
        <PhotoEditModal
          photo={editingPhoto}
          onClose={() => setEditingPhoto(null)}
          onSave={() => {
            setEditingPhoto(null);
            onUpdate();
          }}
        />
      )}
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  empty: {
    textAlign: "center",
    color: "#888",
    padding: "4rem 2rem",
    background: "#222",
    borderRadius: "8px",
  },
};
