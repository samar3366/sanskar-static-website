import React from "react";

import Carousel from "../components/caraousel";
import Messages from "../components/messages";

const Home: React.FC<any> = (props) => {
  return (
    <>
      <Carousel />
      <Messages />
    </>
  );
};

export default Home;
