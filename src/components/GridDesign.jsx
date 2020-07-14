import React from "react";
import { Typography, Grid, Toolbar, AppBar } from "@material-ui/core";
const GridDesign = (props) => {
  return (
    <Grid container direction="column">
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography>This is our header</Typography>
        </Toolbar>
      </AppBar>

      <Grid item container>
        <Grid xs={12} sm={6} style={{ background: "red" }}>
          <Typography variant="body2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            doloribus quos sunt eaque magnam tenetur ab molestiae veritatis
            maxime tempore commodi nulla nihil alias ipsam, totam facilis quia
            in natus?
          </Typography>

          <Typography variant="body2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            doloribus quos sunt eaque magnam tenetur ab molestiae veritatis
            maxime tempore commodi nulla nihil alias ipsam, totam facilis quia
            in natus?
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            doloribus quos sunt eaque magnam tenetur ab molestiae veritatis
            maxime tempore commodi nulla nihil alias ipsam, totam facilis quia
            in natus?
          </Typography>
        </Grid>

        <Grid xs={12} sm={6} style={{ background: "blue" }}>
          <Typography variant="body2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            doloribus quos sunt eaque magnam tenetur ab molestiae veritatis
            maxime tempore commodi nulla nihil alias ipsam, totam facilis quia
            in natus?
          </Typography>

          <Typography variant="body2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            doloribus quos sunt eaque magnam tenetur ab molestiae veritatis
            maxime tempore commodi nulla nihil alias ipsam, totam facilis quia
            in natus?
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            doloribus quos sunt eaque magnam tenetur ab molestiae veritatis
            maxime tempore commodi nulla nihil alias ipsam, totam facilis quia
            in natus?
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GridDesign;
