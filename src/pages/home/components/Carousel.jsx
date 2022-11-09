import React, { useState } from "react";

import "./Home.scss";

const Carousel = (props) => {
  const [currentCarousel, setCurrentCarousel] = useState(1);
  const slides = [1, 2, 3];
  setInterval(() => {
    if(currentCarousel === 3) {
        setCurrentCarousel(1);
    } else {
        setCurrentCarousel(currentCarousel + 1);
    }
  }, 5000)
  return (
    <div className="carousel-container">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button type="button" className={currentCarousel === 1 ? 'active' : ''}></button>
          <button type="button" className={currentCarousel === 2 ? 'active' : ''}></button>
          <button type="button" className={currentCarousel === 3 ? 'active' : ''}></button>
        </div>
        <div className="carousel-inner">
          <div className={`carousel-item${currentCarousel === 1 ? ' active' : ''}`}>
            <div className="slide1"></div>
          </div>
          <div className={`carousel-item${currentCarousel === 2 ? ' active' : ''}`}><div className="slide1"></div></div>
          <div className={`carousel-item${currentCarousel === 3 ? ' active' : ''}`}><div className="slide1"></div></div>
        </div>
        <button className="carousel-control-prev" type="button">
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button">
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
