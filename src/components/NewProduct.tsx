import Link from "next/link";
import ProductCard from "./ProductCard";
import { getAllProducts } from "@/lib/api";

const NewProducts = async () => {
  const data = await getAllProducts();
  const products = data.data;

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

        <div className="relative">
          <div className="flex overflow-x-scroll gap-2 sm:justify-between">
            {[products[0], products[1], products[2], products[3]].map(
              (item) => (
                <div key={item.id}>
                  <ProductCard item={item} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
