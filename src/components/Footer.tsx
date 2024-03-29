import React from "react";
import { FaArrowRight, FaCcVisa, FaApplePay, FaPaypal, FaCcAmex, FaCcMastercard } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="px-6 md:px-36 bg-blackish text-gray-100">
      <div className="flex flex-col md:flex-row md:justify-between py-8">
        <div className="flex flex-col gap-4 md:w-1/4 items-center md:items-start">
          <h1 className="font-bold text-2xl ">TOKZONE</h1>
          <div className="flex gap-2 items-center text-sm">
            <LiaPhoneVolumeSolid size={20} />
            (+47)875-462-0127
          </div>
          <div className="flex gap-2 items-center text-sm">
            <HiOutlineMail size={20} />
            tokzone@example.com
          </div>
          <div className="flex gap-2 max-w-[150px] text-sm">
            <GrLocation size={30} />
            Mølleparken 4, 0459 Oslo
          </div>
        </div>
        <div className="hidden md:flex flex-col gap-3 md:w-1/4 items-center md:items-start">
          <h2 className="font-semibold text-md">Information</h2>
          <div className="flex flex-col gap-2 text-gray-400 text-sm">
            <p className="hover:underline cursor-pointer">My account</p>
            <p className="hover:underline cursor-pointer">Login</p>
            <p className="hover:underline cursor-pointer">My Cart</p>
            <p className="hover:underline cursor-pointer">My Wishlist</p>
            <p className="hover:underline cursor-pointer">Checkout</p>
          </div>
        </div>
        <div className="hidden md:flex flex-col gap-3 md:w-1/4 items-center md:items-start">
          <h2 className="font-semibold text-md">Service</h2>
          <div className="flex flex-col gap-2 text-gray-400 text-sm">
            <p className="hover:underline cursor-pointer">About Us</p>
            <p className="hover:underline cursor-pointer">Careers</p>
            <p className="hover:underline cursor-pointer">
              Delivery Information
            </p>
            <p className="hover:underline cursor-pointer">Privacy Policy</p>
            <p className="hover:underline cursor-pointer">Terms & Conditions</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:w-1/4 items-center md:items-start">
          <h2 className="font-semibold text-md ">Subscribe</h2>
          <p className="max-w-[300px] text-sm ">
            Enter your email below to the first to know about new collections.
          </p>
          <div className="w-full flex justify-between items-center bg-neutral-700 mt-2 py-2 px-3 rounded-lg">
            <div className="flex gap-2 items-center">
              <HiOutlineMail size={20} />
              Your Email
            </div>
            <FaArrowRight size={12} />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-4 py-2 border-t-2 border-neutral-700 items-center">
        <div className="flex gap-4 items-center justify-center md:justify-start">
          <FaCcVisa size={27}/>
          <FaCcMastercard size={27}/>
          <FaApplePay size={40}/>
          <FaCcAmex size={27}/>
          <FaPaypal size={22}/>
        </div>
        <div className="lg:me-20 text-gray-200 text-xs">© 2024 Petter&Hallvard All Rights are reserved</div>
        <div className="flex gap-3 items-center justify-center md:justify-end">
          <FaFacebookF
            size={20}
            className="hover:text-neutral-500 cursor-pointer"
          />
          <RiInstagramFill
            size={23}
            className="hover:text-neutral-500 cursor-pointer"
          />
          <FaXTwitter
            size={21}
            className="hover:text-neutral-500 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
