"use client";
import { useCartStore } from "@/store";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function Cart() {
  const {
    cart,
    add,
    remove,
    removeAll,
    removeOne,
    total,
    toggleVisible,
    visible,
  } = useCartStore();

  return (
    <>
      <div
        className={` fixed top-0 z-40 overflow-auto left-0 w-full h-full bg-gray-700 opacity-0 transition-opacity duration-500 ${
          visible ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleVisible}
      ></div>
      <div
        className={`fixed top-0 z-50 flex flex-col right-0 h-[calc(100dvh-85px)] lg:h-[100dvh]  overflow-hidden justify-between w-[800px] max-w-[97vw] bg-gray-100 px-2 py-6 md:p-8 transition-all duration-500 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        }`}
      >
        <div className="flex justify-between">
          <h2 className="text-2xl font-medium mb-2">Handlekurv</h2>
          <button onClick={toggleVisible} className="text-2xl">
            <IoClose />
          </button>
        </div>
        <div className="overflow-y-auto flex-grow">
          <ul className="flex flex-col gap-4 min-w-full">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-6 border-2 rounded-md overflow-hidden"
              >
                <div className="flex gap-4 items-center px-1 md:px-4">
                  <div className="h-20 w-20">
                    <Image
                      className="h-full w-full object-cover"
                      style={{ objectFit: "cover" }}
                      src={item.image.url}
                      width={70}
                      height={70}
                      alt={item.image.alt}
                    />
                  </div>
                  <div className="grid gap-2 py-1 md:py-2">
                    <h2 className="font-semibold">{item.title}</h2>
                    <div className="flex gap-4 items-center">
                      <button
                        className="h-[48px] w-[48px] text-2xl border rounded-md hover:border-gray-500 transition duration-300 ease-in-out"
                        onClick={() => add(item)}
                      >
                        +
                      </button>
                      <p className="text-gray-500 font-light text-lg">
                        {item.count}
                      </p>
                      <button
                        onClick={() => removeOne(item.id)}
                        className="h-[48px] w-[48px] text-2xl border rounded-md hover:border-gray-500 transition duration-300 ease-in-out"
                      >
                        -
                      </button>
                      <button
                        className="h-[48px] w-[48px] text-xl "
                        onClick={() => remove(item.id)}
                      >
                        <MdDelete />
                      </button>
                    </div>
                    <div className="font-semibold">
                      {item.discountedPrice} kr
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
        {cart.length > 0 ? (
          <div className="grid gap-4 pt-4  w-full">
            <button
              className="border bg-rose-100 p-2 rounded-md flex justify-center items-center gap-2 h-[48px] hover:border-red-600 transition duration-300 ease-in-out"
              onClick={removeAll}
            >
              Tøm handlekurv <MdDelete />
            </button>
            <p className="font-semibold text-xl">
              Å betale: {total.toFixed(2)} kr
            </p>

            <Link
              onClick={toggleVisible}
              className="h-[48px] group font-medium bg-green-200 rounded-md px-2 flex items-center gap-2 justify-center"
              href={"/checkout"}
            >
              <div className="flex gap-2 items-center group-hover:mx-4 transition-all duration-300 ease-in-out">
                <p className="flex">Gå til kassen</p>
                <HiOutlineShoppingBag />{" "}
              </div>
              <p className="ms-4">{">>"}</p>
            </Link>
          </div>
        ) : (
          <div className="grid gap-4">
            <h2>Ingen varer i handlekurven</h2>
            <Link
              onClick={toggleVisible}
              className="h-[48px] font-medium border-b-2 w-fit  px-2 flex items-end transition duration-300 hover:border-black"
              href={"/products"}
            >
              Se produkter
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
