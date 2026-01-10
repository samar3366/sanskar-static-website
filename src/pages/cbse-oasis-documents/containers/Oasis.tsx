import React from "react";

import Documents from "../components/Documents";

import "./Oasis.scss";

const Oasis: React.FC<any> = (props) => {
  return (
    <div className="oasis-page-container">
      <div className="oasis-heading">
        <div className="container">
          <h1>CBSE OASIS DOCUMENTS</h1>
        </div>
      </div>
      <Documents />
    </div>
  );
};

export default Oasis;
