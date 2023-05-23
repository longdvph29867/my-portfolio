import React, { useEffect } from "react";
import 'animate.css';
import WOW from 'wowjs';
import Title from "../../components/Title/Title";
import styles from "./about.module.scss";
import { FaDownload } from "react-icons/fa";

export default function About() {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);
  return (
    <div style={{paddingTop: 70}} id='about'>
      <div className={styles.about}>
        <div className="container">
          <Title className={styles.title} title={'About me'}/>
          <div className={styles.aboutContainer}>
            <div className={`${styles.aboutLeft} wow animate__animated animate__fadeInLeft`}>
              <p>
                Hi, I'm Long, my interests are in Front End Engineering, and I
                love to create beautiful and performant products with delightful
                user experiences.
              </p>
              <p>
                I can work with ReactJS and Javascript at a basic level. I'm
                trying to learn more day by day to become more proficient. Good
                communication and always listen to people. I also help experience
                in HTML, SCSS, ES6,...
              </p>
              <div className={styles.aboutBtn}>
                <button>
                  <FaDownload /> Download Resume
                </button>
              </div>
            </div>
            <div className={`${styles.aboutRight} wow animate__animated animate__fadeInRight`}>
              <div className={styles.mySkills}>
                <h3>My skills</h3>
                <div className={styles.progress}>
                  Team work
                </div>
                <div className={styles.progress}>
                  Development
                </div>
                <div className={styles.progress}>
                  English
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
