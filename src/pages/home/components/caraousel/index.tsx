import React from "react";
import Slider from "react-slick";

import '../Carousel.scss'

const Carousel: React.FC<any> = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="slide">
          <h3>1</h3>
        </div>
        <div className="slide">
          <h3>2</h3>
        </div>
        <div className="slide">
          <h3>3</h3>
        </div>
        <div className="slide">
          <h3>4</h3>
        </div>
        <div className="slide">
          <h3>5</h3>
        </div>
        <div className="slide">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
