"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

// The home page is a single, non-scrolling screen with its own slim footer bar,
// so the global footer is suppressed there and shown on every other route.
export default function ConditionalFooter() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <Footer />;
}
