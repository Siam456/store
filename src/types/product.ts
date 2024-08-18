export type Product = {
  _id: string;
  title: string;
  images: string[];
  discount: number;
  slug: string;
  avgRating: number;
  originalPrice: number;
  price: number;
  quantity: number;
  sku: string;
  description: string;
  category: string[];
  shortDescription: string;
  colors: {
    name: string;
    hexCode: string;
    imageUrl: string;
  }[];
  dimensions: {
    label: string;
    values: string[];
  }[];
  varieties: {
    color: string;
    dimensions: {
      [key: string]: string;
    };
    discount: number;
    price: number;
    salePrice: number;
    availability: {
      inStock: boolean;
      quantity: number;
    };
  }[];
};

export type ProductAttribute = {
  price: number;
  originalPrice: number;
  discount: number;
  quantity: number;
  isStockAvailable: boolean;
  selectedImage: string;
  isShareOpen: boolean;
  isProductOnWishlist: boolean;
  color: string;
  dimensions: { label: string; value: string }[];
};
