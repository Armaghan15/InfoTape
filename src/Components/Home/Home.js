import React from "react";
import { Link } from "react-scroll";

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
          <Link
            className={classes.exploreButton}
            to="homeOptions"
            smooth={true}
            duration={1500}
          >
            Explore
          </Link>
        </div>
      </section>
      <section id="homeOptions" className={classes.homeOptions}>
        <HomeOption className={classes.moviesHomeOption} title="Movies" />
        <HomeOption className={classes.tvShowsHomeOption} title="TV Shows" />
      </section>
    </div>
  );
};

export default Home;
