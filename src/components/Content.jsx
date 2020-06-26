import React from "react";
import CofeeCard from "./CofeeCards";
import { Grid } from "@material-ui/core";
import Data from "./DataSourc";
const Content = () => {
  let mapData = "";
  mapData =
    Data.length > 0
      ? Data.map((ele, index) => {
          return (
            <Grid item xs={12} sm={4} key={index}>
              <CofeeCard
                avatarSrc={ele.avatarUrl}
                title={ele.title}
                subTitle={ele.price}
                imageUrl={ele.imageUrl}
                desc={ele.description}
              />
            </Grid>
          );
        })
      : "Loading...";

  return (
    <Grid container spacing={4}>
      {mapData}
    </Grid>
  );
};

export default Content;
