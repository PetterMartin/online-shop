// Slide.js

import Image from "next/image";
import React from "react";

interface PropsType {
  img: string;
  buttonPosition?: "left" | "center" | "right" | undefined;
}

const Slide: React.FC<PropsType> = ({ img, buttonPosition = "center" }) => {
  const getPositionClasses = () => {
    switch (buttonPosition) {
      case "left":
        return "left-[19%] top-[25%]";
      case "right":
        return "left-[25%] bottom-[30%]";
      case "center":
      default:
        return "left-1/2 -translate-x-1/2 bottom-[17%]";
    }
  };

  return (
    <div className="relative bg-transparent">
      <div
        className={`absolute ${getPositionClasses()} ${
          buttonPosition !== "center" ? "" : ""
        }`}
      >
        <button className="bg-gradient-to-b from-rose-500 to-rose-600 text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:opacity-85 transition duration-300 ease-in-out">
          Shop Now
        </button>
      </div>

      <Image
        className="w-full h-[300px] md:h-[500px] rounded-xl object-cover object-right md:object-left-bottom"
        src={img}
        alt="banner"
        width={2000}
        height={2000}
      />
    </div>
  );
};

export default Slide;
