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
          <div className="flex gap-1 text-[20px] text-accent">
            <TiStarFullOutline />
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
          </div>
        );
      case 2:
        return (
          <div className="flex gap-1 text-[20px] text-accent">
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
          </div>
        );
      case 3:
        return (
          <div className="flex gap-1 text-[20px] text-accent">
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarOutline />
            <TiStarOutline />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-1 text-[20px] text-accent">
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarOutline />
          </div>
        );
      case 5:
        return (
          <div className="flex gap-1 text-[20px] text-accent">
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
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
      <div>
        <Image
          className="w-full h-auto"
          src={img}
          width={200}
          height={300}
          alt={title}
        />
      </div>

      <div className="space-y-2 py-2">
        <h2 className="text-accent font-medium uppercase">{title}</h2>
        <p className="text-gray-500 max-w-[150px]">{desc}</p>
        <div>{generateRating(rating)}</div>

        <div className="font-bold flex gap-4">
          ${price}
          <del className="text-gray-500 font-normal">
            ${parseInt(price) + 50}.00
          </del>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
