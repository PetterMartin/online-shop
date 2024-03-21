import { create } from "zustand";
import { Product, CartItem, CartStore } from "./types/global";

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  visible: false,
  total: 0,
  add: (product) => {
    set((state) => ({
      cart: updateCart(product, state.cart),
      total: calculateTotal(updateCart(product, state.cart)),
    }));
  },
  remove: (id) => {
    set((state) => ({
      cart: removeFromCart(id, state.cart),
      total: calculateTotal(removeFromCart(id, state.cart)),
    }));
  },
  removeOne: (id) => {
    set((state) => ({
      cart: decreaseFromCart(id, state.cart),
      total: calculateTotal(decreaseFromCart(id, state.cart)),
    }));
  },
  removeAll: () =>
    set({
      cart: [],
      total: 0,
    }),

  toggleVisible: () =>
    set((state) => ({
      visible: !state.visible,
    })),

  quantity: () => get().cart.reduce((curr, acc) => (curr += acc.count), 0),
}));

function updateCart(product: Product, cart: CartItem[]): CartItem[] {
  const cartItem = { ...product, count: 1 } as CartItem;

  const productOnCart = cart.some((item) => item.id === product.id);

  if (!productOnCart) return [...cart, cartItem];
  else {
    return cart.map((item) =>
      item.id === product.id ? { ...item, count: item.count + 1 } : item
    );
  }
}

function decreaseFromCart(id: string, cart: CartItem[]): CartItem[] {
  return cart
    .map((item) =>
      item.id === id ? { ...item, count: Math.max(0, item.count - 1) } : item
    )
    .filter((item) => item.count > 0);
}

function removeFromCart(id: string, cart: CartItem[]) {
  return cart.filter((item) => item.id !== id);
}

function calculateTotal(cart: CartItem[]): number {
  const total = cart
    .reduce((total, item) => total + item.discountedPrice * item.count, 0)
    .toFixed(2);

  return parseFloat(total);
}
