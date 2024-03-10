"use client"

import React, { useState } from "react";

const HeaderTop = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="border-b border-gray-200 py-1.5 bg-rose-600 hidden sm:flex justify-center items-center relative">
          <div className="text-white text-sm mx-auto">
            30% discount on all products special for May!
          </div>
          <div className="text-white text-sm cursor-pointer absolute right-6" onClick={handleClose}>
            X
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderTop;
