import React from "react";

const Pokemon = (props) => {
  const { match } = props;
  const { params } = match;
  console.log(params);
  return <div>Pokemon page</div>;
};

export default Pokemon;
