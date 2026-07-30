# Project Plan — OLUMIDE FILMS

## Objective
Build a production-ready, responsive, accessible marketing/portfolio website for
**OLUMIDE FILMS**, a cinematic film & visual storytelling studio based in Calgary, AB.
The site must closely match the four reference screenshots while being maintainable and
reusable for future projects.

## Target users
- Prospective clients (brands, couples, agencies, artists) evaluating a filmmaker.
- Primary intent: assess the work, trust the storyteller, and book a project.

## Primary user journey
Land on Home → feel the tone via hero + featured work → explore Portfolio / About →
convert on the Contact ("Book a Project") inquiry form.

## Primary conversion goal
Completed project-inquiry submission via the Contact form (Resend email).

## Pages & routes
| Route | Page | Phase |
| --- | --- | --- |
| `/` | Home | 2 |
| `/about` | About | 3 |
| `/work` | Portfolio | 4 |
| `/contact` | Contact + inquiry form | 5 |
| `/api/contact` | Contact form handler (Resend) | 5 |

Primary navigation is **About · Work · Contact** (in that order). `Services` and `Journal`
were removed — not in the screenshots and out of scope (see decisions.md D7).

## Required features
- Sticky responsive header with accessible mobile drawer nav.
- Home: hero, showreel + book CTAs, stat strip, featured work cards, quote/CTA band.
- About: intro, "My Approach" value cards, personal statement + signature.
- Portfolio: category filter tabs, project grid, load-more, project media cards.
- Contact: multi-field inquiry form with server validation, honeypot, rate limiting,
  Resend delivery, and real loading/success/error states.
- Footer with socials and brand tagline.
- Accessibility (WCAG 2.2 AA target), security headers, Vercel deployment prep.

## Technical approach
- **Framework:** Next.js 14 (App Router), React 18, JavaScript.
- **Styling:** CSS Modules + global design tokens (CSS custom properties). No CSS framework.
- **Fonts:** `next/font/google` — Playfair Display (display) + Inter (body).
- **Backend:** Next.js Route Handler `app/api/contact/route.js` + Resend + zod validation.
- **Hosting:** Vercel. DNS/security via Cloudflare (documented in Phase 6).
- **Data:** placeholder project data in `data/projects.js`; site config in `data/site.js`.

## Agent responsibilities
- **Product Manager** — plan, coordinate, verify, maintain docs, completion gate.
- **Screenshot/UX/UI Designer** — screenshot analysis, design system, UX flows.
- **Frontend Engineer** — components, pages, responsive + accessible UI.
- **Backend Engineer** — contact API, validation, Resend, anti-spam.
- **Security/DevOps Engineer** — secrets, headers, Vercel/Cloudflare, deployment.

## Implementation phases (approval gate after each)
1. **Foundation** — scaffold, tokens, layout shell, docs, README, GitHub repo. ← current
2. **Home page**
3. **About page**
4. **Portfolio page**
5. **Contact page + backend (Resend)**
6. **QA, security, deployment prep, final report**

## Acceptance criteria
- Each page closely matches its screenshot across the target breakpoints.
- Navigation, interactions, and the contact form work end-to-end (no fake success).
- `npm run lint` and `npm run build` pass; browser console clean.
- Accessibility and security reviewed; no critical/high issues remain.
- README stays current; final git diff contains only intended changes.
