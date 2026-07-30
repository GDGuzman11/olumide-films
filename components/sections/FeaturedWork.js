"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import MediaCard from "@/components/ui/MediaCard";
import Modal from "@/components/ui/Modal";
import PreviewBody from "@/components/ui/PreviewBody";
import { featuredProjects } from "@/data/projects";
import styles from "./FeaturedWork.module.css";

export default function FeaturedWork() {
  const [active, setActive] = useState(null);

  return (
    <section className={styles.section} aria-labelledby="featured-title">
      <Container>
        <div className={styles.head}>
          <div>
            <p className="eyebrow">Featured Work</p>
            <h2 id="featured-title" className={styles.title}>
              Selected Films
            </h2>
          </div>
          <a href="/work" className={styles.viewAll}>
            View All Work <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <div className={styles.grid}>
          {featuredProjects.map((project) => (
            <MediaCard key={project.slug} project={project} onOpen={setActive} />
          ))}
        </div>
      </Container>

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
