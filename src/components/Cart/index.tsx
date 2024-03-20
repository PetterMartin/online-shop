"use client";
import { useCartStore } from "@/store";

export default function Cart() {
  const {
    cart,
    add,
    remove,
    removeAll,
    removeOne,
    total,
    toggleVisible,
    visible,
  } = useCartStore();

  return (
    <>
      <div
        className={`overflow-hidden fixed top-0 z-40 left-0 w-full h-full bg-gray-700 opacity-0 transition-opacity duration-500 ${
          visible ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleVisible}
      ></div>
      <div
        className={`fixed top-0 z-50 right-0 bg-gray-500 p-8 transition-all duration-500 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button onClick={toggleVisible} className="text-3xl">
            x
          </button>
        </div>
        <ul className="flex flex-col gap-4 w-72">
          {cart.map((item) => (
            <li
              key={item.id}
              className="border-2 p-2 flex gap-6 items-center justify-center"
            >
              <div>{item.count}</div>
              <div>
                <h2>{item.title}</h2>
                <p>{item.discountedPrice}</p>
              </div>
              <div className="flex gap-2">
                <button className="border-2" onClick={() => add(item)}>
                  +
                </button>
                <button onClick={() => removeOne(item.id)}>-</button>
              </div>
              <button onClick={() => remove(item.id)}>X</button>
            </li>
          ))}
        </ul>
        Total: {total.toFixed(2)}$
        <button
          className="border-2 border-red-600 p-2 rounded-md"
          onClick={removeAll}
        >
          Clear cart
        </button>
      </div>
    </>
  );
}
