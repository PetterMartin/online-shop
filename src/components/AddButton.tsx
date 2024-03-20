"use client";
import { useCartStore } from "@/store";

export default function AddButton({ item }) {
  const { add } = useCartStore();

  return (
    <button className="" onClick={() => add(item)}>
      Add to Cart ✚
    </button>
  );
}
