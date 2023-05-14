import React from "react";
import styles from "./title.module.scss";

export default function Title({className, title, text}) {
  return (
    <div className={`${styles.title} ${className}`}>
      <h2>{title}</h2>
      <p>
        <span className={styles.line}></span>
        <span className={styles.text}>
          {text}
        </span>
        <span className={styles.line}></span>
      </p>
    </div>
  );
}
