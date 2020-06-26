import { createMuiTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: "#fff",
    },
  },
});

export default theme;
