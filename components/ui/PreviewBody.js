import VideoPlaceholder from "./VideoPlaceholder";
import styles from "./PreviewBody.module.css";

// Modal body used for the showreel and per-project previews.
// A 16:9 placeholder stands in until real footage is embedded.
export default function PreviewBody({ eyebrow, title, copy, hue = 30 }) {
  return (
    <div className={styles.body}>
      <div className={styles.frame}>
        <VideoPlaceholder hue={hue} label="Footage coming soon" />
        <span className={styles.playHint} aria-hidden="true">
          <svg viewBox="0 0 24 24" width="26" height="26">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
        </span>
      </div>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 id="preview-title" className={styles.title}>
        {title}
      </h2>
      {copy ? <p className={styles.copy}>{copy}</p> : null}
    </div>
  );
}
