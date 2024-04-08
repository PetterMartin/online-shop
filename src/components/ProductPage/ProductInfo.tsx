"use client";

import Image from "next/image";
import { getProductById } from "@/lib/api";
import { useEffect, useState } from "react";
import { Product } from "@/types/global";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/store";
import { FaCheckCircle } from "react-icons/fa";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import { RxCrossCircled } from "react-icons/rx";
import Spinner from "../Spinner";

const ProductInfo = () => {
  const { add } = useCartStore();
  const [item, setItem] = useState<Product | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    const productId = pathname.slice(10);

    const fetchData = async () => {
      try {
        const response = await getProductById(productId);
        const data = response.data;
        setItem(data);
      } catch (error) {
        console.error(`Error fetching product with ID ${productId}:`, error);
      }
    };

    fetchData();
  }, [pathname]);

  if (!item) {
    return <Spinner />;
  }

  const generateRating = (rating: number) => {
    const roundedRating = Math.round(rating);

    switch (roundedRating) {
      case 0:
        return (
          <div className="flex gap-0.5 text-[20px] text-amber-400">
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
          </div>
        );

      case 1:
        return (
          <div className="flex gap-0.5 text-[20px] text-amber-400">
            <TiStarFullOutline />
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
          </div>
        );
      case 2:
        return (
          <div className="flex gap-0.5 text-[20px] text-amber-400">
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
          </div>
        );
      case 3:
        return (
          <div className="flex gap-0.5 text-[20px] text-amber-400">
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarOutline />
            <TiStarOutline />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-0.5 text-[20px] text-amber-400">
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

  const slicedProductId = item.id.slice(0, 8);

  const priceParts = item.discountedPrice.toString().split(".");
  const mainPrice = priceParts[0];
  const decimalPrice = priceParts.length > 1 ? priceParts[1] : "";

  return (
    <div className="px-12 xl:px-36">
      <div className=" mt-6">
        <h1 className="text-4xl font-semibold">{item.title}</h1>
        <div className="md:flex justify-between mt-3 flex-col">
          <div className="flex text-gray-500 items-center">
            <p>
              <span className="font-semibold">Varenummer:</span>{" "}
              {slicedProductId}
            </p>
            <div className="flex gap-2 font-semibold items-center ps-6 pe-2 ">
              {generateRating(item.rating)} {item.rating}
            </div>
            <p> ({item.reviews.length})</p>
            <p className="ms-6 cursor-pointer hover:underline hidden md:block">
              Skriv en anmeldelse
            </p>
          </div>
          <div className="flex gap-6 mt-4 text-gray-500">
            <p className="flex items-center gap-2 cursor-pointer hover:underline">
              <HiMiniArrowsRightLeft size={25} /> Sammenlikn
            </p>
            <p className="flex items-center gap-2 cursor-pointer hover:underline">
              <FiHeart size={25} /> Lagre
            </p>
          </div>
        </div>
        <div className="border-b-2 border-gray-200 w-full mt-6"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-between xl:px-32 my-9">
        <div className="md:pe-8 mb-6 md:mb-0">
          <Image
            className="rounded-md h-[160px] md:w-[500px] md:h-[500px] shadow-md"
            src={item.image.url}
            width={500}
            height={500}
            style={{ objectFit: "cover" }}
            alt={item.title}
          />
        </div>

        <div className="flex flex-col gap-10 border-2 p-8 rounded-lg">
          <div className="flex gap-2">
            <div className="flex">
              <span className="text-xl md:text-4xl font-bold">{mainPrice}</span>
              {decimalPrice && (
                <span className="text-xs md:text-lg font-bold ms-0.5">
                  {decimalPrice}
                </span>
              )}
              <span className="text-lg md:text-4xl">,-</span>
            </div>
            <div className="flex flex-col gap-0.5">
              {item.discountedPrice !== item.price && (
                <>
                  <span className="font-semibold bg-gradient-to-b from-rose-500 to-rose-600 text-gray-100 py-1 px-2 rounded-md">
                    {Math.round(
                      ((item.price - item.discountedPrice) / item.price) * 100
                    )}
                    % Rabatt
                  </span>
                  <span className="ms-1 text-sm font-medium text-gray-500">
                    Før {item.price}
                  </span>
                </>
              )}
            </div>
          </div>
          <p className="font-semibold w-56">{item.description}</p>
          <div className="flex flex-col gap-1 mt-12">
            <div className="flex items-center gap-2">
              <FaCheckCircle size={18} /> På nettlager (100+)
            </div>
            <div className="flex items-center gap-2">
              <RxCrossCircled size={20} /> Ikke tilgjengelig i butikk
            </div>
          </div>
          <button
            onClick={() => add(item)}
            className="flex gap-4 text-sm lg:text-xl font-semibold items-center bg-gradient-to-b from-rose-500 to-rose-600 text-white py-4 px-6 rounded-lg hover:opacity-85 transition duration-300 ease-in-out shadow-md"
          >
            <HiOutlineShoppingBag size={27} />
            Legg i handlekurv
          </button>
        </div>
      </div>

      <h1 className="text-3xl font-semibold mt-16">
        Anmeldelser ({item.reviews.length})
      </h1>
      <div className="border-b-2 border-gray-200 w-full my-4"></div>

      {item.reviews.map((review) => (
        <div className="flex pb-2 border-b-2 mb-2 mt-4" key={review.id}>
          <div className="flex w-10 h-10 items-center justify-center bg-gradient-to-b from-rose-500 to-rose-600 text-gray-100 rounded-full me-4">
            {review.username[0]}{" "}
          </div>
          <div className="flex flex-col w-full">
            <div className="flex gap-2 items-center text-gray-500">
              <p className="font-bold">{review.username}</p>
              <div className="text-xs">•</div>
              <p className="text-sm">3 måneder siden</p>{" "}
            </div>
            <div className="flex gap-2 font-semibold items-center pe-2 ">
              {generateRating(review.rating)} {review.rating}
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className=" text-gray-800">{review.description}</div>
              <div className="flex gap-6 text-gray-400">
                <FaThumbsUp className="cursor-pointer hover:text-gray-500" />
                <FaThumbsDown className="cursor-pointer hover:text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductInfo;
