import Image from "next/image";
import React from 'react'

const Testimonial = () => {
  return (
    <div>
      <div className="container pt-16 pb-16 grid-cols-2">
        <div className="grid lg:grid-cols-[300px,1fr] gap-4">
          <div className="bg-gradient-to-b from-black to-gray-700 rounded-2xl grid place-items-center p-6 lg:p-0">
            <div className="text-center flex flex-col items-center gap-6">
              <Image
                className=""
                src="/Samsung-Logo.webp"
                width={150}
                height={150}
                alt="Samsung Logo"
              />
              <Image
                className="py-2"
                src="/Samsung-Watch.png"
                width={210}
                height={210}
                alt="Samsung Watch"
              />
              <button className="text-gray-900 bg-gray-100 py-2 px-4 font-bold rounded-3xl text-sm">View More</button>
            </div>
          </div>

          <div className="bg-red-600 bg-[url(/Samsung.jpeg)] bg-cover h-[500px] rounded-2xl grid place-items-center">
            <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
              <button className="bg-blackish text-white p-2 rounded-md">
                25% DISCOUNT
              </button>
              <h2 className="font-extrabold text-2xl text-[#272727]">
                Summer Collection
              </h2>
              <p className="text-gray-500 text-[20px]">
                Starting @ $20 <b>Shop Now</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;