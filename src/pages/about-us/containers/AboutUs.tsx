import React from "react";

import Messages from "../components/Messages";

import "../style.scss";

const AboutUs: React.FC<any> = (props) => {
  return (
    <div className="about-us-page-container">
      <div className="about-us-heading">
        <div className="container">
          <h1>ABOUT US</h1>
        </div>
      </div>
      <Messages />
    </div>
  );
};

export default AboutUs;
