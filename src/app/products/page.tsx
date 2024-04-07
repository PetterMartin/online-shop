import React from "react";
import { getAllProducts } from "@/lib/api";

import ProductsList from "@/components/productsList";

const NewProducts = async () => {
  const data = await getAllProducts();
  const products = data.data;

  return (
    <div>
      <div className="container flex flex-col gap-4 pt-16">
        <div className="grid grid-cols-2 place-items-center sm:place-items-start sm:grid-cols-3 lg:grid-col-3 xl:grid-cols-4 gap-x-4 gap-y-8 xl:gap-x-20 xl:gap-y-10">
          <ProductsList products={products} />
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
