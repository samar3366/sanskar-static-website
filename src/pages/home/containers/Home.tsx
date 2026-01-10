import React from "react";

import Carousel from "../components/caraousel";
import Summary from "../components/summary";
import Administration from "../components/administration";
import Welcome from "../components/welcome";

const Home: React.FC<any> = (props) => {
  return (
    <>
      <Carousel />
      <Welcome />
      <Summary />
      <Administration />
    </>
  );
};

export default Home;
