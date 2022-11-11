import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "./layout";
import { Home } from "./pages";

import "./App.scss";

const App: React.FC<any> = (props) => {
  return (
    <Layout>
      <Home></Home>
    </Layout>
  );
};

export default App;
