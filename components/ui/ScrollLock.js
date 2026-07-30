"use client";

import { useEffect } from "react";

/**
 * Locks page scroll on large viewports for single-screen ("non-scroll") routes.
 * Adds a body class (styled in globals.css) on mount and removes it on unmount,
 * so the lock is scoped to the page that renders it.
 */
export default function ScrollLock() {
  useEffect(() => {
    document.body.classList.add("screen-locked");
    return () => document.body.classList.remove("screen-locked");
  }, []);
  return null;
}
