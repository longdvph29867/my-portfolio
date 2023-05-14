import React from 'react'
import styles from './itemInfor.module.scss'
export default function ItemInfor({item, className}) {
  return (
    <div className={`${styles.itemInfor} ${className}`}>
        <div className={styles.icon}>
            {item.icon}
        </div>
        <div className={styles.aboutInfor}>
            <h4>{item.title}</h4>
            <p>{item.year}</p>
            <p>{item.inst}</p>
            <p>{item.desc}</p>
        </div>
    </div>
  )
}
