"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import MediaCard from "@/components/ui/MediaCard";
import Modal from "@/components/ui/Modal";
import PreviewBody from "@/components/ui/PreviewBody";
import HeroVideo from "@/components/ui/HeroVideo";
import { hero, purpose } from "@/data/home";
import { site, socials } from "@/data/site";
import { featuredProjects } from "@/data/projects";
import styles from "./HomeScreen.module.css";

export default function HomeScreen() {
  const [reelOpen, setReelOpen] = useState(false);
  const [active, setActive] = useState(null);
  const screenRef = useRef(null);

  // Subtle mouse parallax — writes CSS vars, no re-render. Off for reduced-motion / touch.
  useEffect(() => {
    const el = screenRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    let raf = 0;
    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        el.style.setProperty("--mx", nx.toFixed(3));
        el.style.setProperty("--my", ny.toFixed(3));
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Landing is a single, non-scrolling screen on large viewports.
  // Scoped to the home route: the class is removed when navigating away.
  useEffect(() => {
    document.body.classList.add("home-locked");
    return () => document.body.classList.remove("home-locked");
  }, []);

  return (
    <section ref={screenRef} className={styles.screen} aria-label="OLUMIDE FILMS home">
      {/* L2 — cinematic video (with atmospheric fallback) */}
      <HeroVideo src="/hero-showreel.mp4" poster="/hero-poster.svg" hue={26} />

      {/* L3 — atmosphere */}
      <div className={styles.bloom} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />
      {/* Oversized translucent lens "O" watermark */}
      <div className={styles.watermark} aria-hidden="true">
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <path d="M50 6 C28 32 28 68 50 94 C72 68 72 32 50 6 Z" fill="currentColor" opacity="0.35" />
        </svg>
      </div>
      {/* L4 — film grain */}
      <div className={styles.grain} aria-hidden="true" />

      {/* L5/L6 — hero typography + UI */}
      <Container wide className={styles.content}>
        <div className={styles.heroText}>
          <p className={`eyebrow ${styles.eyebrow}`}>{hero.eyebrow}</p>
          <h1 className={styles.title}>
            {hero.headline.map((line, i) => (
              <span
                key={i}
                className={`${styles.line} ${line.accent ? styles.accent : ""}`}
              >
                {line.text}
              </span>
            ))}
          </h1>
          <p className={styles.lead}>{hero.lead}</p>

          <div className={styles.actions}>
            <button type="button" className={styles.reel} onClick={() => setReelOpen(true)}>
              <span className={styles.reelIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="15" height="15">
                  <path d="M8 5v14l11-7z" fill="currentColor" />
                </svg>
              </span>
              Watch Showreel
            </button>
            <Button href="/work" variant="outline" arrow>
              View My Work
            </Button>
          </div>

          <p className={styles.location}>
            <span className={styles.dot} aria-hidden="true">
              &#9679;
            </span>
            {site.locationShort}
            <span className={styles.coords}>{site.coordinates}</span>
          </p>
        </div>
      </Container>

      {/* Featured work — floats over the bottom of the hero (one continuous composition) */}
      <div className={styles.dock}>
        <Container wide className={styles.dockInner}>
          <div className={styles.dockHead}>
            <p className={`eyebrow ${styles.eyebrow}`}>Featured Work</p>
            <div className={styles.purposeInline}>
              <span className={styles.purposeText}>{purpose.title}</span>
              <Link href={purpose.cta.href} className={styles.viewAll}>
                {purpose.cta.label} <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className={styles.cards}>
            {featuredProjects.map((project) => (
              <MediaCard key={project.slug} project={project} onOpen={setActive} compact />
            ))}
          </div>
        </Container>
      </div>

      {/* Slim footer pinned to the bottom edge */}
      <div className={styles.footerBar}>
        <Container wide className={styles.footerInner}>
          <Logo />
          <p className={styles.based}>
            {site.location} · {site.availability}
          </p>
          <nav className={styles.socials} aria-label="Social links">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className={styles.social}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {s.label}
              </a>
            ))}
          </nav>
          <p className={styles.tag}>{site.footerTagline}</p>
        </Container>
      </div>

      {/* Showreel modal */}
      <Modal open={reelOpen} onClose={() => setReelOpen(false)} title="OLUMIDE FILMS showreel">
        <PreviewBody
          eyebrow="Showreel"
          title="A Year in Frames"
          copy="A selection of recent work across brand films, weddings, and documentaries. Real footage will be embedded here soon."
          hue={28}
        />
      </Modal>

      {/* Project preview modal */}
      <Modal open={!!active} onClose={() => setActive(null)} title={active?.title}>
        {active ? (
          <PreviewBody
            eyebrow={active.categoryLabel}
            title={active.title}
            copy={active.excerpt}
            hue={active.hue}
          />
        ) : null}
      </Modal>
    </section>
  );
}
