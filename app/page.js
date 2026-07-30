import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { site } from "@/data/site";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <Container as="section" className={styles.placeholder}>
      <SectionEyebrow>Cinematic Film &amp; Visual Storytelling</SectionEyebrow>
      <h1 className={styles.title}>
        Stories That Move.
        <br />
        <span className={styles.accent}>Impact That Lasts.</span>
      </h1>
      <p className={styles.lead}>{site.description}</p>
      <div className={styles.actions}>
        <Button href="/contact" arrow>
          Book a Project
        </Button>
        <Button href="/work" variant="outline">
          View Work
        </Button>
      </div>
      <p className={styles.note}>
        Foundation ready — full homepage lands in Phase 2.
      </p>
    </Container>
  );
}
