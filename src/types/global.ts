export interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}

interface Meta {
  isFirstPage: boolean;
  isLastPage: boolean;
  currentPage: number;
  previousPage: number | null;
  nextPage: number | null;
  pageCount: number;
  totalCount: number;
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
  search: string;
  quantity: () => number;
  add: (product: Product) => void;
  remove: (id: string) => void;
  removeOne: (id: string) => void;
  removeAll: () => void;
  toggleVisible: () => void;
  close: (fn?: () => void) => void;
  setSearch: (query: string) => void;
};

export interface ApiResponse {
  data: Product[];
  meta: Meta;
}
