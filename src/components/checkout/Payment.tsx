"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaRegCreditCard } from "react-icons/fa6";

export default function Payment() {
    const [isActiveVipps, setIsActiveVipps] = useState(false);
    const [isActiveBetalingskort, setIsActiveBetalingskort] = useState(false);
    const [isActiveKlarna, setIsActiveKlarna] = useState(false);
  
    const toggleActiveVipps = () => {
      setIsActiveVipps(!isActiveVipps);
      setIsActiveBetalingskort(false); 
      setIsActiveKlarna(false);
    };
  
    const toggleActiveBetalingskort = () => {
      setIsActiveBetalingskort(!isActiveBetalingskort);
      setIsActiveVipps(false); 
      setIsActiveKlarna(false);
    };
  
    const toggleActiveKlarna = () => {
      setIsActiveKlarna(!isActiveKlarna);
      setIsActiveVipps(false); 
      setIsActiveBetalingskort(false);
    };
  
    return (
      <div className="flex flex-col border border-gray-700 rounded">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-4">
            <div
              className={`w-4 h-4 border border-gray-400 rounded-full mr-2 cursor-pointer ${
                isActiveVipps ? "border-blue-500" : ""
              }`}
              onClick={toggleActiveVipps}
            >
              {isActiveVipps && (
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full ms-0.5 mt-0.5"></div>
              )}
            </div>
            <p>Vipps</p>
          </div>
          <Image
                  className="py-2"
                  src="/Vipps.svg"
                  width={70}
                  height={10}
                  alt="Samsung Watch"
                />
        </div>

        <div className="border border-gray-300"></div>
  
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-4">
            <div
              className={`w-4 h-4 border border-gray-400 rounded-full mr-2 cursor-pointer ${
                isActiveBetalingskort ? "border-blue-500" : ""
              }`}
              onClick={toggleActiveBetalingskort}
            >
              {isActiveBetalingskort && (
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full ms-0.5 mt-0.5"></div>
              )}
            </div>
            <p>Betalingskort</p>
          </div>
          <FaRegCreditCard size={25} className="text-amber-400"/>
        </div>

        <div className="border border-gray-300"></div>
  
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-4">
            <div
              className={`w-4 h-4 border border-gray-400 rounded-full mr-2 cursor-pointer ${
                isActiveKlarna ? "border-blue-500" : ""
              }`}
              onClick={toggleActiveKlarna}
            >
              {isActiveKlarna && (
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full ms-0.5 mt-0.5"></div>
              )}
            </div>
            <p>Klarna</p>
          </div>
          <p>Klarna</p>
        </div>
      </div>
    );
  }
  
