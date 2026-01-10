import React from "react";
import Slider from "react-slick";

import "../Carousel.scss";

const Carousel: React.FC<any> = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <img
        src="https://img.icons8.com/ios-filled/50/null/back.png"
        height={"50px"}
        width={"50px"}
        style={{ zIndex: "5" }}
      />
    ),
    nextArrow: (
      <img
        src="https://img.icons8.com/ios-filled/50/null/forward--v1.png"
        height={"50px"}
        width={"50px"}
        style={{ zIndex: "5" }}
      />
    ),
  };
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="slide-1"></div>
        <div className="slide"></div>
        <div className="slide-2"></div>
        <div className="slide-3"></div>
        <div className="slide-4"></div>
      </Slider>
    </div>
  );
};

export default Carousel;
