# Design System — OLUMIDE FILMS

Tokens live in `app/globals.css` (`:root`). Components use CSS Modules that reference them.

## Color
| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#0b0b0c` | Page background |
| `--bg-elev` | `#141416` | Cards, drawer, footer surfaces |
| `--bg-elev-2` | `#1c1c1f` | Inputs, nested surfaces |
| `--line` / `--line-strong` | white @ 10% / 18% | Borders, dividers |
| `--text` | `#f4f2ee` | Primary text |
| `--text-muted` | `#a7a29a` | Secondary text |
| `--text-dim` | `#6f6a63` | Tertiary / legal |
| `--accent` | `#c8892e` | Primary amber (buttons, active) |
| `--accent-bright` | `#e0a45b` | Hover, highlights, accent headline |
| `--accent-soft` | amber @ 14% | Accent fills/backgrounds |

Contrast: off-white text on near-black exceeds WCAG AA; amber used for large text/UI accents.

## Typography
- **Display** (`--font-display`, Playfair Display): h1–h4, uppercase hero headlines,
  `line-height: 1.05`, weight 700–900, slight negative tracking.
- **Body** (`--font-body`, Inter): paragraphs, UI, labels.
- **Eyebrow** (`.eyebrow`): 0.72rem, 600, `letter-spacing: 0.22em`, uppercase, amber.
- **Hero scale:** `clamp(2.75rem, 9vw, 6rem)` uppercase.

## Spacing scale
`--space-1..10` = 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 px. Use tokens, not raw px.

## Radius
`--radius-sm` 6 · `--radius` 10 · `--radius-lg` 16 · `--radius-pill` 999 (buttons/chips).

## Elevation & motion
- `--shadow`: soft large drop for elevated media.
- `--ease` `cubic-bezier(0.22,1,0.36,1)`, `--dur` 0.35s. All motion respects
  `prefers-reduced-motion`.

## Layout
- `--container` 1200px, gutters via `Container` (24px mobile → 48px ≥768px).
- `--header-h` 76px sticky header.

## Breakpoints
Design at: 320, 375, 390, 430, 768, 1024, 1280, 1440, 1920.
Key shifts: nav → drawer < 960px; multi-column rows stack < 768px.

## Components (foundation)
- **Button** — `primary` (amber), `outline`, `ghost`; optional trailing arrow; renders
  `<Link>` or `<button>`; 44px min height.
- **Container** — max-width wrapper with responsive gutters.
- **Logo** — SVG lens monogram + `OLUMIDE / FILMS` wordmark.
- **SectionEyebrow** — uppercase tracked amber label.
- **Header** — sticky, scroll-aware, desktop nav + accessible mobile drawer (Escape to close,
  scroll lock, `aria-expanded`/`aria-controls`).
- **Footer** — brand, location, socials, tagline, legal bar.

Later phases add: MediaCard (play button), ValueCard, FilterTabs, StatStrip, Form fields.
