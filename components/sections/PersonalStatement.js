import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import VideoPlaceholder from "@/components/ui/VideoPlaceholder";
import { statement } from "@/data/about";
import { cta } from "@/data/site";
import styles from "./PersonalStatement.module.css";

export default function PersonalStatement() {
  return (
    <section className={styles.section} aria-labelledby="statement-title">
      <Container wide className={styles.inner}>
        <div className={styles.media}>
          <VideoPlaceholder hue={statement.gearHue} label="On set" />
        </div>

        <div className={styles.text}>
          <p className="eyebrow">{statement.eyebrow}</p>
          <h2 id="statement-title" className={styles.title}>
            {statement.title}
          </h2>
          {statement.copy.map((p, i) => (
            <p key={i} className={styles.copy}>
              {p}
            </p>
          ))}
          <p className={styles.signature}>{statement.signature}</p>
          <Button href={cta.href} variant="outline" arrow>
            {cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
