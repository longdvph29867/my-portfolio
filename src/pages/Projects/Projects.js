import React from "react";
import ItemProject from "../../components/ItemProject/ItemProject";
import Title from "../../components/Title/Title";
import styles from "./projects.module.scss";
import productsManagement from "../../assets/productsManagement.png";
import shoppingCart from "../../assets/shoppingCart.png";
import movieTickets from "../../assets/movieTickets.png";
import vlearning from "../../assets/vlearning.png";
import adminVlearning from "../../assets/adminVlearning.png";
import samar from "../../assets/samar.png";
import clothesShop from "../../assets/clothes-shop.png";
import movieFpoly from "../../assets/movieFpoly.png";
import movieFpolyApi from "../../assets/movieFpolyApi.png";
export default function Projects() {
  const projectList = [
    {
      type: "Movie Fpoly",
      img: movieFpoly,
      link: "http://moviefpoly.com",
    },
    {
      type: "Movie Fpoly Api",
      img: movieFpolyApi,
      link: "http://moviefpoly.com:8000/v1/docs/",
    },
    {
      type: "Clothes Shop",
      img: clothesShop,
      link: "https://clothes-shop-kappa.vercel.app/",
    },
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
      link: "https://booking-tickets-navy.vercel.app/",
    },
    {
      type: "Shopping Cart",
      img: shoppingCart,
      link: "https://shopping-cart-rose-alpha.vercel.app/",
    },
    {
      type: "Products Management System",
      img: productsManagement,
      link: "https://products-management-one.vercel.app/",
    },
    {
      type: "Samar",
      img: samar,
      link: "https://samar-ruddy.vercel.app/",
    },
  ];
  return (
    <div style={{ paddingTop: 70 }} id="projects">
      <div className={styles.projects}>
        <div className="container">
          <Title title="ProJects" className={styles.title} />
          <div className={styles.projectContainer}>
            {projectList.map((item, index) => {
              return <ItemProject key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
