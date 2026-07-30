import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import styles from "./ComingSoon.module.css";

// Temporary route placeholder used until each page is built in later phases.
export default function ComingSoon({ eyebrow, title, phase }) {
  return (
    <Container as="section" className={styles.wrap}>
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.note}>This page is scheduled for {phase}.</p>
      <Button href="/" variant="outline" arrow>
        Back Home
      </Button>
    </Container>
  );
}
