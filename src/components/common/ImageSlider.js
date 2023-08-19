import React from "react";
import Slider from "react-slick";

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {images?.map((image, i) => {
          return <img src={image} alt="as" key={i} />;
        })}
      </Slider>
    </div>
  );
};

export default ImageSlider;
