import Payment from "@/components/checkout/Payment";
import Image from "next/image";
import { AiFillLock } from "react-icons/ai";

export default function Checkout() {
  return (
    <>
      <h1 className="text-center text-2xl mt-4 mb-10 font-semibold">
        Handlekurv
      </h1>

      <div className="px-6 md:px-36">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col w-full md:pe-12">
            <div className="flex flex-col border border-gray-600 rounded p-2">
              <div className="flex gap-16 font-semibold items-center text-sm pb-2">
                <p className="text-gray-700">Navn:</p>
                <p>Hallvard Benan</p>
              </div>
              <div className="border border-gray-300"></div>
              <div className="flex font-semibold gap-7 items-center text-sm pt-2">
                <p className="text-gray-700">Leveres til:</p>
                <p>PostNord Post Butikk</p>
              </div>
            </div>

            <h1 className="font-semibold text-lg mt-8 mb-4">
              Betalingsmetoder
            </h1>

            <Payment />

            <div className="border border-gray-300 my-8"></div>

            <button className="bg-blackish text-white text-sm py-3 font-semibold rounded-lg mb-12 tracking-wider hover:opacity-85 transition duration-300 ease-in-out">
              Kjøp nå
            </button>
          </div>

          <div className="flex flex-col w-full md:ps-12">
            <div className="flex flex-col items-center">
              <p className="text-gray-700 text-sm">Total amount</p>
              <h1 className="font-bold text-3xl py-3">kr 2498.00</h1>
              <p className="text-gray-500 text-xs flex items-center gap-1">
                <AiFillLock size={12} className="text-green-600" /> Secure
                Payment{" "}
              </p>
            </div>

            <div className="border border-gray-300 my-12"></div>

            <div className="flex flex-col gap-6">
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <div className="border border-gray-400 rounded-lg">
                    <Image
                      className="py-2"
                      src="/Samsung-Watch.png"
                      width={60}
                      height={60}
                      alt="Samsung Watch"
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold">Samsung Watch</h2>
                    <p className="text-gray-500 font-light ">Variant: 42</p>
                  </div>
                </div>
                <div className="font-semibold">kr 1249.00</div>
              </div>
            </div>

            <div className="border-t-2 border-b-2 py-4 mt-6">
              <div className="flex justify-between">
                <p className="font-semibold text-sm">Delsum</p>
                <div>kr 2498.00</div>
              </div>
              <div className="flex justify-between my-2">
                <div>
                  <p className="text-sm font-semibold">Levering</p>
                  <p className="text-sm font-semibold text-gray-500">
                    PostNord Post Butikk
                  </p>
                </div>
                <div>kr 0.00</div>
              </div>
              <div className="flex justify-between mt-6">
                <p className="text-sm font-semibold">MVA</p>
                <div>kr 260.00</div>
              </div>
            </div>
            <div className="flex justify-between py-4">
              <p className="font-semibold">Sluttsum</p>
              <div className="font-semibold text-lg">kr 2498.00</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
