"use client";

import { getProductById } from "@/lib/api";
import { useEffect, useState } from "react";
import { Product } from "@/types/global";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/store";

const ProductInfo = () => {
  const { add } = useCartStore();
  const [item, setItem] = useState<Product | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    const productId = pathname.slice(10);

    const fetchData = async () => {
      try {
        const response = await getProductById(productId);
        const data = response.data; // Assuming response is an object containing a 'data' property
        setItem(data); // Set item to the entire product object
      } catch (error) {
        console.error(`Error fetching product with ID ${productId}:`, error);
      }
    };

    fetchData();
  }, [pathname]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-semibold">{item.tags}</h2>
        <h1 className="text-3xl font-semibold">{item.title}</h1>
        <div className="flex gap-4">
          <div>Stars</div>
          <div>{item.rating}</div>
          <div>See Reviews</div>
          <div>Arrow</div>
        </div>
      </div>
      <div className="flex gap-8 items-center">
        <h1 className="text-3xl font-semibold">{`$ ${item.price}`}</h1>
        <p className="text-sm font-semibold">Free Shipping Worldwide</p>
      </div>
      <button
        onClick={() => add(item)}
        className="w-48 bg-gradient-to-b from-rose-500 to-rose-600 text-white py-2 px-4 rounded-lg"
      >
        Add to Cart
      </button>
      <p>Product Code: {item.id}</p>
      <p className="font-semibold w-96">{item.description}</p>
    </div>
  );
};

export default ProductInfo;
