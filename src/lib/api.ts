import { ApiResponse } from "@/types/global";

export async function getAllProducts() {
  try {
    const res = await fetch("https://v2.api.noroff.dev/online-shop");
    const data: ApiResponse = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-throw the error to handle it elsewhere if needed
  }
}
