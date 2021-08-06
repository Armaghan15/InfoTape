import React from "react";

import classes from "./Movies.module.css";

// Imports for external Components
import TrendingMovies from "./TrendingMovies";

const Movies = () => {
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
        <h1 className={classes.trendingSectionHeader}>Trending Movies</h1>
        <TrendingMovies />
      </section>
    </div>
  );
};

export default Movies;
