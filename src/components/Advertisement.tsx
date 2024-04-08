import Image from "next/image";
import React from "react";

const Advertisement = () => {
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
              <button className="text-gray-900 bg-gray-100 py-2 px-4 font-bold rounded-3xl text-sm">
                Kjøp her
              </button>
            </div>
          </div>

          <div className="bg-[url(/Xbox.webp)] bg-cover h-[500px] rounded-2xl grid place-items-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
