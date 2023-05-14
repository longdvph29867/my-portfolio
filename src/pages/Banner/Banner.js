import React from "react";
import styles from "./banner.module.scss";
import imgHome06 from '../../assets/home_06.png'
import imgSlider2 from '../../assets/home_slider_2.png'
import imgHome01 from '../../assets/home_01.png'
import myImg from '../../assets/imgbanner.png'
import imgBg from '../../assets/home_03.png'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className="container">
        <div className={styles.bannerContainer}>
          <div className={styles.bannerLeft}>
            <h3>Hello, my name is</h3>
            <h1>Do Van Long</h1>
            <h2>I'm <span>FRONT-END DEVELOPER</span></h2>
            <button>My CV</button>
          </div>
          <div className={styles.bannerRight}>
            <div className={styles.myImg}>
              <img src={myImg} alt="" />
            </div>
            <div className={styles.imgBg}>
              <img src={imgBg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imgLeft}>
        <img src={imgHome06} alt="" />
      </div>
      <div className={styles.imgTop}>
        <img src={imgSlider2} alt="" />
      </div>
      <div className={styles.imgTopleft}>
        <img src={imgHome01} alt="" />
      </div>
    </div>
  );
}
