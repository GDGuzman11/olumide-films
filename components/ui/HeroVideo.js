"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./HeroVideo.module.css";

/**
 * Full-bleed cinematic hero backdrop.
 *
 * Layers an always-present atmospheric gradient ("cinemagraph") behind an optional
 * autoplaying <video>. The video is only mounted client-side when motion is allowed,
 * so `prefers-reduced-motion` users (and SSR) get the calm gradient/poster instead.
 * When `src` (e.g. /hero-showreel.mp4) is present it fades in once it can play; if the
 * file is absent the gradient simply remains — a clean drop-in path for real footage.
 */
export default function HeroVideo({ src, poster, hue = 26 }) {
  const [motionOk, setMotionOk] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mq.matches) setMotionOk(true);
    const onChange = (e) => setMotionOk(!e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !motionOk) return;
    const onReady = () => {
      setLoaded(true);
      v.play().catch(() => {});
    };
    if (v.readyState >= 3) onReady();
    else v.addEventListener("canplay", onReady, { once: true });
    return () => v.removeEventListener("canplay", onReady);
  }, [motionOk]);

  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.fallback} style={{ "--h": hue }}>
        <span className={styles.drift} />
      </div>

      {motionOk && src ? (
        <video
          ref={videoRef}
          className={`${styles.video} ${loaded ? styles.videoLoaded : ""}`}
          poster={poster}
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
