import Link from "next/link";
import styles from "./Button.module.css";

/**
 * Button / link with shared visual styles.
 * Renders <Link> when `href` is set, otherwise a real <button>.
 * variant: "primary" | "outline" | "ghost"
 */
export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  arrow = false,
  ...props
}) {
  const cls = `${styles.btn} ${styles[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span className={styles.arrow} aria-hidden="true">
          &rarr;
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cls} {...props}>
      {content}
    </button>
  );
}
