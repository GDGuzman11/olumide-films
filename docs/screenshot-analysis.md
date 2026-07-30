# Screenshot Analysis — OLUMIDE FILMS

Source: `Screenshots/` — Main Page, About Me, Portfolio, Contact Page (all desktop).
Evidence = visible in screenshot. Inference = reasonable UX/design assumption.

## Global shell (all pages)
- **Header (sticky):** left monogram + wordmark `OLUMIDE / FILMS`; center nav
  `WORK · ABOUT · SERVICES · JOURNAL · CONTACT` (uppercase, tracked); right amber
  outline pill CTA `BOOK A PROJECT →`. Transparent over hero, subtle dark bg on scroll (inference).
- **Footer:** monogram + "Based in Calgary, Alberta / Available Worldwide"; right-aligned
  socials `INSTAGRAM · VIMEO · YOUTUBE · EMAIL`; bottom bar with copyright and amber
  tagline `CREATE. INSPIRE. LEAVE A LEGACY.`
- **Palette:** near-black background, warm amber/gold accent, off-white text, muted grey
  sub-text. Heavy use of large dark cinematic photography (filmmaker silhouette + city/mountains).

## 1. Main Page (Home)
- **Hero:** full-bleed dark photo of a filmmaker holding a camera against a Calgary skyline.
  Eyebrow `CINEMATOGRAPHY & VISUAL STORYTELLING`. Huge uppercase serif headline
  `STORIES THAT MOVE. IMPACT THAT LASTS.` (last line amber). Short paragraph, `WATCH SHOWREEL`
  ghost button with play icon. Right column: vertical stat rows (numbers 01/02/03… inference:
  years/projects counters). Location chip `CALGARY, AB`.
- **Featured Work:** eyebrow `FEATURED WORK` + `VIEW ALL WORK →`. Three video cards in a row,
  each ≈ equal width with centered play button, category eyebrow, title
  (`ECHOES OF YOU`, `BEYOND HORIZONS`, `THE MOMENT`). Card media ≈ 4:3–16:9.
- **Quote/CTA band:** left side small label + serif line `IT'S YOUR STORY, told beautifully`
  over a night skyline image; supporting copy on the right (inference: CTA into contact).
- **Proportions:** hero text column ≈ 55% width, media/stat area ≈ 35%, remainder gap.

## 2. About Me
- **Intro:** eyebrow `ABOUT ME`; headline `I'M OLUMIDE. I TELL STORIES THAT MOVE PEOPLE.`
  (accent on second sentence). Bio paragraph, `BOOK A PROJECT` button, location chip.
  Right: portrait/behind-the-camera photo.
- **My Approach:** eyebrow `MY APPROACH` + `STORY FIRST. ALWAYS.` Four value cards:
  `AUTHENTIC · CINEMATIC · COLLABORATIVE · IMPACTFUL`, each with a short line of copy;
  supporting intro paragraph to the left of the card row.
- **Personal statement:** image of camera gear on the left; right column `FROM THE FIRST
  FRAME TO THE LASTING IMPACT.` paragraph + handwritten-style signature `Olumide`.

## 3. Portfolio
- **Hero:** eyebrow `OUR WORK`; headline `STORIES THAT MOVE.`; supporting paragraph;
  `START A PROJECT →` button over the filmmaker hero image.
- **Filter bar:** tabs `ALL WORK · BRAND FILMS · WEDDINGS · DOCUMENTARIES · COMMERCIALS ·
  MUSIC VIDEOS`, active tab amber-underlined; right-aligned `FILTER ≡`.
- **Grid:** 3×3 project cards (9 shown), each with centered play button, category eyebrow,
  title, `VIEW PROJECT →`. Consistent gap and internal padding. `LOAD MORE PROJECTS ⌄` below.

## 4. Contact Page
- **Hero:** eyebrow `LET'S CREATE SOMETHING UNFORGETTABLE`; headline `BOOK A PROJECT.`;
  paragraph; location chip `BASED IN CALGARY, AB`.
- **Form (`PROJECT INQUIRY`):** two-column layout.
  - Fields: Full Name, Email Address (row of two); Project Type (select);
    Project Details (textarea); Budget Range (select) + Preferred Timeline (select) (row of two);
    How did you hear about us (select); amber `SEND INQUIRY →` submit.
  - **Sidebar `LET'S CONNECT`:** email, phone, location, response-time note (`Within 48 hours`),
    social icon row.
- **States (inference):** inline validation, disabled/loading submit, success + error messages.

## Responsive inference (mobile / tablet)
- Nav collapses to a hamburger → full-height drawer.
- Multi-column rows stack: hero text over media; 3-up cards → 1-up; form two-column → single.
- Filter tabs scroll horizontally or wrap.
- Touch targets ≥ 44px; maintain contrast and spacing rhythm.
