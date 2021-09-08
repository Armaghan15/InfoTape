import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

// Imports for styles
import classes from "./ItemDetailComponent.module.css";

// Imports for external Components

// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = "w1280";
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = "w780";

// Base Images url for backdrop from TMDB
const IMG_URL = `https://image.tmdb.org/t/p/${BACKDROP_SIZE}/`;

// Base Images url for poster image from TMDB
const POSTER_IMG_URL = `https://image.tmdb.org/t/p/${POSTER_SIZE}/`;

const ItemDetail = styled.div`
  background: url("${(props) => IMG_URL + props.itemBackdropPath}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;

  /* Set rules to fill background */
  min-height: 100%;
  min-width: 1024px;

  /* Set up proportionate scaling */
  width: 100%;
  height: auto;

  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
`;

const ItemDetailComponent = (props) => {
  // State for the searched movie with details
  const [selectedItem, setSelectedItem] = useState({});

  // Method for fetching/getting item details from TMDB
  const fetchItemDetails = async () => {
    const itemDetailsURL = `https://api.themoviedb.org/3/${props.location.state.mediaType}/${props.location.state.id}?api_key=508720d4e5bd95e63fd8e0b7067d506c&language=en-US`;
    const response = await axios.get(itemDetailsURL);
    const responseIsValid = response && response.status === 200;
    // Checking if the response is valid
    if (responseIsValid) {
      const data = await response.data;
      setSelectedItem(data);
    } else {
      console.log("Error");
    }
  };

  // Using the usEffect hook to run the fetchItemDetails method only when the method fetchItemDetails itself changes
  useEffect(() => {
    fetchItemDetails();
  }, []);

  const SelectedItemGenres = selectedItem.genres?.map((genre) => (
    <span className={classes.genreItem} key={genre.id}>
      {genre.name}
    </span>
  ));

  return (
    <ItemDetail itemBackdropPath={selectedItem.backdrop_path}>
      <div className={classes.ItemDetailsCard}>
        <img
          className={classes.ItemDetailPoster}
          src={POSTER_IMG_URL + selectedItem.poster_path}
        ></img>
        <div className={classes.DetailCardText}>
          <h1 className={classes.DetailItem}>
            Title:{" "}
            <span>
              {selectedItem.original_title || selectedItem.original_name}
            </span>
          </h1>
          <hr />
          <h1 className={classes.DetailItem}>
            Language: <span>{selectedItem.original_language}</span>
          </h1>
          <hr />
          <h1 className={classes.DetailItem}>Genres: {SelectedItemGenres}</h1>
          <hr></hr>
          <h1 className={classes.DetailItem}>
            Release Date:{" "}
            <span>
              {selectedItem.release_date || selectedItem.first_air_date}
            </span>
          </h1>
          <hr></hr>
          {/* <div className={classes.ItemDetailParagraph}>
            <p>{selectedItem.overview}</p>
          </div> */}
        </div>
      </div>
    </ItemDetail>
  );
};

export default ItemDetailComponent;
