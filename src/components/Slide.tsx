import Image from "next/image";
import React from "react";

interface PropsType {
  img: string;
  title?: string;
  mainTitle?: string;
  price?: string;
}

const Slide: React.FC<PropsType> = ({ img, title, mainTitle, price }) => {
  return (
    <div className="outline-none border-none relative">
      <div
        className={`absolute ${
          price ? "left-[30px] md:left-[70px]" : "left-1/2 -translate-x-1/2"
        } max-w-[250px] sm:max-w-[350px] ${
          price ? "top-[50%]" : "bottom-[10%]"
        } -translate-y-1/2 space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none`}
      >
        <h3 className="text-rose-500 text-[24px] lg:text-[28px]">{title}</h3>
        <h2 className="text-blackish text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">
          {mainTitle}
        </h2>

        {price && (
          <h3
            className="text-[24px] text-gray-500"
            style={{ left: price ? "30px" : "auto" }}
          >
            starting at{" "}
            <b className="text-[20px] md:text-[24px] lg:text-[30px]">{price}</b>
            .00
          </h3>
        )}

        <div className="bg-gradient-to-b from-rose-500 to-rose-600 text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackish">
          Shop Now
        </div>
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
