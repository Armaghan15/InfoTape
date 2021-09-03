import React from "react";
import { Link } from "react-router-dom";

import classes from "./ListItem.module.css";

// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = "w780";

// Images URL from TMDB API
const IMG_URL = `https://image.tmdb.org/t/p/${POSTER_SIZE}/`;

const ListItem = (props) => {
  return (
    <Link
      to={{
        pathname: `/details/${props.mediaType}/${props.id}`,
        state: { id: props.id, mediaType: props.mediaType },
      }}
      style={{ textDecoration: "none" }}
    >
      <div className={classes.ListItem}>
        <img src={IMG_URL + props.imageURL} alt={props.imageALT} />
        <div className={classes.textAndRating}>
          <h3 className={classes.listItemRating}>
            ⭐ {props.listItemRating}/10
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
