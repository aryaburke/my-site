import React from "react";
import type { Metadata } from "next";
import "../index.css";
import Konami from "../components/Konami";
import { AchievementsManager } from "../components/AchievementsManager";
import { VisitorRegisterer } from "../components/VisitorRegisterer";

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
        <div className="rain front-row" />
        <div className="rain back-row" />
        <div id="root">{children}</div>
        <Konami />
        <AchievementsManager />
        <VisitorRegisterer />
      </body>
    </html>
  );
}
