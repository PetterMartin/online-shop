import React from "react";
import { Suspense } from "react";
import { getAllProducts } from "@/lib/api";

import ProductsList from "@/components/products/productsList";
import Spinner from "@/components/Spinner";

const NewProducts = async () => {
  const data = await getAllProducts();
  const products = data.data;

  return (
    <div>
      <div className="container flex flex-col gap-4 pt-16">
        <Suspense
          fallback={
            <div className="w-full flex justify-center h-[100px]">
              <Spinner></Spinner>
            </div>
          }
        >
          <ProductsList products={products} />
        </Suspense>
      </div>
    </div>
  );
};

export default NewProducts;
