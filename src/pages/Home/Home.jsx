import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <main className={styles.home}>
      <div className={styles.imgContainer}>
        <img
          src="https://img.freepik.com/premium-photo/a-cartoon-character-from-the-movie-cars-disney-pixar-cars_42136-651.jpg"
          alt="Car"
        />
        <div className={styles.textContainer}>
          <p className={styles.mainText}>Choose Car. Feeling drive </p>
          <NavLink to="/catalog" className={styles.linkHome}>
            Catalog
          </NavLink>
        </div>
      </div>
    </main>
  );
};

export default Home;
