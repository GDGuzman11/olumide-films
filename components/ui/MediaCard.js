import VideoPlaceholder from "./VideoPlaceholder";
import styles from "./MediaCard.module.css";

/**
 * Project media card: gradient placeholder media, centered play control,
 * category eyebrow, title, and "View Project". `onOpen` receives the project.
 */
export default function MediaCard({ project, onOpen, compact = false }) {
  const { title, categoryLabel, hue } = project;

  return (
    <article className={`${styles.card} ${compact ? styles.compact : ""}`}>
      <div className={styles.media}>
        <VideoPlaceholder hue={hue} />
        <button
          type="button"
          className={styles.play}
          onClick={() => onOpen(project)}
          aria-label={`Play preview of ${title}`}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
        </button>
      </div>

      <div className={styles.meta}>
        <p className={`eyebrow ${styles.category}`}>{categoryLabel}</p>
        <h3 className={styles.title}>{title}</h3>
        {!compact && (
          <button type="button" className={styles.view} onClick={() => onOpen(project)}>
            View Project <span aria-hidden="true">&rarr;</span>
          </button>
        )}
      </div>
    </article>
  );
}
