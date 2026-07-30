import Link from "next/link";
import { site } from "@/data/site";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Link href="/" className={styles.logo} aria-label={`${site.name} — home`}>
      <span className={styles.mark} aria-hidden="true">
        {/* Simple film-lens style monogram */}
        <svg viewBox="0 0 40 40" width="34" height="34" role="presentation">
          <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M20 3 C11 14 11 26 20 37 C29 26 29 14 20 3 Z" fill="currentColor" opacity="0.85" />
        </svg>
      </span>
      <span className={styles.wordmark}>
        <span className={styles.name}>{site.brandMark}</span>
        <span className={styles.sub}>{site.brandSub}</span>
      </span>
    </Link>
  );
}
