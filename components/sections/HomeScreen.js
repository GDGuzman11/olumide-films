"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import MediaCard from "@/components/ui/MediaCard";
import Modal from "@/components/ui/Modal";
import PreviewBody from "@/components/ui/PreviewBody";
import { hero, purpose } from "@/data/home";
import { site, socials } from "@/data/site";
import { featuredProjects } from "@/data/projects";
import styles from "./HomeScreen.module.css";

// Single-viewport "poster" home: hero + dock (featured work + purpose) + slim footer.
export default function HomeScreen() {
  const [reelOpen, setReelOpen] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <section className={styles.screen} aria-label="OLUMIDE FILMS home">
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <Container className={styles.heroInner}>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className={styles.title}>
            {hero.headline[0]} {hero.headline[1]}
            <br />
            <span className={styles.accent}>{hero.headline[2]}</span>
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
        </Container>
      </div>

      {/* Dock: featured work + purpose panel */}
      <div className={styles.dock}>
        <Container className={styles.dockInner}>
          <div className={styles.work}>
            <div className={styles.workHead}>
              <p className="eyebrow">Featured Work</p>
              <Link href="/work" className={styles.viewAll}>
                View All <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <div className={styles.cards}>
              {featuredProjects.map((project) => (
                <MediaCard key={project.slug} project={project} onOpen={setActive} compact />
              ))}
            </div>
          </div>

          <aside className={styles.purpose}>
            <p className="eyebrow">{purpose.eyebrow}</p>
            <h2 className={styles.purposeTitle}>{purpose.title}</h2>
            <p className={styles.purposeCopy}>{purpose.copy}</p>
            <Button href={purpose.cta.href} variant="outline" arrow>
              {purpose.cta.label}
            </Button>
          </aside>
        </Container>

        {/* Slim footer bar */}
        <div className={styles.footerBar}>
          <Container className={styles.footerInner}>
            <Logo />
            <p className={styles.based}>
              Based in {site.location} · {site.availability}
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
