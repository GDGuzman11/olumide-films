import Logo from "@/components/ui/Logo";
import { site, socials } from "@/data/site";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo />
          <p className={styles.location}>
            Based in {site.locationShort}
            <br />
            {site.availability}
          </p>
        </div>

        <nav className={styles.socials} aria-label="Social links">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className={styles.social}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>

      <div className={styles.bar}>
        <p>
          &copy; {year} {site.name}. All rights reserved.
        </p>
        <p className={styles.tagline}>{site.footerTagline}</p>
      </div>
    </footer>
  );
}
