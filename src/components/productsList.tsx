"use client";
import { Product } from "@/types/global";
import ProductCard from "@/components/ProductCard";
import { useCartStore } from "@/store";
type IProducts = Product[];

export default function ProductsList({ products }: { products: IProducts }) {
  const { search } = useCartStore();
  const productsToDisplay = products.filter((p) =>
    p.title.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  return (
    <>
      {" "}
      {productsToDisplay.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </>
  );
}
