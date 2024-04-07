import Image from "next/image";
import React from "react";
import { Product } from "@/types/global";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import AddButton from "./AddButton";
import Link from "next/link";
import TitleTruncator from "./TitleTruncator";

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

  const priceParts = item.discountedPrice.toString().split(".");
  const mainPrice = priceParts[0];
  const decimalPrice = priceParts.length > 1 ? priceParts[1] : "";

  if (item)
    return (
      <div className="md:w-auto">
        <Link
          href={`/products/${item.id}?title=${encodeURIComponent(item.title)}`}
        >
          <div>
            <Image
              className=" rounded-md h-[160px] md:w-[260px] md:h-[260px]"
              src={item.image.url}
              width={200}
              height={200}
              style={{ objectFit: "cover" }}
              objectFit=""
              alt={item.title}
            />
          </div>
          <div className="flex flex-col gap-2 py-2">
            <div className="flex flex-col">
              <div className="font-extrabold flex text-sm md:text-md text-gray-800">
                <span className="text-lg md:text-xl">{mainPrice}</span>
                {decimalPrice && (
                  <span className="text-xs ms-0.5 mt-0.5">
                    {decimalPrice}
                  </span>
                )}
                {item.discountedPrice !== item.price && (
                  <span className="text-xs md:text-sm ms-2 mt-1 font-medium text-gray-500 line-through"> {item.price} </span>
                )}
              </div>
              <h2 className="text-gray-600 font-semibold text-xs md:text-base">
                <TitleTruncator title={item.title} />
              </h2>
            </div>
            <div className="flex gap-2 text-sm">
              {generateRating(item.rating)} {item.rating}
            </div>
          </div>
        </Link>
        <AddButton item={item}></AddButton>
      </div>
    );
};

export default ProductCard;
