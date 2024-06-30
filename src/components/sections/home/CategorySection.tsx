import React from 'react';
import Link from 'next/link';
import { useGetTopCatagoriesQuery } from '@/redux/features/categories/categories.api';
import CategoryCard from '@/components/cards/CategoryCard';

export default function CategorySection() {
  const { data, isLoading } = useGetTopCatagoriesQuery('');

  return (
    <section className="container my-16">
      <div className="flex items-end justify-between">
        <h2 className="text-lg font-semibold md:text-2xl">Shop by Category</h2>
        <Link className="text-violet-700 hover:underline" href="/categories">
          View all
        </Link>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="mt-8 grid grid-cols-2 justify-center gap-4 md:grid-cols-3 lg:grid-cols-6">
          {data?.map(
            (category: { _id: string; icon: string; title: string }) => (
              <CategoryCard
                key={category._id}
                _id={category._id}
                icon={category.icon}
                title={category.title}
              />
            ),
          )}
        </div>
      )}
    </section>
  );
}
