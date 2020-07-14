import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Content from "./Content";
class DesignPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        {/* spacing can only be used in container */}
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <Content />
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    );
  }
}

export default DesignPage;
