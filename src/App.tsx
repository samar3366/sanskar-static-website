import React from "react";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "./layout";
import {
  Home,
  AboutUs,
  Activities,
  Disclosure,
  ContactUs,
  Gallery,
} from "./pages";

import "./App.scss";

const App: React.FC<any> = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/mandatory-public-disclosure" element={<Disclosure />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
};

export default App;
