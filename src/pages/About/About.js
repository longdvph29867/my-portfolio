import React from "react";
import Title from "../../components/Title/Title";
import styles from "./about.module.scss";
import { FaDownload } from "react-icons/fa";

export default function About() {
  return (
    <div className={styles.about}>
      <div className="container">
        <Title className={styles.title} title={'About me'} text={'who i me'}/>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutLeft}>
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
          <div className={styles.aboutRight}>
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
  );
}
