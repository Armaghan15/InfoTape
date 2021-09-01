import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { isCompositeComponentWithType } from "react-dom/test-utils";

// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = "w1280";
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = "w780";

// Base Images url extension for TMDB
const IMG_URL = `https://image.tmdb.org/t/p/${BACKDROP_SIZE}/`;

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
  const [selectedMovie, setSelectedMovie] = useState({});

  // Method for fetching/getting item details from TMDB
  const fetchItemDetails = async () => {
    const itemDetailsURL = `https://api.themoviedb.org/3/${props.location.state.mediaType}/${props.location.state.id}?api_key=508720d4e5bd95e63fd8e0b7067d506c&language=en-US`;
    const response = await axios.get(itemDetailsURL);
    const responseIsValid = response && response.status === 200;
    // Checking if the response is valid
    if (responseIsValid) {
      const data = await response.data;
      setSelectedMovie(data);
    } else {
      console.log("Error");
    }
  };

  // Using the usEffect hook to run the fetchItemDetails method only when the method fetchItemDetails itself changes
  useEffect(() => {
    fetchItemDetails();
  }, []);

  console.log(selectedMovie);

  return (
    <ItemDetail itemBackdropPath={selectedMovie.backdrop_path}>
      {selectedMovie.title}
    </ItemDetail>
  );
};

export default ItemDetailComponent;
