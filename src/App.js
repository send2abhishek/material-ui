import React from "react";
import "./App.css";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// to overide the styles
const useStyles = makeStyles({
  helloThereStyle: {
    fontSize: "90px",
    color: "red",
  },
  buttonStyle: {
    color: "green",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div style={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        color="primary"
        className={classes.helloThereStyle}
      >
        Abhishek Aryan
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        className={classes.buttonStyle}
      >
        This is our first Button
      </Button>
    </div>
  );
}

export default App;
