# Decisions — OLUMIDE FILMS

Record of notable technical/design decisions and why.

## D1 — Framework: Next.js 14 App Router
**Decision:** Use Next.js (App Router) rather than Vite + React Router.
**Why:** Built-in Route Handlers keep the contact-form backend in one deployable unit,
better SEO/metadata for a marketing site, and first-class Vercel support. User-confirmed.

## D2 — Styling: CSS Modules + design tokens
**Decision:** Global CSS custom properties for tokens + per-component CSS Modules.
**Why:** No framework lock-in, small bundle, scoped styles, easy to reuse. Matches
"centralized tokens, focused components" guidance in CLAUDE.md.

## D3 — Fonts: Playfair Display + Inter via next/font
**Decision:** Serif display (Playfair Display) for headings, Inter for body/labels.
**Why:** Approximates the cinematic serif headlines + clean sans body in the screenshots,
self-hosted at build time (no layout shift, no third-party runtime request).

## D4 — Placeholder assets
**Decision:** Ship with gradient/placeholder media and dummy project data.
**Why:** Keeps the site fully functional now; real footage/photography swapped in later
without structural change. User-confirmed.

## D5 — Contact backend: Resend + zod
**Decision:** `app/api/contact/route.js` with zod validation, honeypot, and rate limiting;
Resend for delivery. Success shown only after the server confirms. (Implemented Phase 5.)
**Why:** Real, secure form handling per CLAUDE.md; no fake success states.

## D6 — Repository: public GitHub repo `olumide-films`
**Decision:** Public repo; README updated on every push. User-confirmed.
**Why:** Doubles as a showcase; README as living documentation.

## D7 — Services / Journal nav
**Decision:** Point to home-page anchors for now; not built as full pages.
**Why:** Present in the nav bar but absent from screenshots. Revisit if content is provided.
