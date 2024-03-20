import React from "react";

import { HiOutlineMail } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { MdTouchApp } from "react-icons/md";

export default function page() {
  return (
    <>
      <h1 className="text-3xl font-semibold text-center py-6">Kontakt Oss</h1>

      <div className=" px-6 xl:px-36 mb-12">
        <div className="bg-white flex justify-between p-6 rounded-2xl shadow-lg">
          <div className="hidden xl:block bg-blackish text-white p-12 rounded-2xl">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-semibold">Kontakt Informasjon</h1>
              <p className="text-gray-400 text-sm max-w-[450px]">
                We´ll create high-quality linkable content and build at least 40
                high-authority
              </p>
            </div>
            <div className="flex flex-col gap-8 items-center md:items-start font-semibold mt-14">
              <div className="flex gap-6 items-center">
                <LiaPhoneVolumeSolid size={33} />
                (+47)875-462-0127
              </div>
              <div className="flex gap-6 items-center">
                <HiOutlineMail size={33} />
                tokzone@example.com
              </div>
              <div className="flex gap-6 mb-12">
                <GrLocation size={33} />
                Mølleparken 4, 0459 Oslo
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full px-4 md:px-20 py-8">
            <div className="flex flex-col md:flex-row gap-2 md:gap-20 text-sm text-gray-500 font-semibold">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="">
                  Navn:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border-b-2 border-gray-300 rounded px-3 py-2 mb-4 bg-transparent"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="">
                  E-post:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border-b-2 border-gray-300 rounded px-3 py-2 mb-4 bg-transparent"
                />
              </div>
            </div>

            <label
              htmlFor="subject"
              className="mb-2 mt-2 md:mt-1 text-sm text-gray-500 font-semibold"
            >
              Tema:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="border-b-2 border-gray-300 rounded px-3 py-2 mb-4 bg-transparent"
            />

            <label
              htmlFor="message"
              className="text-sm text-blackish font-semibold mt-4"
            >
              Melding:
            </label>
            <textarea
              id="message"
              name="message"
              className="border-b-2 border-blackish rounded px-3 py-2 mb-4 bg-transparent relative"
              rows={4}
              placeholder="Skriv meldingen her"
            ></textarea>

            <button
              type="submit"
              className="md:max-w-[200px] bg-blackish text-white text-sm py-3 font-semibold rounded-lg mt-8 hover:opacity-85 transition duration-300 ease-in-out"
            >
              Send Melding
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
