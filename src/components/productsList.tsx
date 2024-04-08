"use client";
import { Product } from "@/types/global";
import ProductCard from "@/components/ProductCard";
import { useCartStore } from "@/store";
type IProducts = Product[];

export default function ProductsList({ products }: { products: IProducts }) {
  const { search, tag, setSearch, setTag } = useCartStore();

  const productsToDisplay = products
    .filter((p) => (tag ? p.tags.includes(tag) : true))
    .filter((p) =>
      p.title.toLowerCase().trim().includes(search.toLowerCase().trim())
    );

  return (
    <>
      <div className="flex gap-6">
        <h1 className="">
          {search && `Search: ${search}`} {search && tag && " | "}{" "}
          {tag && ` Tag: ${tag}`} {!search && !tag && "All items"}
        </h1>
        {(tag || search) && (
          <button
            className="underline"
            onClick={() => {
              setSearch("");
              setTag("");
            }}
          >
            View all
          </button>
        )}
      </div>
      <div className="grid grid-cols-2 place-items-center sm:place-items-start sm:grid-cols-3 lg:grid-col-3 xl:grid-cols-4 gap-x-4 gap-y-8 xl:gap-x-20 xl:gap-y-10">
        {productsToDisplay.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
