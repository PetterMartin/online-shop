import React from "react";
import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/lib/api";

const NewProducts = async () => {
  const data = await getAllProducts();
  const products = data.data;

  return (
    <div>
      <div className="container flex flex-col gap-4 pt-16">
        <div className="grid grid-cols-2 place-items-center sm:place-items-start sm:grid-cols-3 lg:grid-col-3 xl:grid-cols-4 gap-x-4 gap-y-8 xl:gap-x-20 xl:gap-y-10">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
