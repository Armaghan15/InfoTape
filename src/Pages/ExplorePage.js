import React from "react";

// Imports for external Components
import Explore from "../Components/Explore";

// Import for styles
import classes from "./ExplorePage.module.css";

const MoviesPage = () => {
  return (
    <div class={classes.MoviesPage}>
      <Explore />
    </div>
  );
};

export default MoviesPage;
