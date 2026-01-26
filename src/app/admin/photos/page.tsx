"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { PhotoMetadata, COLLECTIONS } from "@/helpers/photoTypes";
import PhotoGrid from "@/components/admin/PhotoGrid";
import Link from "next/link";

function PhotosPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const collectionFilter = searchParams.get("collection");

  const [photos, setPhotos] = useState<PhotoMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPhotos = async () => {
    setLoading(true);
    try {
      const url = collectionFilter
        ? `/api/photos?collection=${collectionFilter}`
        : "/api/photos";
      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 401) {
          router.push("/admin/login");
          return;
        }
        throw new Error("Failed to fetch photos");
      }
      const data = await response.json();
      setPhotos(data.photos);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load photos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [collectionFilter]);

  const currentCollection = collectionFilter
    ? COLLECTIONS.find((c) => c.slug === collectionFilter)
    : null;

  return (
    <>
      <style>{`
        .photos-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .photos-title {
          margin: 0;
        }
        .filter-select {
          padding: 0.5rem 1rem;
          border: 1px solid #444;
          border-radius: 4px;
          background: #222;
          color: #fff;
          font-size: 1rem;
          cursor: pointer;
        }
        .filter-select:focus {
          outline: none;
          border-color: #666;
        }
        .upload-link {
          display: inline-block;
          background: #333;
          color: #fff;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          text-decoration: none;
          transition: background 0.2s;
        }
        .upload-link:hover {
          background: #444;
        }
        .loading {
          text-align: center;
          color: #888;
          padding: 4rem;
        }
        .error {
          background: #ff4444;
          color: #fff;
          padding: 1rem;
          border-radius: 4px;
          text-align: center;
        }
      `}</style>

      <div className="photos-header">
        <h1 className="photos-title">
          {currentCollection ? currentCollection.title : "All Photos"}
          {!loading && ` (${photos.length})`}
        </h1>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <select
            className="filter-select"
            value={collectionFilter || ""}
            onChange={(e) => {
              const value = e.target.value;
              if (value) {
                router.push(`/admin/photos?collection=${value}`);
              } else {
                router.push("/admin/photos");
              }
            }}
          >
            <option value="">All Collections</option>
            {COLLECTIONS.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.title}
              </option>
            ))}
          </select>
          <Link href="/admin/photos/upload" className="upload-link">
            + Upload
          </Link>
        </div>
      </div>

      {error && <div className="error">{error}</div>}

      {loading ? (
        <div className="loading">Loading photos...</div>
      ) : (
        <PhotoGrid photos={photos} onUpdate={fetchPhotos} />
      )}
    </>
  );
}

export default function PhotosPage() {
  return (
    <>
      <nav className="admin-nav">
        <a href="/admin" className="admin-nav-title">
          Photo Admin
        </a>
        <a href="/admin/photos">Photos</a>
        <a href="/admin/photos/upload">Upload</a>
        <a href="/" target="_blank">
          View Site
        </a>
        <LogoutButton />
      </nav>
      <div className="admin-content">
        <Suspense fallback={<div style={{ textAlign: "center", color: "#888", padding: "4rem" }}>Loading...</div>}>
          <PhotosPageContent />
        </Suspense>
      </div>
    </>
  );
}

function LogoutButton() {
  return (
    <form style={{ marginLeft: "auto" }}>
      <button
        type="button"
        style={{
          background: "transparent",
          border: "1px solid #666",
          color: "#aaa",
          padding: "0.5rem 1rem",
          cursor: "pointer",
          borderRadius: "4px",
        }}
        onClick={() => {
          fetch("/api/auth", { method: "DELETE" }).then(() => {
            window.location.href = "/admin/login";
          });
        }}
      >
        Logout
      </button>
    </form>
  );
}
