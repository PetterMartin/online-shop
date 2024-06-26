"use client";
import Link from "next/link";

import { BsWatch } from "react-icons/bs";
import { useCartStore } from "@/store";
import { IoIosArrowDown } from "react-icons/io";
import { LiaLaptopSolid } from "react-icons/lia";
import { MdOutlineHeadset } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiRunningShoe, GiDelicatePerfume } from "react-icons/gi";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { setTag } = useCartStore();

  const handleSubmitSearch = (tag: string) => {
    router.push(`/products?tag=${tag}`);
    setTag(tag);
  };

  return (
    <div className="hidden lg:block border-2 border-gray-200">
      <div className="container">
        <div className="flex w-fit gap-4 ms-2 font-medium py-2">
          <div className="flex gap-12 items-center bg-gray-800 py-1.5 px-3 text-white text-sm rounded-lg">
            <div className="flex gap-2 items-center">
              <RxHamburgerMenu /> KATEGORIER{" "}
            </div>
            <IoIosArrowDown />
          </div>
          <button
            onClick={() => handleSubmitSearch("headphones")}
            className="flex gap-2 items-center bg-gray-50 text-gray-700 py-2 px-3 text-sm border-2 border-gray-300 rounded-lg font-semibold cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            <MdOutlineHeadset size={20} /> Hodetelefoner
          </button>
          <button
            onClick={() => handleSubmitSearch("electronics")}
            className="flex gap-2 items-center bg-gray-50 text-gray-700 py-2 px-3 text-sm border-2 border-gray-300 rounded-lg font-semibold cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            <LiaLaptopSolid size={20} /> Elektronikk
          </button>
          <button
            onClick={() => handleSubmitSearch("shoes")}
            className="flex gap-2 items-center bg-gray-50 text-gray-700 py-2 px-3 text-sm border-2 border-gray-300 rounded-lg font-semibold cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            <GiRunningShoe size={20} />
            Løpesko
          </button>
          <button
            onClick={() => handleSubmitSearch("fashion")}
            className="flex gap-2 items-center bg-gray-50 text-gray-700 py-2 px-3 text-sm border-2 border-gray-300 rounded-lg font-semibold cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            <BsWatch size={18} /> Tilbehør
          </button>
          <button
            onClick={() => handleSubmitSearch("perfume")}
            className="flex gap-2 items-center bg-gray-50 text-gray-700 py-2 px-3 text-sm border-2 border-gray-300 rounded-lg font-semibold cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            <GiDelicatePerfume size={18} /> Parfyme
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
