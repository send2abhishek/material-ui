import React from "react";
import "./App.css";
import { Typography, Paper } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CoolButton from "./components/CoolButton.jsx";

// to overide the styles
const useStyles = makeStyles((theme) => ({
  textStyle: {
    color: "red",
  },

  typoStyle: {
    background: "blue",
    color: "#fff",
    [theme.breakpoints.up("sm")]: {
      background: "black",
      color: "#fff",
    },
  },
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  console.log(theme);
  return (
    <div style={{ textAlign: "center" }}>
      <Typography classes={{ colorPrimary: classes.textStyle }} color="primary">
        Abhishek Aryan
      </Typography>

      <Typography className={classes.typoStyle}>Color Check</Typography>

      <CoolButton cool={true} />

      <Paper elevation="16" square>
        <Typography variant="body2" color="primary">
          Checking Paper componenets
        </Typography>
      </Paper>
    </div>
  );
}

export default App;
