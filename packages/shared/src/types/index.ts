export interface Store {
  id: string;
  name: string;
  logo: string;
  website: string;
  categories: string[];
}

export interface DiscountCode {
  id: string;
  code: string;
  store: string;
  discount: string;
  description: string;
  expiryDate: string;
  verified: boolean;
  voteCount: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  favorites: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
}
