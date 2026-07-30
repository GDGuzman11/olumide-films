import Container from "@/components/ui/Container";
import { services } from "@/data/home";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="services" className={styles.section} aria-labelledby="services-title">
      <Container>
        <div className={styles.head}>
          <p className="eyebrow">What I Do</p>
          <h2 id="services-title" className={styles.title}>
            Story First. Always.
          </h2>
        </div>

        <ul className={styles.grid}>
          {services.map((s, i) => (
            <li key={s.title} className={styles.item}>
              <span className={styles.num} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.itemTitle}>{s.title}</h3>
              <p className={styles.itemCopy}>{s.copy}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
