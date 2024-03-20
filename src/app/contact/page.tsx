import React from "react";

import { HiOutlineMail } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

export default function page() {
  return (
    <>
      <h1 className="text-3xl font-semibold text-center">Get In Touch</h1>

      <div className="flex justify-between px-6 md:px-36 mb-12">
        <div className="bg-blackish text-white p-12 rounded-2xl">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold">Kontakt Informasjon</h1>
            <p className="text-gray-400 text-sm max-w-[350px]">
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

        <div className="flex flex-col w-full px-20 py-8">
          <div className="flex gap-20">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2">
                Your Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-gray-300 rounded px-3 py-2 mb-4"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2">
                Your Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 rounded px-3 py-2 mb-4"
              />
            </div>
          </div>

          <label htmlFor="subject" className="mb-2">
            Your Subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="border border-gray-300 rounded px-3 py-2 mb-4"
          />

          <label htmlFor="message" className="mb-2">
            Your Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="border border-gray-300 rounded px-3 py-2 mb-4"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </div>
      </div>
    </>
  );
}
