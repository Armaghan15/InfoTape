import React, { useState, useEffect, useCallback } from "react";
// Axios is a library for fetching data from an API
import axios from "axios";

import classes from "./TrendingMovies.module.css";

// Imports for external Components
import MovieItem from "./MovieItem";

const TrendingMovies = (props) => {
  // State for our trending movies
  const [trendingMovies, setTrendingMovies] = useState([]);

  // Method for fetching/getting trending moveis from TMDB API using axios00000000000
  const fetchTrendingMovies = useCallback(async () => {
    const trendingMoviesURL =
      "https://api.themoviedb.org/3/trending/moviel/day?api_key=508720d4e5bd95e63fd8e0b7067d506c";
    const IMG_URL = "https://image.tmdb.org/t/p/w500/";

    const response = await axios.get(trendingMoviesURL);
    const responseIsValid = response && response.status === 200;

    // Checking if the response is valid
    if (responseIsValid) {
      const data = await response.data.results;
      setTrendingMovies(data);
      console.log(trendingMovies);
    }
  });

  // Using the usEffect hook to run the fetchTrendingMovies method only when the method fetchTrendingMovies itself changes
  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <div className={classes.TrendingMovies}>
      {trendingMovies.map((trendingMovie) => (
        <MovieItem
          imageURL={trendingMovie.poster_path}
          movieName={trendingMovie.original_title}
          imageALT={trendingMovie.original_title}
        />
      ))}
    </div>
  );
};

export default TrendingMovies;
