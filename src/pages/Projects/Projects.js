import React from "react";
import ItemProject from "../../components/ItemProject/ItemProject";
import Title from "../../components/Title/Title";
import styles from "./projects.module.scss";
import productsManagement from '../../assets/productsManagement.png'
import shoppingCart from '../../assets/shoppingCart.png'
import movieTickets from '../../assets/movieTickets.png'
import vlearning from '../../assets/vlearning.png'
import adminVlearning from '../../assets/adminVlearning.png'
import samar from '../../assets/samar.png'

export default function Projects() {
  const projectList = [
    {
      type: "Vlearning",
      img: vlearning,
      link: "https://vlearning-three.vercel.app/",
    },
    {
      type: "Admin Vlearning",
      img: adminVlearning,
      link: "https://adminvlearning.vercel.app/",
    },
    {
      type: "Movie Tickets",
      img: movieTickets,
      link: "https://booking-movie-tickets.vercel.app/",
    },
    {
      type: "Shopping Cart",
      img: shoppingCart,
      link: "https://capstone-js-nhom9-assets.vercel.app",
    },
    {
      type: "Products Management System",
      img: productsManagement,
      link: "https://capstone-js-nhom9-app.vercel.app",
    },
    {
      type: "Samar",
      img: samar,
      link: "https://b41-samar.vercel.app/",
    },
  ];
  return (
    <div style={{paddingTop: 70}} id='projects'>
      <div className={styles.projects}>
        <div className="container">
          <Title title='ProJects' className={styles.title}/>
          <div className={styles.projectContainer}>
            {projectList.map((item, index) => {
              return <ItemProject key={index} item={item}/>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
