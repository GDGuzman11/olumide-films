# Project Status — OLUMIDE FILMS

_Last updated: Phase 2 (Home page)._

## Completed
- **Phase 1 — Foundation:** Next.js 14 scaffold, design tokens, `Header`/`Footer`,
  shared UI (`Container`, `Button`, `Logo`, `SectionEyebrow`, `ComingSoon`), data modules,
  docs, clean README, and public GitHub repo (`GDGuzman11/olumide-films`).
- **Phase 2 — Home page (`/`):** single-viewport "poster" (`HomeScreen`) matching
  `Redesigned Home Page.png`:
  - Hero — eyebrow, headline, lead, `Watch Showreel` (modal) + `View My Work`, `Calgary, AB`
    chip with coordinates.
  - Dock — compact 3-card Featured Work strip (focus-trapped preview `Modal`) + "Every Frame
    Has a Purpose" panel with `About Olumide`.
  - Slim footer bar; global footer suppressed on `/` via `ConditionalFooter`.
  - No-scroll locked to `100dvh` at ≥1024px/landscape; stacks + scrolls on small portrait.
  - Reusable UI: `MediaCard` (+ compact variant), `Modal`, `VideoPlaceholder`, `PreviewBody`.
  - Nav set to About · Work · Contact.
  - Verified: `lint` clean, `build` succeeds, dev server renders (HTTP 200).

## In progress
- Awaiting approval to start Phase 3 (About page).

## Blocked
- None.

## Remaining
- Phase 3: About page.
- Phase 4: Portfolio page.
- Phase 5: Contact page + `/api/contact` (Resend, validation, anti-spam).
- Phase 6: Responsive/a11y/security QA, Vercel + Cloudflare prep, final report.

## Known issues
- None outstanding.
