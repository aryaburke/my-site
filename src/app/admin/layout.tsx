import React from "react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout">
      <style>{`
        .admin-layout {
          min-height: 100vh;
          background: #1a1a1a;
          color: #fff;
          font-family: system-ui, -apple-system, sans-serif;
        }
        .admin-nav {
          background: #222;
          padding: 1rem 2rem;
          display: flex;
          gap: 2rem;
          align-items: center;
          border-bottom: 1px solid #333;
        }
        .admin-nav a {
          color: #aaa;
          text-decoration: none;
          transition: color 0.2s;
        }
        .admin-nav a:hover {
          color: #fff;
        }
        .admin-nav-title {
          font-weight: bold;
          color: #fff !important;
          font-size: 1.1rem;
        }
        .admin-content {
          padding: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }
      `}</style>
      {children}
    </div>
  );
}
