import React from "react";
import styles from "./itemSkill.module.scss";

export default function ItemSkill({item}) {
  return (
    <div className={styles.itemSkill}>
      <div className={styles.content}>
        <div className={styles.icon}>
          {item.icon}
        </div>
        <h3>{item.title}</h3>
        <ul>
          {item.desc.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>
    </div>
  );
}
