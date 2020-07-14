import { createMuiTheme } from "@material-ui/core/styles";
import { blue, pink } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: blue[500],
    },
    secondary: {
      main: pink[500],
    },
  },
});

export default theme;
