import React from "react";

// Imports for external Components
import ListItem from "./ListItem";
import useHorizontalScroll from "../../hooks/useHorizontalScroll";

// Import for styles
import classes from "./ItemsRow.module.css";

const ItemsRow = (props) => {
  const scrollRef = useHorizontalScroll();

  return (
    <div ref={scrollRef} className={classes.ItemsRow}>
      {props.rowItems.map((rowItem) => (
        <ListItem
          key={rowItem.id}
          id={rowItem.id}
          imageURL={rowItem.poster_path}
          listItemName={rowItem.name}
          imageALT={rowItem.name}
          listItemRating={rowItem.vote_average}
          mediaType={props.mediaType}
        />
      ))}
    </div>
  );
};

export default ItemsRow;
