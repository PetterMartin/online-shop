import { ApiResponse, Product, SingleProductResponse } from "@/types/global";

export async function getAllProducts() {
  try {
    const res = await fetch("https://v2.api.noroff.dev/online-shop");
    const data: ApiResponse = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function getProductById(productId: string) {
  try {
    const res = await fetch(
      `https://v2.api.noroff.dev/online-shop/${productId}`
    );
    const data: SingleProductResponse = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching product with ID ${productId}:`, error);
    throw error;
  }
}
