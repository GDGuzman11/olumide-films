import Container from "@/components/ui/Container";
import ValueCard from "@/components/ui/ValueCard";
import { approach } from "@/data/about";
import styles from "./Approach.module.css";

export default function Approach() {
  return (
    <section className={styles.section} aria-labelledby="approach-title">
      <Container wide>
        <div className={styles.head}>
          <div>
            <p className="eyebrow">{approach.eyebrow}</p>
            <h2 id="approach-title" className={styles.title}>
              {approach.title}
            </h2>
          </div>
          <p className={styles.intro}>{approach.intro}</p>
        </div>

        <ul className={styles.grid}>
          {approach.values.map((v, i) => (
            <ValueCard key={v.title} index={i + 1} title={v.title} copy={v.copy} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
