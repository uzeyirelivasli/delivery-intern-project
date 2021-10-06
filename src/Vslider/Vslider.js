import React from "react";
import "./Vslider.css";
//
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//
import Slider1 from "../Images/slider/slider1.png";
import Slider2 from "../Images/slider/slider2.png";
import Slider3 from "../Images/slider/slider3.png";
import Slider4 from "../Images/slider/slider4.png";

function Vslider() {
  const settings = {
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings}>
      <div className="slider--item">
        <img src={Slider1} alt="" />
      </div>
      <div className="slider--item">
        <img src={Slider2} alt="" />
      </div>
      <div className="slider--item">
        <img src={Slider3} alt="" />
      </div>
      <div className="slider--item">
        <img src={Slider4} alt="" />
      </div>
    </Slider>
  );
}

export default Vslider;
