import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

// imports for external components
import HomePage from "./Pages/HomePage";
import MoviesPage from "./Pages/MoviesPage";
import TVShowPage from "./Pages/TVShowsPage";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/movies">
        <MoviesPage />
      </Route>
      <Route path="/tvshows">
        <TVShowPage />
      </Route>
    </div>
  );
};

export default App;
