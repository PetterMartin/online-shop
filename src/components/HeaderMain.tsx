import { BsSearch } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";

const HeaderMain = () => {
  return (
    <div className="pt-6 pb-3">
      <div className="container sm:flex justify-between items-center">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
          TOKZONE
        </div>

        <div className="w-full mx-4 sm:w-[300px] md:w-[70%] relative border-2 rounded-xl border-gray-300 flex items-center">
          <BsSearch className="ml-4 mr-2 text-gray-500" size={16} />
          <input
            className="p-2 rounded-lg w-full bg-transparent"
            type="text"
            placeholder="Search for product"
          />
        </div>

        <div className="hidden lg:flex items-center gap-6 text-gray-500">
          <div className="flex gap-4">
            <div className="relative text-[30px] cursor-pointer">
              <FiHeart />
              <div className="bg-rose-500 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                0
              </div>
            </div>

            <div className="relative text-[30px] cursor-pointer">
              <HiOutlineShoppingBag />
              <div className="bg-rose-500 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                0
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="bg-red-600 rounded-full w-8 h-8 flex"></div>
            <p className="text-[15px] flex items-center text-gray-600 font-bold">
              Hallvard
            </p>
          </div>
        </div>
      </div>
      <div className="container hidden lg:flex justify-between items-center px-12 mt-3 text-sm font-semibold">
        <div className="flex gap-3 text-gray-500 ms-48">
          <p className="cursor-pointer hover:underline">Laptop Asus</p>
          <p className="cursor-pointer hover:underline">HP Xiaomi</p>
          <p className="cursor-pointer hover:underline">Iphone 15</p>
          <p className="cursor-pointer hover:underline">Vision Pro</p>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-1 text-gray-400 cursor-pointer">
            <GrLocation size={18} />
            <p>Deliver to</p>
          </div>
          <div className="flex gap-1 text-gray-600 cursor-pointer">
            <p>Home Hallvard</p>
            <IoIosArrowDown className="mt-0.5"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
