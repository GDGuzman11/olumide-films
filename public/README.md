# public/ assets

## Hero showreel video (drop-in)
The home hero (`components/ui/HeroVideo.js`) loads **`/hero-showreel.mp4`** if present.
Until you add it, the hero shows an atmospheric gradient "cinemagraph" + `hero-poster.svg`.

To go live with real footage, drop a file here named exactly:

```
public/hero-showreel.mp4
```

Recommended encode:
- **Aspect:** ~21:9 landscape (e.g. 2560×1080), full-bleed.
- **Length:** 8–15s seamless loop.
- **Look:** slow-motion, cinematic color grade, muted (audio is ignored/stripped).
- **Size:** keep under ~5 MB (H.264/H.265, ~4–6 Mbps) for fast LCP; it autoplays muted.
- Optional `hero-showreel.webm` sibling can be added as an extra `<source>` for smaller size.

No code change is needed — it will autoplay (muted, looped) for users who allow motion,
and fall back to the poster for `prefers-reduced-motion`.

## hero-poster.svg
Static poster shown behind the `<video>` before it can play (and the reduced-motion still).
Replace with a graded still frame from the showreel when available.
