import React from 'react'
import styles from './itemProject.module.scss'

export default function ItemProject({item}) {
  return (
    <div className={styles.itemProject}>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={item.img} alt="" />
        </div>
        <a href={item.link} target='blank' className={styles.overlay}>
          <h3>{item.type}</h3>
        </a>
      </div>
    </div>
  )
}
