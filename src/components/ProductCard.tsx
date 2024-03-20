import Image from "next/image";
import React from "react";
import { Product } from "@/types/global";

import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import AddButton from "./AddButton";
import Link from "next/link";

interface propsType {
  item: Product;
}

const ProductCard: React.FC<propsType> = ({ item }) => {
  const generateRating = (rating: number) => {
    const roundedRating = Math.round(rating);

    switch (roundedRating) {
      case 0:
        return (
          <div className="flex gap-1 text-[20px] text-amber-400">
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
          </div>
        );

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

  if (item)
    return (
      <>
        <Link
          href={`/products/${item.id}?title=${encodeURIComponent(item.title)}`}
        >
          <div>
            <Image
              className="w-[260px] rounded-md h-[260px]"
              src={item.image.url}
              width={200}
              height={200}
              style={{ objectFit: "cover" }}
              objectFit=""
              alt={item.title}
            />
          </div>
          <div className="flex flex-col gap-2 py-2">
            <div className="flex">
              <h2 className="text-gray-600 font-semibold">{item.title}</h2>
              <div className="font-bold flex gap-4">
                ${item.discountedPrice}
              </div>
            </div>
            <div className="flex gap-2 text-sm">
              {generateRating(item.rating)} {item.rating}
            </div>
          </div>
        </Link>
        <AddButton item={item}></AddButton>
      </>
    );
};

export default ProductCard;
