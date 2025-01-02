"use client";

import { useEffect } from "react";
import { STORAGE_KEYS } from "../helpers/achievements";

export function VisitorRegisterer() {
  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEYS.firstVisit)) {
      localStorage.setItem(STORAGE_KEYS.firstVisit, Date.now().toString());
    }
  }, []);

  return <></>;
}
