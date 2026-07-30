"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import PreviewBody from "@/components/ui/PreviewBody";
import { hero, stats } from "@/data/home";
import { site, cta } from "@/data/site";
import styles from "./Hero.module.css";

export default function Hero() {
  const [reelOpen, setReelOpen] = useState(false);

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.bg} aria-hidden="true">
        <span className={styles.figure} />
      </div>

      <Container className={styles.inner}>
        <div className={styles.content}>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title" className={styles.title}>
            {hero.headline[0]} {hero.headline[1]}
            <br />
            <span className={styles.accent}>{hero.headline[2]}</span>
          </h1>
          <p className={styles.lead}>{hero.lead}</p>

          <div className={styles.actions}>
            <Button href={cta.href} arrow>
              {cta.label}
            </Button>
            <button
              type="button"
              className={styles.reel}
              onClick={() => setReelOpen(true)}
            >
              <span className={styles.reelIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path d="M8 5v14l11-7z" fill="currentColor" />
                </svg>
              </span>
              Watch Showreel
            </button>
          </div>
        </div>

        <aside className={styles.side}>
          <dl className={styles.stats}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <dt className={styles.statValue}>{s.value}</dt>
                <dd className={styles.statLabel}>{s.label}</dd>
              </div>
            ))}
          </dl>
          <p className={styles.location}>
            <span className={styles.pin} aria-hidden="true">
              &#9679;
            </span>
            {site.locationShort}
          </p>
        </aside>
      </Container>

      <Modal open={reelOpen} onClose={() => setReelOpen(false)} title="OLUMIDE FILMS showreel">
        <PreviewBody
          eyebrow="Showreel"
          title="A Year in Frames"
          copy="A selection of recent work across brand films, weddings, and documentaries. Real footage will be embedded here soon."
          hue={28}
        />
      </Modal>
    </section>
  );
}
