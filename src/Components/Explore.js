import React, { useState, useEffect } from "react";
import { Link as RouterLink, Router } from "react-router-dom";
import axios from "axios";

import classes from "./Explore.module.css";

// Imports for external Components
import TrendingMovies from "./Movies/TrendingMovies";
import AllMovies from "./Movies/AllMovies";
import TrendingTVShows from "./TVShows/TrendingTVShows";
import AllTVShows from "./TVShows/AllTVShows";
import ItemsRow from "./UI/ItemsRow";

const Movies = () => {
  const [bodyContent, setBodyContent] = useState(
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
  );

  const [searchInputValue, setSearchInputValue] = useState("");

  // State for the returned items from search
  const [searchItemsList, setSearchItemsList] = useState([]);

  const searchInputValueChangeHandler = (event) => {
    setSearchInputValue(event.target.value);
  };

  // Method for grabing the user input and searching items from TMDB
  const searchItems = async (searchValue) => {
    // TMDB URL through which we are going to search for items
    const searchURL = `https://api.themoviedb.org/3/search/multi?api_key=508720d4e5bd95e63fd8e0b7067d506c&language=en-US&query=${searchValue}&include_adult=false`;

    // Using Axios to fetch Searched Items
    const searchResponse = await axios.get(searchURL);
    const searchResponseIsValid =
      searchResponse && searchResponse.status === 200;

    // if (searchResponseIsValid) {
    setSearchItemsList(searchResponse.data.results);
    // }

    // Changing the bodyContent state to the searched item since we only want to display this
    setBodyContent(<ItemsRow rowItems={searchItemsList} mediaType="movie" />);
  };

  useEffect(() => {
    searchItems(searchInputValue);
    console.log(searchInputValue);
  }, [searchInputValue]);

  return (
    <div id="movies" className={classes.movies}>
      <div className={classes.navbar}>
        <RouterLink style={{ textDecoration: "none" }} to="/">
          <h1 className={classes.logo}>INFOTAPE</h1>
        </RouterLink>
        <form className={classes.searchBar}>
          <input
            value={searchInputValue}
            placeholder="Search Movie or TV Show"
            type="text"
            required
            onChange={searchInputValueChangeHandler}
          />
          <button>
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>

      {bodyContent}
    </div>
  );
};

export default Movies;
