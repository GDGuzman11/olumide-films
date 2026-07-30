import VideoPlaceholder from "./VideoPlaceholder";
import styles from "./MediaCard.module.css";

/**
 * Cinematic project card: borderless media with overlaid meta.
 * Hover = slow media zoom, gold ring fade-in, category fade-in, title rise.
 * `onOpen` receives the project (opens the preview modal). Reduced-motion safe.
 */
export default function MediaCard({ project, onOpen, compact = false }) {
  const { title, categoryLabel, hue } = project;

  return (
    <article className={`${styles.card} ${compact ? styles.compact : ""}`}>
      <div className={styles.media}>
        <div className={styles.fill}>
          <VideoPlaceholder hue={hue} />
        </div>
        <div className={styles.scrim} aria-hidden="true" />

        <button
          type="button"
          className={styles.play}
          onClick={() => onOpen(project)}
          aria-label={`Play preview of ${title}`}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
        </button>

        <div className={styles.meta}>
          <p className={`eyebrow ${styles.category}`}>{categoryLabel}</p>
          <h3 className={styles.title}>{title}</h3>
          {!compact && (
            <span className={styles.view}>
              View Project <span aria-hidden="true">&rarr;</span>
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
