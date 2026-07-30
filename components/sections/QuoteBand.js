import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { quote } from "@/data/home";
import { cta } from "@/data/site";
import styles from "./QuoteBand.module.css";

export default function QuoteBand() {
  return (
    <section className={styles.band} aria-labelledby="quote-title">
      <div className={styles.bg} aria-hidden="true" />
      <Container className={styles.inner}>
        <div className={styles.text}>
          <p className="eyebrow">{quote.eyebrow}</p>
          <p id="quote-title" className={styles.line}>
            {quote.line[0]}
            <br />
            <span className={styles.accent}>{quote.line[1]}</span>
          </p>
        </div>
        <div className={styles.aside}>
          <p className={styles.copy}>{quote.copy}</p>
          <Button href={cta.href} arrow>
            {cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
