import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "@material-ui/core/styles";
// import DesignPage from "./components/designPage";
// import BasicStyle from "./components/BasicStyle";
// import GridDesign from "./components/GridDesign";
import PokemonPage from "./components/Pokemon/pokemonPage";
import theme from "./theme";
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <PokemonPage />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
