"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

// Single-screen ("non-scroll") routes render their own slim MiniFooter, so the
// global footer is suppressed there and shown on every scrolling route.
const NO_GLOBAL_FOOTER = new Set(["/", "/about"]);

export default function ConditionalFooter() {
  const pathname = usePathname();
  if (NO_GLOBAL_FOOTER.has(pathname)) return null;
  return <Footer />;
}
