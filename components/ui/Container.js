import styles from "./Container.module.css";

export default function Container({ children, className = "", as: Tag = "div", wide = false }) {
  return (
    <Tag className={`${styles.container} ${wide ? styles.wide : ""} ${className}`}>{children}</Tag>
  );
}
