"use client"

import React, { useState } from "react";
import { FaHeart, FaHouse } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";
import { HiMiniUser } from "react-icons/hi2";
import { AiFillAppstore } from "react-icons/ai";

const MobileNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveLink = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="navigation lg:hidden fixed bottom-0">
        <ul>
          <li
            className={`list ${activeIndex === 0 ? "active" : ""}`}
            onClick={() => handleActiveLink(0)}
          >
            <a href="#">
              <span className="icon">
                <FaHouse />
              </span>
            </a>
          </li>
          <li
            className={`list ${activeIndex === 1 ? "active" : ""}`}
            onClick={() => handleActiveLink(1)}
          >
            <a href="#">
              <span className="icon">
                <FaHeart />
              </span>
            </a>
          </li>
          <li
            className={`list ${activeIndex === 2 ? "active" : ""}`}
            onClick={() => handleActiveLink(2)}
          >
            <a href="#">
              <span className="icon">
                <IoBag />
              </span>
            </a>
          </li>
          <li
            className={`list ${activeIndex === 3 ? "active" : ""}`}
            onClick={() => handleActiveLink(3)}
          >
            <a href="#">
              <span className="icon">
                <AiFillAppstore />
              </span>
            </a>
          </li>
          <li
            className={`list ${activeIndex === 4 ? "active" : ""}`}
            onClick={() => handleActiveLink(4)}
          >
            <a href="#">
              <span className="icon">
                <HiMiniUser />
              </span>
            </a>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
