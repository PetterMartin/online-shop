import React from "react";
import ContactForm from "@/components/ContactForm";
import { HiOutlineMail } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

export default function page() {
  return (
    <>
      <h1 className="text-3xl font-semibold text-center py-6">Kontakt Oss</h1>

      <div className=" px-6 xl:px-36 mb-12">
        <div className="bg-white border-2 border-gray-300 flex justify-between p-6 rounded-2xl">
          <div className="hidden xl:block bg-blackish text-white py-12 px-8 rounded-xl">
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl font-semibold">Trenger du hjelp?</h1>
              <p className="text-gray-400 text-sm max-w-[450px]">
              Trenger du hjelp, så er kundesenteret vårt behjelpelig med å finne en løsning.
              </p>
            </div>
            <div className="flex flex-col gap-8 items-center md:items-start font-semibold mt-14">
              <div className="flex gap-6 items-center">
                <LiaPhoneVolumeSolid size={33} />
                (+47)875-462-0127
              </div>
              <div className="flex gap-6 items-center">
                <HiOutlineMail size={33} />
                priceclub@example.com
              </div>
              <div className="flex gap-6 mb-12">
                <GrLocation size={33} />
                Mølleparken 4, 0459 Oslo
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
