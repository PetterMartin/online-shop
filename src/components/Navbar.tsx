import Link from "next/link";
import React from "react";
import { BsPhone, BsUsbC } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { LiaLaptopSolid } from "react-icons/lia";
import { MdOutlineHeadset } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="hidden lg:block border-2 border-gray-200">
      <div className="container">
        <div className="flex w-fit gap-4 ms-2 font-medium py-2">
          <div className="flex gap-12 items-center bg-gray-800 py-1.5 px-3 text-white text-sm rounded-lg">
            <div className="flex gap-2 items-center">
              <RxHamburgerMenu /> CATEGORIES{" "}
            </div>
            <IoIosArrowDown />
          </div>
          <Link
            className="flex gap-2 items-center bg-gray-50 text-gray-700 py-1.5 px-3 text-sm border-2 border-gray-300 rounded-lg font-semibold cursor-pointer hover:bg-gray-100"
            href="#"
          >
            <MdOutlineHeadset size={20} /> Electronics
          </Link>
          <Link
            className="flex gap-2 items-center bg-gray-50 text-gray-700 py-1.5 px-3 text-sm border-2 border-gray-300 rounded-lg font-semibold cursor-pointer hover:bg-gray-100"
            href="#"
          >
            <LiaLaptopSolid size={20}/> Computer & Laptop
          </Link>
          <Link
            className="flex gap-2 items-center bg-gray-50 text-gray-700 py-1.5 px-3 text-sm border-2 border-gray-300 rounded-lg font-semibold cursor-pointer hover:bg-gray-100"
            href="#"
          >
            <BsPhone size={20}/> Phone & Tablet
          </Link>
          <Link
            className="flex gap-2 items-center bg-gray-50 text-gray-700 py-1.5 px-3 text-sm border-2 border-gray-300 rounded-lg font-semibold cursor-pointer hover:bg-gray-100"
            href="#"
          >
            <BsUsbC size={20}/> Harddisk & Flashdisk
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
