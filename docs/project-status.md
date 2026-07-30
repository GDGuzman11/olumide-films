# Project Status — OLUMIDE FILMS

_Last updated: Phase 2 (Home page)._

## Completed
- **Phase 1 — Foundation:** Next.js 14 scaffold, design tokens, `Header`/`Footer`,
  shared UI (`Container`, `Button`, `Logo`, `SectionEyebrow`, `ComingSoon`), data modules,
  docs, clean README, and public GitHub repo (`GDGuzman11/olumide-films`).
- **Phase 2 — Home page (`/`):** cinematic **7-layer** single-viewport composition
  (`HomeScreen`) — full-bleed `HeroVideo` (poster + reduced-motion fallback, drop-in
  `public/hero-showreel.mp4`), atmospheric blooms/vignette, SVG film grain, oversized
  broken-grid Playfair headline + translucent "O" watermark, borderless featured cards
  overlapping the hero, mouse parallax, premium `MediaCard` hovers, thinned nav. Strict
  no-scroll at ≥1024px; reduced-motion safe. Earlier notes below kept for history:
  - Hero — eyebrow, headline, lead, `Watch Showreel` (modal) + `View My Work`, `Calgary, AB`
    chip with coordinates.
  - Dock — compact 3-card Featured Work strip (focus-trapped preview `Modal`) + "Every Frame
    Has a Purpose" panel with `About Olumide`.
  - Slim footer bar; global footer suppressed on `/` via `ConditionalFooter`.
  - No-scroll locked to `100dvh` at ≥1024px/landscape; stacks + scrolls on small portrait.
  - Reusable UI: `MediaCard` (+ compact variant), `Modal`, `VideoPlaceholder`, `PreviewBody`.
  - Nav set to About · Work · Contact.
  - Verified: `lint` clean, `build` succeeds, dev server renders (HTTP 200).

- **Phase 3 — About page (`/about`):** now a **non-scroll single screen, strictly about the
  person** — `AboutIntro` (headline, bio, CTA, location, portrait) + shared `MiniFooter`.
  "My Approach" and "The Mission" removed to hold the no-scroll theme. Shared `ScrollLock` +
  `MiniFooter` also used by home; global footer suppressed on `/` and `/about`. Lint/build clean.

## In progress
- Awaiting approval to start Phase 4 (Portfolio page).

## Blocked
- None.

## Remaining
- Phase 4: Portfolio page.
- Phase 5: Contact page + `/api/contact` (Resend, validation, anti-spam).
- Phase 6: Responsive/a11y/security QA, Vercel + Cloudflare prep, final report.

## Known issues
- None outstanding.
