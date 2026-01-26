import React from "react";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { getPhotoMetadata } from "@/lib/photoMetadata";
import { COLLECTIONS } from "@/helpers/photoTypes";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    redirect("/admin/login");
  }

  const photos = await getPhotoMetadata();

  // Count photos per collection
  const collectionCounts: Record<string, number> = {};
  for (const collection of COLLECTIONS) {
    collectionCounts[collection.slug] = photos.filter((p) =>
      p.collections.includes(collection.slug)
    ).length;
  }

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
        <style>{`
          .dashboard-stats {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1rem;
            margin-bottom: 2rem;
          }
          .stat-card {
            background: #222;
            padding: 1.5rem;
            border-radius: 8px;
            text-align: center;
          }
          .stat-number {
            font-size: 2.5rem;
            font-weight: bold;
            color: #fff;
          }
          .stat-label {
            color: #888;
            margin-top: 0.5rem;
          }
          .collections-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 1rem;
          }
          .collection-card {
            background: #222;
            padding: 1rem;
            border-radius: 8px;
            text-decoration: none;
            color: #fff;
            transition: background 0.2s;
          }
          .collection-card:hover {
            background: #333;
          }
          .collection-title {
            font-weight: bold;
            margin-bottom: 0.25rem;
          }
          .collection-count {
            color: #888;
            font-size: 0.9rem;
          }
          .quick-actions {
            margin-bottom: 2rem;
          }
          .action-button {
            display: inline-block;
            background: #333;
            color: #fff;
            padding: 1rem 2rem;
            border-radius: 8px;
            text-decoration: none;
            margin-right: 1rem;
            transition: background 0.2s;
          }
          .action-button:hover {
            background: #444;
          }
        `}</style>

        <h1>Dashboard</h1>

        <div className="quick-actions">
          <Link href="/admin/photos/upload" className="action-button">
            + Upload Photos
          </Link>
          <Link href="/admin/photos" className="action-button">
            Manage Photos
          </Link>
        </div>

        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-number">{photos.length}</div>
            <div className="stat-label">Total Blob Photos</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{COLLECTIONS.length}</div>
            <div className="stat-label">Collections</div>
          </div>
        </div>

        <h2>Collections</h2>
        <div className="collections-grid">
          {COLLECTIONS.map((collection) => (
            <Link
              key={collection.slug}
              href={`/admin/photos?collection=${collection.slug}`}
              className="collection-card"
            >
              <div className="collection-title">{collection.title}</div>
              <div className="collection-count">
                {collectionCounts[collection.slug]} blob photos
              </div>
            </Link>
          ))}
        </div>
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
