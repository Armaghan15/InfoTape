import React from "react";
import { Link as RouterLink, Router } from "react-router-dom";

import classes from "./Home.module.css";

// Imports for external components

const Home = () => {
  return (
    <div className={classes.Home}>
      <section className={classes.homeHeader}>
        <div className={classes.homeHeaderText}>
          <h1 className={classes.homeHeaderH1}>INFOTAPE</h1>
          <h1 className={classes.homeHeaderParagraph}>
            Get Real Data about Thousands of movies and TV Shows
          </h1>
          <RouterLink
            className={classes.exploreButton}
            to="/explore"
            smooth={true}
            duration={1500}
          >
            Explore
          </RouterLink>
        </div>
      </section>
    </div>
  );
};

export default Home;
