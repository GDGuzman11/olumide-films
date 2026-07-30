# UX Flow — OLUMIDE FILMS

## Primary conversion path
Home hero → Featured Work / Portfolio → About (trust) → Contact form → submission confirmed.

## Navigation
- Persistent sticky header on every page; `BOOK A PROJECT` CTA always visible.
- Desktop: horizontal nav, active route amber-underlined.
- Mobile (< 960px): hamburger toggles a right-side drawer.
  - Focus: Escape closes; overlay click closes; body scroll locked while open;
    `aria-expanded` + `aria-controls` on the toggle; drawer `hidden` when closed.

## Page-level actions
- **Home** — primary: `WATCH SHOWREEL` (modal/video, Phase 2) + `BOOK A PROJECT`.
- **About** — primary: `BOOK A PROJECT`.
- **Portfolio** — primary: filter tabs (client-side) + `VIEW PROJECT`; secondary: `LOAD MORE`.
- **Contact** — primary: submit `PROJECT INQUIRY`.

## Form flow (Contact, Phase 5)
1. User fills required fields (name, email, project type, details).
2. Client-side validation gives inline feedback; submit disabled while sending.
3. On submit → POST `/api/contact`; server validates + sends via Resend.
4. Success message shown **only** after server confirms; form resets.
5. Errors surface a clear, non-technical message; user can retry.
6. Honeypot + rate limiting silently guard against spam.

## States to implement
- Loading (submit, showreel), success, error, empty (filtered work), and focus-visible
  everywhere. Reduced-motion honored globally.
