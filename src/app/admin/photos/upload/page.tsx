"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import PhotoUploadForm from "@/components/admin/PhotoUploadForm";
import Link from "next/link";

export default function UploadPage() {
  const router = useRouter();
  const [successCount, setSuccessCount] = useState(0);

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
          .upload-header {
            margin-bottom: 2rem;
          }
          .back-link {
            color: #888;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 1rem;
          }
          .back-link:hover {
            color: #fff;
          }
          .success-banner {
            background: #2d5a2d;
            color: #fff;
            padding: 1rem;
            border-radius: 4px;
            margin-bottom: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .success-link {
            color: #8f8;
            text-decoration: underline;
          }
        `}</style>

        <div className="upload-header">
          <Link href="/admin/photos" className="back-link">
            ← Back to Photos
          </Link>
          <h1>Upload Photo</h1>
        </div>

        {successCount > 0 && (
          <div className="success-banner">
            <span>
              {successCount} photo{successCount > 1 ? "s" : ""} uploaded successfully!
            </span>
            <Link href="/admin/photos" className="success-link">
              View Photos
            </Link>
          </div>
        )}

        <PhotoUploadForm
          onSuccess={() => {
            setSuccessCount((c) => c + 1);
          }}
        />
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
