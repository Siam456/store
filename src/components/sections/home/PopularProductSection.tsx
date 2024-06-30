import React from 'react';
import Link from 'next/link';
import { useGetTopProductsQuery } from '@/redux/features/products/products.api';
import ProductCard from '@/components/cards/ProductCard';

export default function PopularProductSection() {
  const { data, isLoading } = useGetTopProductsQuery('');

  return (
    <section className="container my-16">
      <div className="mx-auto flex items-end justify-between">
        <h2 className="text-lg font-semibold md:text-2xl">Popular Products</h2>
        <Link className="text-violet-700 hover:underline" href="/products">
          View all
        </Link>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4 lg:hidden lg:grid-cols-5">
            {data
              .slice(0, 4)
              ?.map(
                (product: {
                  _id: string;
                  images: string[];
                  title: string;
                  slug: string;
                  discount: number;
                  avgRating: number;
                  originalPrice: number;
                  price: number;
                }) => <ProductCard key={product._id} data={product} />,
              )}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-8 max-lg:hidden md:grid-cols-4 lg:grid-cols-5">
            {data?.map(
              (product: {
                _id: string;
                images: string[];
                title: string;
                slug: string;
                discount: number;
                avgRating: number;
                originalPrice: number;
                price: number;
              }) => <ProductCard key={product._id} data={product} />,
            )}
          </div>
        </>
      )}
    </section>
  );
}
