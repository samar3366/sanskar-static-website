import React from "react";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "./layout";
import { Home, AboutUs, Activities } from "./pages";

import "./App.scss";

const App: React.FC<any> = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/activities" element={<Activities />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
};

export default App;
