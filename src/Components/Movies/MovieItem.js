import React from "react";

import classes from "./MovieItem.module.css";

const IMG_URL = "https://image.tmdb.org/t/p/w500/";

const MovieItem = (props) => {
  return (
    <div className={classes.MovieItem}>
      <img src={IMG_URL + props.imageURL} alt={props.imageALT} />
      <h3 className={classes.movieItemName}>{props.movieName}</h3>
    </div>
  );
};

export default MovieItem;
