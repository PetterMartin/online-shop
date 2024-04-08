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
        <div className="border-b border-rose-200 py-1.5 bg-gradient-to-b from-rose-500 to-rose-600 hidden sm:flex justify-center items-center relative">
          <div className="text-white text-sm mx-auto">
          Bruk koden &quot;NOROFF&quot; for 30% rabatt på alle varer ut April!
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
