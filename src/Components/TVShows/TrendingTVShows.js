import React, { useState, useEffect, useCallback } from "react";
// Axios is a library for fetching data from an API
import axios from "axios";

import classes from "./TrendingTVShows.module.css";

// Imports for external Components
import ListItem from "../UI/ListItem";

const TrendingTVShows = (props) => {
  // State for our trending movies
  const [trendingTVShows, setTrendingTVShows] = useState([]);

  // Method for fetching/getting trending tv shows from TMDB API using axios
  const fetchTrendingTVShows = useCallback(async () => {
    const trendingTVShowsURL =
      "https://api.themoviedb.org/3/trending/tv/day?api_key=508720d4e5bd95e63fd8e0b7067d506c";

    const response = await axios.get(trendingTVShowsURL);
    const responseIsValid = response && response.status === 200;

    // Checking if the response is valid
    if (responseIsValid) {
      const data = await response.data.results;
      setTrendingTVShows(data);
    }
  });

  // Using the usEffect hook to run the fetchTrendingTVShows method only when the method fetchTrendingTVShows itself changes
  useEffect(() => {
    fetchTrendingTVShows();
  }, []);

  return (
    <div className={`${classes.TrendingTvShows} ${props.className}`}>
      {trendingTVShows.map((trendingTVShow) => (
        <ListItem
          key={trendingTVShow.id}
          imageURL={trendingTVShow.poster_path}
          listItemName={trendingTVShow.name}
          imageALT={trendingTVShow.original_title}
          listItemRating={trendingTVShow.vote_average}
        />
      ))}
    </div>
  );
};

export default TrendingTVShows;
