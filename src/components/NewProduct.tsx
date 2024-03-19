import React from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";

const productsData = [
  {
    id: 1,
    img: "/shirt-1.jpg",
    title: "Shirt",
    desc: "Pure Garment Dyed Cotton Shirt",
    rating: 4,
    price: "45.00",
  },
  {
    id: 2,
    img: "/sports-1.jpg",
    title: "Sports",
    desc: "Trekking & Running Shoes - Black",
    rating: 3,
    price: "58.00",
  },
  {
    id: 3,
    img: "/watch-1.jpg",
    title: "Watches",
    desc: "Smart Watches Vital Plus",
    rating: 4,
    price: "100.00",
  },
  {
    id: 4,
    img: "/watch-2.jpg",
    title: "Watches",
    desc: "Pocket Watch Leather Pouch",
    rating: 4,
    price: "120.00",
  },
];

const NewProducts = () => {
  return (
    <div>
      <div className="container flex flex-col gap-4 pt-16">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-3 h-6 bg-rose-500 rounded"></div>
            <h2 className="font-medium text-2xl">Special Discount</h2>
            <p className="hidden md:block font-medium text-gray-500">Ends in</p>
            <div className="hidden md:flex text-md font-light">
              <span className="flex font-bold text-md text-rose-500 gap-2 items-center">
                <div className="flex justify-center w-10 p-2 bg-gradient-to-b from-rose-500 to-rose-600 rounded-md text-gray-100">
                  03
                </div>
                :
                <div className="flex justify-center w-10 p-2 bg-gradient-to-b from-rose-500 to-rose-600 rounded-md text-gray-100">
                  15
                </div>
                :
                <div className="flex justify-center w-10 p-2 bg-gradient-to-b from-rose-500 to-rose-600 rounded-md text-gray-100">
                  25
                </div>
              </span>
            </div>
          </div>
          <div className="me-4 mb-1 hover:underline cursor-pointer">
            <Link href={`/products`}>See All</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => (
            <Link key={index} href={`/products/${item.id}`}>
              <ProductCard
                img={item.img}
                title={item.title}
                desc={item.desc}
                rating={item.rating}
                price={item.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
