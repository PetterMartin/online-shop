"use client";

import React, { useEffect, useState } from "react";
import { FaHeart, FaHouse } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";
import { HiMiniUser } from "react-icons/hi2";
import { AiFillAppstore } from "react-icons/ai";
import { useCartStore } from "@/store";
import Link from "next/link";

const MobileNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevActive, setPrevActive] = useState(0);
  const { toggleVisible, quantity, visible } = useCartStore();
  const itemCount = quantity();

  useEffect(() => {
    if (!visible && prevActive !== 2) setActiveIndex(prevActive);
  }, [visible]);

  const handleActiveLink = (index: number) => {
    if (activeIndex === 2) toggleVisible();
    setActiveIndex(index);
    setPrevActive(activeIndex);
  };

  return (
    <>
      <div className="navigation lg:hidden fixed bottom-0 z-50">
        <ul>
          <li
            className={`list ${activeIndex === 0 && !visible ? "active" : ""}`}
            onClick={() => {
              handleActiveLink(0);
            }}
          >
            <Link href={"/"} className="nav-link">
              <span className="icon">
                <FaHouse />
              </span>
            </Link>
          </li>
          <li
            className={`list ${activeIndex === 1 && !visible ? "active" : ""}`}
            onClick={() => handleActiveLink(1)}
          >
            <button className="nav-link">
              <span className="icon">
                <FaHeart />
              </span>
            </button>
          </li>
          <li
            className={`list ${activeIndex === 2 || visible ? "active" : ""}`}
            onClick={() => {
              handleActiveLink(2);
            }}
          >
            <button className="nav-link" onClick={toggleVisible}>
              <span className="icon">
                <IoBag />
                <div className="bg-gradient-to-b from-rose-400 to-rose-500 rounded-full absolute top-0 right-0 w-[16px] h-[16px] text-[10px] text-white grid place-items-center translate-x-1 -translate-y-1">
                  {itemCount}
                </div>
              </span>
            </button>
          </li>
          <li
            className={`list ${activeIndex === 3 && !visible ? "active" : ""}`}
            onClick={() => handleActiveLink(3)}
          >
            <button className="nav-link">
              <span className="icon">
                <AiFillAppstore />
              </span>
            </button>
          </li>
          <li
            className={`list ${activeIndex === 4 && !visible ? "active" : ""}`}
            onClick={() => handleActiveLink(4)}
          >
            <button className="nav-link">
              <span className=" icon">
                <HiMiniUser />
              </span>
            </button>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
