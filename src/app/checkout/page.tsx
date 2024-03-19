import Payment from "@/components/checkout/Payment";
import Image from "next/image";

export default function Checkout() {
  return (
    <>
      <h1 className="text-center text-2xl my-4 font-semibold">Checkout Page</h1>

      <div className="flex justify-between px-6 md:px-36">
        <div className="flex flex-col w-full pe-12">
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

          <Payment />
        </div>

        <div className="flex flex-col w-full ps-12">
          <div className="flex flex-col gap-6">
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
              <div className="flex mt-2 gap-20">
                <div>
                  <h2 className="font-semibold">Samsung Watch</h2>
                  <p className="text-gray-500 font-light ">Variant: 42</p>
                </div>
                <div className="font-semibold">kr 1249.00</div>
              </div>
            </div>

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
              <div className="flex mt-2 gap-20">
                <div>
                  <h2 className="font-semibold">Samsung Watch</h2>
                  <p className="text-gray-500 font-light ">Variant: 42</p>
                </div>
                <div className="font-semibold">kr 1249.00</div>
              </div>
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
    </>
  );
}
