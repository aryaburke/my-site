"use client";

import React, { useState, useCallback } from "react";
import imageCompression from "browser-image-compression";
import CollectionSelector from "./CollectionSelector";

type Props = {
  onSuccess?: () => void;
};

export default function PhotoUploadForm({ onSuccess }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [alt, setAlt] = useState("");
  const [shotBy, setShotBy] = useState("");
  const [vertical, setVertical] = useState(false);
  const [collections, setCollections] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [compressing, setCompressing] = useState(false);
  const [error, setError] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const handleFile = useCallback(async (selectedFile: File) => {
    setError("");
    setCompressing(true);

    try {
      // Compress the image
      const options = {
        maxSizeMB: 1, // Max 1MB
        maxWidthOrHeight: 2400, // Max dimension 2400px
        useWebWorker: true,
        fileType: "image/jpeg" as const,
      };

      const compressedFile = await imageCompression(selectedFile, options);
      setFile(compressedFile);

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(compressedFile);

      // Auto-detect vertical orientation from image dimensions
      const img = new Image();
      img.onload = () => {
        setVertical(img.height > img.width);
      };
      img.src = URL.createObjectURL(compressedFile);

      // Auto-fill title from filename if empty
      if (!title) {
        const name = selectedFile.name
          .replace(/\.[^/.]+$/, "") // Remove extension
          .replace(/[_-]/g, " ") // Replace underscores/hyphens with spaces
          .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before capitals
          .trim();
        setTitle(name.charAt(0).toUpperCase() + name.slice(1));
      }
    } catch (err) {
      console.error("Compression error:", err);
      setError("Failed to process image");
    } finally {
      setCompressing(false);
    }
  }, [title]);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragActive(false);
      if (e.dataTransfer.files?.[0]) {
        handleFile(e.dataTransfer.files[0]);
      }
    },
    [handleFile]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError("Please select an image");
      return;
    }
    if (!title.trim()) {
      setError("Please enter a title");
      return;
    }

    setUploading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("title", title.trim());
      formData.append("year", year);
      formData.append("alt", alt.trim());
      formData.append("shotBy", shotBy.trim());
      formData.append("vertical", String(vertical));
      formData.append("collections", JSON.stringify(collections));

      const response = await fetch("/api/photos", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Upload failed");
      }

      // Reset form
      setFile(null);
      setPreview(null);
      setTitle("");
      setYear(new Date().getFullYear().toString());
      setAlt("");
      setShotBy("");
      setVertical(false);
      setCollections([]);

      onSuccess?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <style>{`
        .upload-dropzone {
          border: 2px dashed #444;
          border-radius: 8px;
          padding: 3rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
          background: #222;
        }
        .upload-dropzone:hover,
        .upload-dropzone.active {
          border-color: #666;
          background: #2a2a2a;
        }
        .upload-input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #444;
          border-radius: 4px;
          background: #222;
          color: #fff;
          font-size: 1rem;
        }
        .upload-input:focus {
          outline: none;
          border-color: #666;
        }
        .upload-button {
          width: 100%;
          padding: 1rem;
          border: none;
          border-radius: 4px;
          background: #333;
          color: #fff;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.2s;
        }
        .upload-button:hover:not(:disabled) {
          background: #444;
        }
        .upload-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .upload-checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          color: #aaa;
        }
        .upload-checkbox-label:hover {
          color: #fff;
        }
      `}</style>

      {error && <div style={styles.error}>{error}</div>}

      <div
        className={`upload-dropzone ${dragActive ? "active" : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        onClick={() => document.getElementById("file-input")?.click()}
      >
        {compressing ? (
          <p style={{ color: "#888" }}>Compressing image...</p>
        ) : preview ? (
          <div>
            <img
              src={preview}
              alt="Preview"
              style={{
                maxWidth: "300px",
                maxHeight: "300px",
                borderRadius: "4px",
              }}
            />
            <p style={{ color: "#888", marginTop: "1rem" }}>
              Click or drag to replace
            </p>
          </div>
        ) : (
          <>
            <p style={{ color: "#888", margin: 0 }}>
              Drop an image here or click to select
            </p>
            <p style={{ color: "#666", fontSize: "0.9rem", marginTop: "0.5rem" }}>
              Images will be compressed to max 1MB / 2400px
            </p>
          </>
        )}
        <input
          id="file-input"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => {
            if (e.target.files?.[0]) {
              handleFile(e.target.files[0]);
            }
          }}
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Title *</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="upload-input"
          placeholder="Photo title"
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
            className="upload-input"
            placeholder="2024"
          />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Shot By</label>
          <input
            type="text"
            value={shotBy}
            onChange={(e) => setShotBy(e.target.value)}
            className="upload-input"
            placeholder="Photographer name"
          />
        </div>
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Alt Text</label>
        <input
          type="text"
          value={alt}
          onChange={(e) => setAlt(e.target.value)}
          className="upload-input"
          placeholder="Description for accessibility"
        />
      </div>

      <div style={styles.field}>
        <label className="upload-checkbox-label">
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

      <button
        type="submit"
        disabled={uploading || compressing || !file}
        className="upload-button"
      >
        {uploading ? "Uploading..." : "Upload Photo"}
      </button>
    </form>
  );
}

const styles: Record<string, React.CSSProperties> = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    maxWidth: "600px",
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
};
