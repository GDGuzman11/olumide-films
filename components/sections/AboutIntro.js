import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import VideoPlaceholder from "@/components/ui/VideoPlaceholder";
import { intro } from "@/data/about";
import { site, cta } from "@/data/site";
import styles from "./AboutIntro.module.css";

export default function AboutIntro() {
  return (
    <section className={styles.section} aria-labelledby="about-title">
      <Container wide className={styles.inner}>
        <div className={styles.text}>
          <p className="eyebrow">{intro.eyebrow}</p>
          <h1 id="about-title" className={styles.title}>
            {intro.headline[0]}
            <br />
            <span className={styles.accent}>{intro.headline[1]}</span>
          </h1>
          {intro.bio.map((p, i) => (
            <p key={i} className={styles.bio}>
              {p}
            </p>
          ))}
          <div className={styles.actions}>
            <Button href={cta.href} arrow>
              {cta.label}
            </Button>
            <p className={styles.location}>
              <span className={styles.dot} aria-hidden="true">
                &#9679;
              </span>
              {site.locationShort}
            </p>
          </div>
        </div>

        <div className={styles.portrait}>
          <VideoPlaceholder hue={intro.portraitHue} label="Behind the lens" />
        </div>
      </Container>
    </section>
  );
}
