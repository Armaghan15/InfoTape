import React, { useState, useEffect, useCallback } from "react";
// Axios is a library for fetching data from an API
import axios from "axios";

import classes from "./AllMovies.module.css";

// Imports for external Components
import ItemsRow from "../UI/ItemsRow";

const AllMovies = (props) => {
  // State for our All movies
  const [AllMovies, setAllMovies] = useState([]);

  // Method for fetching/getting All moveis from TMDB API using axios
  const fetchAllMovies = useCallback(async () => {
    const allMoviesURL =
      "https://api.themoviedb.org/3/discover/movie?api_key=508720d4e5bd95e63fd8e0b7067d506c";

    const response = await axios.get(allMoviesURL);
    const responseIsValid = response && response.status === 200;

    // Checking if the response is valid
    if (responseIsValid) {
      const data = await response.data.results;
      setAllMovies(data);
    }
  });

  // Using the usEffect hook to run the fetchAllMovies method only when the method fetchAllMovies itself changes
  useEffect(() => {
    fetchAllMovies();
  }, []);

  return (
    <div className={`${classes.AllMovies} ${props.className}`}>
      <ItemsRow rowItems={AllMovies} />
    </div>
  );
};

export default AllMovies;
