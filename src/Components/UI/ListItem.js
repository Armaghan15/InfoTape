import React from "react";

import classes from "./ListItem.module.css";

const IMG_URL = "https://image.tmdb.org/t/p/w500/";

const ListItem = (props) => {
  return (
    <div className={classes.ListItem}>
      <img src={IMG_URL + props.imageURL} alt={props.imageALT} />
      <div className={classes.textAndRating}>
        <h3 className={classes.listItemName}>{props.movieName}</h3>
        <h3 className={classes.listItemRating}>⭐ {props.movieRating}</h3>
      </div>
    </div>
  );
};

export default ListItem;
