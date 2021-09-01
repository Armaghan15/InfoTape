import React from "react";
import { Link as RouterLink, Router } from "react-router-dom";

import classes from "./Explore.module.css";

// Imports for external Components
import TrendingMovies from "./Movies/TrendingMovies";
import AllMovies from "./Movies/AllMovies";
import TrendingTVShows from "./TVShows/TrendingTVShows";
import AllTVShows from "./TVShows/AllTVShows";

const Movies = () => {
  return (
    <div id="movies" className={classes.movies}>
      <div className={classes.navbar}>
        <RouterLink style={{ textDecoration: "none" }} to="/">
          <h1 className={classes.logo}>INFOTAPE</h1>
        </RouterLink>
        <form className={classes.searchBar}>
          <input placeholder="Search Movie or TV Show" type="text" required />
          <button>
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>

      <section className={classes.trendingSection}>
        <h1 className={classes.trendingSectionHeader}>Trending Movies</h1>
        <TrendingMovies />
        <h1 className={classes.allSectionHeader}>All Movies</h1>
        <AllMovies />
        <h1 className={classes.trendingShowsHeader}>Trending TV Shows</h1>
        <TrendingTVShows />
        <h1 className={classes.allShowsHeader}>All TV Shows</h1>
        <AllTVShows />
      </section>
    </div>
  );
};

export default Movies;
