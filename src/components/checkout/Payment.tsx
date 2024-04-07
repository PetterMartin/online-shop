"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaRegCreditCard } from "react-icons/fa6";

export default function Payment({
  onAcceptTerms,
}: {
  onAcceptTerms: () => void;
}) {
  const [isActiveVipps, setIsActiveVipps] = useState(true);
  const [isActiveBetalingskort, setIsActiveBetalingskort] = useState(false);
  const [isActiveKlarna, setIsActiveKlarna] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

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

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    onAcceptTerms();
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
        <FaRegCreditCard size={25} className="text-yellow-600" />
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
        <Image
          className="py-2"
          src="/Klarna.svg"
          width={70}
          height={10}
          alt="Samsung Watch"
        />
      </div>
      <div className="flex items-center p-4 mb-4 gap-4">
        <div
          className={`w-4 h-4 border border-blue-500 flex items-center justify-center mr-2 cursor-pointer ${
            isChecked ? "bg-blue-500" : ""
          }`}
          onClick={toggleCheckbox}
        >
          {isChecked && (
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          )}
        </div>
        <p className="text-sm relative">
          Jeg bekrefter at jeg har lest og forstått salgsbetingelsene
          <span className="text-orange-500 absolute"> *</span>
        </p>
      </div>
    </div>
  );
}
