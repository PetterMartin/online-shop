"use client";
import { useCartStore } from "@/store";
import { toast } from "sonner";
import { Product } from "@/types/global";

export default function AddButton({ item }: { item: Product }) {
  const { add, toggleVisible } = useCartStore();

  return (
    <button
      className="px-2 bg-gradient-to-b transition-all duration-500 from-rose-500 to-rose-600 text-gray-100 text-sm py-1 max-w-[140px] rounded-lg text-center mt-2 hover:from-rose-400 hover:to-rose-500"
      onClick={() => {
        add(item);
        toast.success(`${item.title} added to cart`, {
          action: {
            label: "See cart",
            onClick: () => toggleVisible(),
          },
          duration: 4500,
        });
      }}
    >
      Add to Cart ✚
    </button>
  );
}
