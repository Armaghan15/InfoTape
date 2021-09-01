import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

// imports for external components
import HomePage from "./Pages/HomePage";
import ExplorePage from "./Pages/ExplorePage";
import ItemDetailComponent from "./Components/UI/ItemDetailComponent";

const App = () => {
  const IMG_URL = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="App">
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/explore">
        <ExplorePage />
      </Route>
      <Route
        path="/details/:mediaType/:id"
        component={ItemDetailComponent}
      ></Route>
    </div>
  );
};

export default App;
