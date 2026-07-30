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
  layout/            #   Header (nav + mobile drawer), Footer
  sections/          #   Hero, FeaturedWork, Services, QuoteBand
  ui/                #   Button, Container, Logo, MediaCard, Modal, PreviewBody, ...
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
- [x] **Phase 2** — Home page: hero + showreel modal, featured work, services, quote band
- [ ] **Phase 3** — About page
- [ ] **Phase 4** — Portfolio page
- [ ] **Phase 5** — Contact page + backend (Resend, validation, anti-spam)
- [ ] **Phase 6** — Responsive/a11y/security QA, Vercel + Cloudflare, final report

## Changelog
- **Phase 2** — Home page: hero (headline, showreel modal, stat strip, location),
  Featured Work grid with accessible preview modal, Services strip (`#services`), and
  quote/CTA band. Added `MediaCard`, `Modal`, `VideoPlaceholder`, `PreviewBody`.
- **Phase 1** — Next.js foundation: design system, Header/Footer, shared UI, routing
  stubs, docs, and clean README.
