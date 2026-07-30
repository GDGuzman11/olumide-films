import styles from "./ValueCard.module.css";

// Numbered value card used in the About "My Approach" grid.
export default function ValueCard({ index, title, copy }) {
  return (
    <li className={styles.card}>
      <span className={styles.num} aria-hidden="true">
        {String(index).padStart(2, "0")}
      </span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.copy}>{copy}</p>
    </li>
  );
}
