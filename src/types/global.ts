export interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: {
    url: string;
    alt: string;
  };
  rating: number;
  tags: string[];
  reviews: Review[];
}

export interface CartItem extends Product {
  count: number;
}

export type CartStore = {
  cart: CartItem[];
  total: number;
  visible: boolean;
  quantity: () => number;
  add: (product: Product) => void;
  remove: (id: string) => void;
  removeOne: (id: string) => void;
  removeAll: () => void;
  toggleVisible: () => void;
};
