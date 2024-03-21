import React from "react";
import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/lib/api";

const NewProducts = async () => {
  const data = await getAllProducts();
  const products = data.data;

  return (
    <div>
      <div className="container flex flex-col gap-4 pt-16">
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {products.map((item) => (
            <div key={item.id}>
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
