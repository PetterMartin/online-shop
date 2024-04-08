import Link from "next/link";
import React from "react";
import {  BsWatch } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { LiaLaptopSolid } from "react-icons/lia";
import { MdOutlineHeadset } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiRunningShoe, GiDelicatePerfume } from "react-icons/gi";

const Navbar = () => {
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
          <Link
            className="flex gap-2 items-center bg-gray-50 text-gray-700 py-2 px-3 text-sm border-2 border-gray-300 rounded-lg font-semibold cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"

            href="#"
          >
            <MdOutlineHeadset size={20} /> Hodetelefoner
          </Link>
          <Link

            className="flex gap-2 items-center bg-gray-50 text-gray-700 py-2 px-3 text-sm border-2 border-gray-300 rounded-lg font-semibold cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"

            href="#"
          >
            <LiaLaptopSolid size={20}/> Elektronikk
          </Link>
          <Link

            className="flex gap-2 items-center bg-gray-50 text-gray-700 py-2 px-3 text-sm border-2 border-gray-300 rounded-lg font-semibold cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"

            href="#"
          >
            <GiRunningShoe size={20}/>Løpesko
          </Link>
          <Link

            className="flex gap-2 items-center bg-gray-50 text-gray-700 py-2 px-3 text-sm border-2 border-gray-300 rounded-lg font-semibold cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"

            href="#"
          >
            <BsWatch size={18}/> Tilbehør
          </Link>
          <Link
            className="flex gap-2 items-center bg-gray-50 text-gray-700 py-2 px-3 text-sm border-2 border-gray-300 rounded-lg font-semibold cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
            href="#"
          >
            <GiDelicatePerfume size={18}/> Parfyme
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
