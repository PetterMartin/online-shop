import Link from "next/link";
import ProductCard from "./ProductCard";
import { getAllProducts } from "@/lib/api";

const NewProducts = async () => {
  const data = await getAllProducts();
  const products = data.data;

  return (
    <div>
      <div className="container flex flex-col gap-8 pt-16">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-3 h-7 bg-rose-500 rounded"></div>
            <h2 className="font-medium text-xl md:text-3xl">Populære Produkter</h2>

          </div>
          <div className="me-4 mb-1 hover:underline cursor-pointer">
            <Link href={`/products`}>See All</Link>
          </div>
        </div>

        <div className="relative">
          <div className="flex overflow-x-scroll gap-2 sm:justify-between">
            {[products[16], products[18], products[13], products[9]].map(
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
