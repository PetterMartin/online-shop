import Image from "next/image";
import React from "react";

import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";

interface propsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}

const ProductCard: React.FC<propsType> = ({
  img,
  title,
  desc,
  rating,
  price,
}) => {
  const generateRating = (rating: number) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 text-[20px] text-amber-400">
            <TiStarFullOutline />
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
          </div>
        );
      case 2:
        return (
          <div className="flex gap-1 text-[20px] text-amber-400">
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
          </div>
        );
      case 3:
        return (
          <div className="flex gap-1 text-[20px] text-amber-400">
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarOutline />
            <TiStarOutline />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-1 text-[20px] text-amber-400">
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarOutline />
          </div>
        );
      case 5:
        return (
          <div className="flex gap-1 text-[20px] text-amber-400">
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <Image
          className="w-full h-auto rounded-md"
          src={img}
          width={200}
          height={300}
          alt={title}
        />
      </div>

      <div className="flex flex-col gap-2 py-2">
        <div className="flex">
          <h2 className="text-gray-600 font-semibold">{desc}</h2>
          <div className="font-bold flex gap-4">
            ${price}
          </div>
        </div>
        <div className="flex gap-2 text-sm">{generateRating(rating)} 4,8</div>
        <div className="bg-rose-500 text-gray-100 text-sm py-1 max-w-[140px] rounded-lg text-center mt-2">
          Limited time deal
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
