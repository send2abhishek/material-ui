import React from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import DeleteIcon from "@material-ui/icons/Delete";
const useStyle = makeStyles((theme) => ({
  buttonStyle: (props) => {
    return {
      color: props.cool ? "blue" : "red",
      [theme.breakpoints.up("sm")]: {
        color: "black",
      },
    };
  },
  buttonBackground: {
    background: "red",
  },

  root: {
    color: "red",
    border: "none",
  },
}));
const CoolButton = (props) => {
  const classes = useStyle(props);
  return (
    <div>
      <Button
        className={classNames(classes.buttonStyle, classes.buttonBackground)}
      >
        This is cool Button
      </Button>

      <Button
        size="large"
        classes={{ textPrimary: classes.root }}
        endIcon={<DeleteIcon />}
        variant="text"
        color="primary"
      >
        Click Me
      </Button>
    </div>
  );
};

export default CoolButton;
