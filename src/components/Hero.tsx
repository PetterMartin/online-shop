"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

interface SlideDataItem {
  id: number;
  img: string;
  buttonPosition?: "left" | "center" | "right";
}

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    arrows: false,
  };

  const slideData: SlideDataItem[] = [
    {
      id: 0,
      img: "/Samsung.jpeg",
      buttonPosition: "center",
    },
    {
      id: 1,
      img: "/Bose.webp",
      buttonPosition: "right",
    },
    {
      id: 2,
      img: "/Shoes.webp",
      buttonPosition: "left",
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              buttonPosition={item.buttonPosition}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
