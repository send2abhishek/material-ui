import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pokedex from "./Pokedex";
import Pokemon from "./Pokemon";

const PokemomPage = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={(props) => <Pokedex {...props} />} />
        <Route
          path="/:pokemonId"
          exact
          render={(props) => <Pokemon {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default PokemomPage;
