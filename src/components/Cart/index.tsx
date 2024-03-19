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
    <div
      className={`bg-gray-500 fixed top-0 right-0 opacity-0 transition-all duration-500 translate-x-full p-8 ${
        visible && "opacity-100 translate-x-1"
      }`}
    >
      <div className="flex justify-end">
        <button onClick={toggleVisible} className="text-3xl">
          x
        </button>
      </div>
      <ul className={`flex  flex-col gap-4 w-72  `}>
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
      total:
      {total.toFixed(2)}$
      <button
        className="border-2 border-red-600 p-2 rounded-md"
        onClick={removeAll}
      >
        Clear cart
      </button>
    </div>
  );
}
