"use client";
import { FaCheck } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function SuccessModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timerOne = setTimeout(() => {
      setShowModal(true);
    }, 50);

    const timerTwo = setTimeout(() => {
      setShowModal(false);
    }, 3000);

    return () => {
      clearTimeout(timerOne);
      clearTimeout(timerTwo);
    };
  }, []);

  return (
    <div
      className={`fixed h-screen z-50 top-0 w-screen duration-300 bg-slate-300/50 transition-opacity ${
        showModal ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-white w-80 h-80 gap-2 duration-300 rounded-md absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col items-center justify-center transition-transform ${
          showModal ? "scale-100" : "scale-0"
        }`}
      >
        <h2 className="text-xl">Purchase successful!</h2>
        <p className=" text-gray-700">Taking you back to home page...</p>
        <FaCheck size={60} color="green" />
      </div>
    </div>
  );
}
