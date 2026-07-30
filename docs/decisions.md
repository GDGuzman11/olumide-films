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

## D9 — Home: cinematic layered composition (Creative-Director pass)
**Decision:** Rebuild the home as a **7-layer, single-screen cinematic composition** (still
strict no-scroll): background gradient → full-bleed hero `<video>` (`HeroVideo`, autoplay/
muted/loop, poster, reduced-motion → poster, fade-in on canplay) → atmosphere (light blooms,
vignette) → film grain (SVG `feTurbulence`) → oversized broken-grid Playfair headline over a
contrast scrim with a huge translucent "O" watermark → interactive UI (thin nav, CTAs,
borderless featured cards floating over the hero bottom, slim footer) → glass highlights.
Adds slow mouse-parallax (off for reduced-motion/touch), `--dur-slow`/`--ease-cinematic`
tokens, and a premium `MediaCard` hover (media zoom, gold ring, category fade, title rise).
Real footage drops into `public/hero-showreel.mp4`; until then an atmospheric gradient
cinemagraph stands in. **Supersedes D8's two-column hero.** User-confirmed.
**Why:** The brief wanted an IMAX/A24 *experience*, not a portfolio, while keeping the
no-scroll rule — so the cinema comes from layering, atmosphere, and oversized editorial type
rather than scroll. No new dependencies; WCAG AA preserved via scrims; motion is reduced-motion safe.

## D8 — Home page: single non-scrolling "poster" screen
**Decision:** Rebuild the home page (`HomeScreen`) as one `100dvh` screen — hero + dock
(featured work + purpose panel) + slim footer bar — with the global footer suppressed on
`/` via `ConditionalFooter`. Locked no-scroll at ≥1024px/landscape; stacks and scrolls on
small portrait screens. Replaces `Hero`/`FeaturedWork`/`QuoteBand` (removed). User-confirmed.
**Why:** Matches `Redesigned Home Page.png` and the explicit "no scroll" goal, while keeping
mobile usable/accessible (forcing one screen on phones would break readability + touch targets).

**Refinement (per `Home Page Draft 1.jpg`):** on wide displays the single narrow column left
large negative space. Fixed by (a) a **two-column hero** — text left + a tall showreel media
frame right (opens the reel modal), appropriate for a videographer; (b) a **wider canvas**
(`--container-wide` 1500px) for hero/dock/footer; (c) **larger display type** (headline ceiling
~7rem). Media stretches to hero height to close the vertical gap above the dock.

## D7 — Navigation: About · Work · Contact only
**Decision:** Remove the `Services` and `Journal` nav items (and the home `#services`
strip). Final primary nav is **About → Work → Contact**, in that order. User-confirmed.
**Why:** Services/Journal were not in the screenshots and had no dedicated content; a
focused three-item nav matches the intended pages and keeps the header clean.
