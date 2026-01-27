"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        router.push("/admin");
      } else {
        const data = await response.json();
        setError(data.error || "Login failed");
      }
    } catch {
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <style>{`
        .login-input:focus {
          outline: none;
          border-color: #666;
        }
        .login-button:hover:not(:disabled) {
          background: #444;
        }
      `}</style>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.title}>Photo Admin</h1>
        {error && <div style={styles.error}>{error}</div>}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="login-input"
          style={styles.input}
          autoFocus
        />
        <button
          type="submit"
          disabled={loading}
          className="login-button"
          style={styles.button}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "2rem",
  },
  form: {
    background: "#222",
    padding: "2rem",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "400px",
  },
  title: {
    margin: "0 0 1.5rem",
    textAlign: "center",
    fontSize: "1.5rem",
  },
  error: {
    background: "#ff4444",
    color: "#fff",
    padding: "0.75rem",
    borderRadius: "4px",
    marginBottom: "1rem",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "0.75rem",
    border: "1px solid #444",
    borderRadius: "4px",
    background: "#333",
    color: "#fff",
    fontSize: "1rem",
    marginBottom: "1rem",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "0.75rem",
    border: "none",
    borderRadius: "4px",
    background: "#333",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background 0.2s",
  },
};
