import React, { useState } from "react";
import { Switch, Typography, Paper, Grid, Button } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue, green } from "@material-ui/core/colors";

const BasicStyle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  const greenTheme = createMuiTheme({
    palette: {
      primary: green,
      secondary: blue,
    },
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : greenTheme}>
      <Paper>
        <Grid container direction="column">
          <Typography variant="body2">This is my app</Typography>
          <Grid item>
            <Button color="primary" variant="outlined">
              Demo button
            </Button>
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};

export default BasicStyle;
