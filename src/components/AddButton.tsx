"use client";
import { useCartStore } from "@/store";
import { toast } from "sonner";
import { Product } from "@/types/global";
import { IoIosClose } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";

import Image from "next/image";

export default function AddButton({ item }: { item: Product }) {
  const { add, toggleVisible } = useCartStore();

  return (
    <button
      className="px-2 bg-gradient-to-b transition-all duration-500 from-rose-500 to-rose-600 text-gray-100 text-sm py-1 max-w-[140px] rounded-lg text-center mt-2 hover:from-rose-400 hover:to-rose-500"
      onClick={() => {
        add(item);
        toast.custom(
          (t) => (
            <div className="relative flex w-[360px] max-w-[90vw] gap-4 rounded-md bg-white py-2 px-4 items-center">
              <button
                onClick={() => toast.dismiss(t)}
                className="absolute right-0 top-0 h-[48px] -translate-y-1/2 translate-x-1/2 "
              >
                <p className="h-6 w-6 rounded-full bg-rose-400 font-light text-white hover:bg-rose-100 flex items-center justify-center">
                  <IoIosClose size={100} />
                </p>
              </button>
              <Image
                src={item.image.url}
                alt={item.image.alt}
                width="100"
                height="100"
                className="h-20 w-1/3 rounded-sm object-cover"
              />
              <div className="flex flex-col justify-between w-2/3">
                <h2 className="font-semibold text-gray-600">
                  {item.title} added
                </h2>
                <button
                  className="h-[48px] rounded-md bg-gradient-to-b from-rose-500 to-rose-600 text-white hover:from-rose-400 hover:to-rose-500 flex justify-center items-center gap-2"
                  onClick={() => {
                    toggleVisible();
                    toast.dismiss(t);
                  }}
                >
                  See cart <HiOutlineShoppingBag />
                </button>
              </div>
            </div>
          ),
          { duration: 4500 }
        );
      }}
    >
      Add to Cart ✚
    </button>
  );
}
