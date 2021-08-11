import React from "react";

import classes from "./TVShows.module.css";

// Imports for external Components
import TrendingTVShows from "./TrendingTVShows";

const TVShows = () => {
  return (
    <div id="movies" className={classes.movies}>
      <div className={classes.navbar}>
        <h1 className={classes.logo}>INFOTAPE</h1>
        <form className={classes.searchBar}>
          <input placeholder="Search Movie" type="text" required />
          <button>Search</button>
        </form>
      </div>

      <section className={classes.trendingSection}>
        <h1 className={classes.trendingSectionHeader}>Trending TV Shows</h1>
        <TrendingTVShows />
      </section>
    </div>
  );
};

export default TVShows;
