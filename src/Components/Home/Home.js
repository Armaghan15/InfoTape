import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

import classes from "./Home.module.css";

// Imports for external components
import HomeOption from "./HomeOption";

const Home = () => {
  return (
    <div className={classes.Home}>
      <section className={classes.homeHeader}>
        <div className={classes.homeHeaderText}>
          <h1 className={classes.homeHeaderH1}>INFOTAPE</h1>
          <h1 className={classes.homeHeaderParagraph}>
            Get Real Data of Thousands of movies and TV Shows
          </h1>
          <ScrollLink
            className={classes.exploreButton}
            to="homeOptions"
            smooth={true}
            duration={1500}
          >
            Explore
          </ScrollLink>
        </div>
      </section>
      <section id="homeOptions" className={classes.homeOptions}>
        <RouterLink className="RouterLink" to="/movies">
          <HomeOption className={classes.moviesHomeOption} title="Movies" />
        </RouterLink>
        <HomeOption className={classes.tvShowsHomeOption} title="TV Shows" />
      </section>
    </div>
  );
};

export default Home;
