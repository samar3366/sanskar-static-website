import React from "react";

import UnderConstruction from "../../../new-updates.png";

import "../style.scss";

const Gallery: React.FC<any> = (props) => {
  return (
    <div className="gallery-page-container">
      <div className="d-flex justify-content-center">
        <img src={UnderConstruction} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
