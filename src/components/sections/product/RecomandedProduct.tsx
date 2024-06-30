import React from 'react';
import ProductCard from '@/components/cards/ProductCard';

export default function RecomandedProduct({
  data,
}: {
  data: {
    _id: string;
    images: string[];
    title: string;
    slug: string;
    discount: number;
    avgRating: number;
    originalPrice: number;
    price: number;
    description: string;
  }[];
}) {
  return (
    <div className="my-32">
      <div className="mb-4 text-xl font-semibold">You May Also Like</div>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
        {data.map((item) => (
          <ProductCard key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
}
