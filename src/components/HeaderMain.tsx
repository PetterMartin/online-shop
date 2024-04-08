"use client";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { useCartStore } from "@/store";
import { useRouter } from "next/navigation";
import Image from "next/image";

const HeaderMain = () => {
  const router = useRouter();
  const { quantity, setSearch, toggleVisible } = useCartStore();
  const itemCount = quantity();

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    const searchValue = e.currentTarget.search.value;
    router.push(`/products?search=${searchValue}`);
  };

  const handleSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  return (
    <div className="pt-6 pb-3">
      <div className="container sm:flex justify-between items-center">
        <Link href={"/"} passHref>
          <Image
            src="/PriceClub.svg"
            alt="Storeshop Logo"
            width={200}
            height={50}
          />
        </Link>

        <form
          onSubmit={handleSubmitSearch}
          className="w-full mx-4 sm:w-[300px] md:w-[70%] relative border-2 rounded-xl border-gray-300 flex items-center"
        >
          <button>
            <BsSearch className="ml-4 mr-2 text-gray-500" size={16} />
          </button>
          <input
            onChange={handleSearchChange}
            name="search"
            required
            className="p-2 rounded-lg w-full bg-transparent"
            type="text"
            placeholder="Search for product"
          />
        </form>

        <div className="hidden lg:flex items-center gap-6 text-gray-500">
          <div className="flex gap-4">
            <button className="relative cursor-pointer">
              <FiHeart size={27} />
              <div className="bg-gradient-to-b from-rose-400 to-rose-500 rounded-full absolute top-0 right-0 w-[16px] h-[16px] text-[10px] text-white grid place-items-center translate-x-1 -translate-y-1"></div>
            </button>

            <button onClick={toggleVisible}>
              <div className="relative cursor-pointer">
                <HiOutlineShoppingBag size={27} />
                <div className="bg-gradient-to-b from-rose-400 to-rose-500 rounded-full absolute top-0 right-0 w-[16px] h-[16px] text-[10px] text-white grid place-items-center translate-x-1 -translate-y-1">
                  {itemCount}
                </div>
              </div>
            </button>
          </div>

          <div className="flex flex-col">
            <p className="text-[16px] flex items-center text-gray-600 font-semibold">
              Tom Jones
            </p>
            <p className="text-[12px] font-semibold">Tom123@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="container hidden lg:flex justify-between items-center px-12 mt-3 text-sm font-semibold">
        <div className="flex gap-3 text-gray-500 ms-48">
          <p className="cursor-pointer hover:underline">Wireless Earbuds</p>
          <p className="cursor-pointer hover:underline">Black Watch</p>
          <p className="cursor-pointer hover:underline">Pink Shoes</p>
          <p className="cursor-pointer hover:underline">Gaming Mouse</p>
        </div>
        <div className="flex gap-3">
          <div className="flex gap-1 text-gray-500 cursor-pointer">
            <GrLocation size={18} />
            <p className="text-[13px]">Leveres til</p>
          </div>
          <div className="flex gap-1 text-gray-600 cursor-pointer">
            <p>Hjem Tom</p>
            <IoIosArrowDown className="mt-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
