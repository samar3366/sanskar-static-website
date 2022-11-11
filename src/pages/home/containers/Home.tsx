import React from "react";

import Carousel from "../components/caraousel";

const Home: React.FC<any> = (props) => {
  console.log("Rendering Home");
  return (
    <>
      <Carousel />
    </>
  );
};

export default Home;
