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
      className="flex items-center gap-2 px-3 py-2 bg-gradient-to-b from-rose-500 to-rose-600 font-semibold shadow-md transition duration-300 text-sm ease-in-out text-gray-100 rounded-lg text-center mt-2 hover:opacity-85"
      onClick={() => {
        add(item);
        toast.custom(
          (t) => (
            <div className="relative flex w-[360px] max-w-[90vw] gap-4 rounded-md bg-white py-2 px-4 items-center">
              <button
                onClick={() => toast.dismiss(t)}
                className="absolute right-0 top-0 h-[48px] -translate-y-1/2 translate-x-1/2 "
              >
                <p className="h-6 w-6 rounded-full bg-rose-400 font-light text-white hover:opacity-85 transition duration-300 ease-in-out flex items-center justify-center">
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
              <div className="flex flex-col gap-2 justify-between w-2/3">
                <h2 className="font-semibold text-gray-600 text-sm">
                  <span className="text-gray-800 text-base font-bold">{item.title}</span> lagt til
                </h2>
                <button
                  className="h-[48px] rounded-md bg-gradient-to-b from-rose-500 to-rose-600 text-white hover:opacity-85 flex justify-center items-center gap-2 transition duration-300 ease-in-out"
                  onClick={() => {
                    toggleVisible();
                    toast.dismiss(t);
                  }}
                >
                  Se handlekurv <HiOutlineShoppingBag />
                </button>
              </div>
            </div>
          ),
          { duration: 4500 }
        );
      }}
    >
      Legg i handlekurv <HiOutlineShoppingBag size={16}/>
    </button>
  );
}
