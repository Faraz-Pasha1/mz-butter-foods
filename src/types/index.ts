export type ProductCategory = 'butter' | 'cream' | 'ghee' | 'chocolate';

export interface ProductVariant {
  id: string;
  label: string; // e.g. "500g", "1kg", "250g"
  price: number;
  originalPrice?: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number; // 1-5
  date: string;
  comment: string;
  verified?: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  images: string[]; // at least 2 images: primary and secondary hover
  price: number;
  originalPrice?: number;
  variants: ProductVariant[];
  badge?: string;
  rating: number;
  reviewsCount: number;
  reviews: Review[];
  about: string[];
  benefits: string[];
  uses: string[];
  faqs: { question: string; answer: string }[];
  landscapeBanner: string;
  portraitFeature: string;
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  cartItemId: string; // unique ID combining product.id and variant.id
  product: Product;
  selectedVariant: ProductVariant;
  quantity: number;
}

export interface Customer {
  id: string;
  name: string;
  category: string;
  location: string;
  image: string;
  since: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  author: string;
}

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  category: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  difficulty: "Easy" | "Medium" | "Advanced";
  featuredProductId: string;
  featuredProductName: string;
  featuredProductSlug: string;
  image: string;
  description: string;
  ingredients: string[];
  instructions: { step: number; title: string; detail: string }[];
  chefTips: string[];
  nutrition?: { calories: string; butterfat: string; protein: string };
}

