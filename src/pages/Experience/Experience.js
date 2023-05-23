import React from 'react'
import 'animate.css';
import {FaGraduationCap} from 'react-icons/fa';
import ItemInfor from '../../components/ItemInfor/ItemInfor';
import Title from '../../components/Title/Title';
import styles from './experience.module.scss'
export default function Experience() {
    const infor = [
        {
            icon: <FaGraduationCap />,
            title: "WEB ENGINEERING STUDENT",
            year: '03/2022 - NOW',
            inst: 'FPT POLYTECHNIC',
            desc: 'GPA: 9.1/10'
        },
        {
            icon: <FaGraduationCap />,
            title: 'FRONTEND STUDENT',
            year: '09/2022 - 05/2023',
            inst: 'CyberSoft Academy',
            desc: 'Learning Frontend skills: HTML, SCSS, Javascript, ES6, Restful API, ReactJS, Redux'
        },
    ];

  return (
    <div style={{paddingTop: 70}} id='experience'>
        <div className={styles.experience}>
            <div className="container">
                <Title title='Experience' className={styles.title}/>
                <div className={styles.experienceContainer}>
                    {infor.map((item, index) => {
                        return <ItemInfor key={index} item={item}/>
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}
