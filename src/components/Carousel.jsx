import React from "react";
import Images from "./Images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function Carousel({src}) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="">
      <Slider {...settings}>
        {Images.map((image) => (
          <div
            key={image.id}
            className="bg-cyan-400 flex justify-center items-center  mb-3 "
          >
            <img
              src={image.src}
              alt=""
              className="w-[95%]  m-auto mt-5 h-[200px] sm:h-[300px] border-[20px] border-green-700"
            />
            <div className="bg-white m-5 sm:m-5 p-3">
              <h3 className="text-sm sm:text-xl text-center  p-3">
                {image.title}
              </h3>
              <p className="text-center">{image.text} </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
