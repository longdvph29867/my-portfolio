import React from "react";
import Title from "../../components/Title/Title";
import {
  SlAnchor,
  SlEqualizer,
  SlMicrophone,
  SlLayers,
  SlSupport,
} from "react-icons/sl";
import { FiUsers } from "react-icons/fi";
import styles from "./skills.module.scss";
import ItemSkill from "../../components/ItemSkill/ItemSkill";
import imgHome03 from "../../assets/home_03.png";
export default function Skills() {
  const skills = [
    {
      icon: <SlAnchor />,
      title: "PROGRAMING LANGUAGE",
      desc: ["HTML/CSS/SASS", "Javascript(ES6)", "Typescript"],
    },
    {
      icon: <SlEqualizer />,
      title: "FRAMEWORKS & LIBRARIES",
      desc: [
        "ReactJS/Redux",
        "Angular",
        "Node.js",
        "Bootstrap/Ant Design/Tailwind",
      ],
    },
    {
      icon: <SlMicrophone />,
      title: "VERSION CONTROL",
      desc: ["Git"],
    },
    {
      icon: <SlLayers />,
      title: "Tools, DATABASES & IDE",
      desc: ["MongoDB", "Docker", "Visual code"],
    },
    {
      icon: <SlSupport />,
      title: "FOREIGN LANGUAGE",
      desc: [
        "English: intermediate",
        // "Japanese: N5",
      ],
    },
    {
      icon: <FiUsers />,
      title: "KNOWLEDGE",
      desc: [
        "Good understanding about the Agile and Scrum process",
        "Good time management, presentation and teamwork skills",
      ],
    },
  ];

  return (
    <div style={{ paddingTop: 70 }} id="skills">
      <div className={styles.skills}>
        <div className="container">
          <Title className={styles.title} title={"Skills"} />
          <div className={styles.skillsContainer}>
            {skills.map((item, index) => {
              return <ItemSkill key={index} item={item} />;
            })}
          </div>
        </div>
        <div className={styles.imgItem}>
          <img src={imgHome03} alt="" />
        </div>
      </div>
    </div>
  );
}
