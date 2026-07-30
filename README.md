# OLUMIDE FILMS

Cinematic film & visual storytelling studio website — a dark, responsive, accessible
marketing/portfolio site for **OLUMIDE FILMS** (Calgary, AB), built from reference
screenshots.

> **Status:** Phase 2 — Home page complete. About, Portfolio, and Contact pages are
> delivered in later phases (see roadmap).

## Tech stack
- **Next.js 14** (App Router) + **React 18** — JavaScript
- **CSS Modules** + global design tokens (CSS custom properties)
- **next/font** — Playfair Display (display) + Inter (body)
- **Resend** for the contact form (Phase 5)
- Deployed on **Vercel**; DNS/security via **Cloudflare** (Phase 6)

## Getting started
```bash
npm install
npm run dev      # http://localhost:3000
```

### Scripts
| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint (next/core-web-vitals) |

## Environment variables
Copy `.env.example` to `.env.local`. All variables are **server-side only** (never
`NEXT_PUBLIC_`). Used from Phase 5 onward.

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key for transactional email |
| `CONTACT_FROM_EMAIL` | Verified sender address |
| `CONTACT_TO_EMAIL` | Inbox that receives inquiries |

## Project structure
```
app/                 # App Router pages, layout, global styles
  page.js            #   Home (/)
  about/ work/ contact/
components/
  layout/            #   Header (nav + drawer), Footer, ConditionalFooter
  sections/          #   HomeScreen (layered cinematic single-viewport home)
  ui/                #   Button, Container, Logo, MediaCard, Modal, HeroVideo, ...
public/              # hero-poster.svg + drop-in path for hero-showreel.mp4
data/                # site config + home content + placeholder project data
docs/                # plan, status, decisions, screenshot analysis, design system
Screenshots/         # reference designs
```

## Documentation
- [docs/project-plan.md](docs/project-plan.md) — objective, pages, approach
- [docs/project-status.md](docs/project-status.md) — live progress tracker
- [docs/decisions.md](docs/decisions.md) — technical/design decisions
- [docs/screenshot-analysis.md](docs/screenshot-analysis.md) — per-screen breakdown
- [docs/design-system.md](docs/design-system.md) — tokens & components
- [docs/ux-flow.md](docs/ux-flow.md) — navigation & form flows

## Roadmap
- [x] **Phase 1** — Foundation: scaffold, design tokens, layout shell, docs, repo
- [x] **Phase 2** — Home page: hero + showreel modal, featured work, quote band
- [ ] **Phase 3** — About page
- [ ] **Phase 4** — Portfolio page
- [ ] **Phase 5** — Contact page + backend (Resend, validation, anti-spam)
- [ ] **Phase 6** — Responsive/a11y/security QA, Vercel + Cloudflare, final report

## Changelog
- **Phase 2 (cinematic)** — Rebuilt the home as a 7-layer, single-screen cinematic
  composition: full-bleed hero `<video>` (`HeroVideo`, autoplay/muted/loop + poster +
  reduced-motion fallback, drop-in `public/hero-showreel.mp4`), atmospheric blooms + vignette,
  SVG film grain, oversized broken-grid Playfair headline with a translucent "O" watermark,
  borderless featured cards overlapping the hero, mouse parallax, and premium `MediaCard`
  hovers. Thinned the nav. Still strict no-scroll at ≥1024px; motion is reduced-motion safe.
- **Phase 2 (space fill)** — Redesigned the home hero into two columns (text + a tall
  showreel media frame that opens the reel modal), widened the home canvas
  (`--container-wide` 1500px, new `wide` Container variant), and scaled up the display
  type — eliminating the wide-screen negative space while staying one non-scrolling screen.
- **Phase 2 (redesign)** — Reworked the home page into a single, non-scrolling `100dvh`
  "poster" (`HomeScreen`): hero (showreel modal + View My Work + location/coords), a dock
  with a compact 3-card Featured Work strip and an "Every Frame Has a Purpose" panel, and a
  slim footer bar. Global footer suppressed on `/` via `ConditionalFooter`; added a compact
  `MediaCard` variant. Locked to one screen at ≥1024px/landscape; stacks on small portrait.
- **Phase 2** — Home page: hero (headline, showreel modal, stat strip, location),
  Featured Work grid with accessible preview modal, and quote/CTA band. Added `MediaCard`,
  `Modal`, `VideoPlaceholder`, `PreviewBody`. Navigation set to About · Work · Contact.
- **Phase 1** — Next.js foundation: design system, Header/Footer, shared UI, routing
  stubs, docs, and clean README.
