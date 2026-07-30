import Logo from "@/components/ui/Logo";
import Container from "@/components/ui/Container";
import { site, socials } from "@/data/site";
import styles from "./MiniFooter.module.css";

// Slim footer bar used at the bottom of single-screen ("non-scroll") routes.
export default function MiniFooter() {
  return (
    <div className={styles.bar}>
      <Container wide className={styles.inner}>
        <Logo />
        <p className={styles.based}>
          {site.location} · {site.availability}
        </p>
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
        <p className={styles.tag}>{site.footerTagline}</p>
      </Container>
    </div>
  );
}
