import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "./axios-instance";
const useStyle = makeStyles({
  root: {
    maxWidth: 285,
  },
  pokedexContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  media: {
    height: 140,
    margin: "0 auto",
  },
  circularBarPosition: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  cardContentCenter: {
    textAlign: "center",
  },
});
const Pokedex = () => {
  const [pokeData, setPokeData] = useState({
    mapData: [],
  });

  useEffect(() => {
    axios
      .get("/?limit=200&offset=1")
      .then((response) => {
        console.log(response.data.results);

        setPokeData({
          mapData: response.data.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const classes = useStyle();
  console.log(pokeData);
  let data = "";

  data =
    pokeData.mapData.length > 0 ? (
      pokeData.mapData.map((element, index) => {
        return (
          <Grid item key={index} xs={6} sm={3} style={{ padding: "8px" }}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={`https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/${index}.png`}
                title="Contemplative Reptile"
                style={{ width: "130px", height: "120px" }}
              />

              <CardContent className={classes.cardContentCenter}>
                <Typography>{`${index}. ${element.name}`}</Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })
    ) : (
      <CircularProgress
        color="secondary"
        className={classes.circularBarPosition}
      />
    );
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar />
      </AppBar>

      <Grid container className={classes.pokedexContainer}>
        {data}
      </Grid>
    </React.Fragment>
  );
};

export default Pokedex;
