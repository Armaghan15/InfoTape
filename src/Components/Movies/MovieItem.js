import React from "react";

import classes from "./MovieItem.module.css";

const IMG_URL = "https://image.tmdb.org/t/p/w500/";

const MovieItem = (props) => {
  return (
    <div className={classes.MovieItem}>
      <img src={IMG_URL + props.imageURL} alt={props.imageALT} />
      <div className={classes.textAndRating}>
        <h3 className={classes.movieItemName}>{props.movieName}</h3>
        <h3 className={classes.movieItemRating}>⭐ {props.movieRating}</h3>
      </div>
    </div>
  );
};

export default MovieItem;
