import styles from "./VideoPlaceholder.module.css";

/**
 * Placeholder cinematic "media" surface (gradient driven by `hue`) shown until
 * real footage/thumbnails are added. Purely presentational.
 */
export default function VideoPlaceholder({ hue = 30, label, className = "" }) {
  const style = {
    "--h": hue,
  };
  return (
    <div className={`${styles.media} ${className}`} style={style} aria-hidden="true">
      <span className={styles.grain} />
      {label ? <span className={styles.label}>{label}</span> : null}
    </div>
  );
}
