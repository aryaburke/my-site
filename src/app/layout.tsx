import React from "react";
import type { Metadata } from "next";
import "../index.css";
import Konami from "../components/Konami";

export const metadata: Metadata = {
  title: "Arya's Room",
  description: ":)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
        <Konami />
      </body>
    </html>
  );
}
