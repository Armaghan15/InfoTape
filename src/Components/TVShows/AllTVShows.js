import React, { useState, useEffect, useCallback } from "react";
// Axios is a library for fetching data from an API
import axios from "axios";

import classes from "./AllTVShows.module.css";

// Imports for external Components
import ListItem from "../UI/ListItem";

const AllTVShows = (props) => {
  // State for our All movies
  const [AllTVShows, setAllTVShows] = useState([]);

  // Method for fetching/getting All tv shows from TMDB API using axios
  const fetchAllTVShows = useCallback(async () => {
    const allTVShowsURL =
      "https://api.themoviedb.org/3/discover/tv?api_key=508720d4e5bd95e63fd8e0b7067d506c";

    const response = await axios.get(allTVShowsURL);
    const responseIsValid = response && response.status === 200;

    // Checking if the response is valid
    if (responseIsValid) {
      const data = await response.data.results;
      setAllTVShows(data);
    }
  });

  // Using the usEffect hook to run the fetchAllTVShows method only when the method fetchAllTVShows itself changes
  useEffect(() => {
    fetchAllTVShows();
  }, []);

  return (
    <div className={`${classes.AllTVShows} ${props.className}`}>
      {AllTVShows.map((tvShow) => (
        <ListItem
          key={tvShow.id}
          imageURL={tvShow.poster_path}
          listItemName={tvShow.name}
          imageALT={tvShow.name}
          listItemRating={tvShow.vote_average}
        />
      ))}
    </div>
  );
};

export default AllTVShows;
