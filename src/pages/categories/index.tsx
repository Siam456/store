import React from 'react';
import { useGetAllCatagoriesQuery } from '@/redux/features/categories/categories.api';
import PageLayout from '@/layouts/PageLayout';
import CategoryCard from '@/components/cards/CategoryCard';

export default function Categories() {
  const { data, isLoading } = useGetAllCatagoriesQuery('');
  return (
    <PageLayout>
      <div className="my-6 grid grid-cols-2 justify-center gap-4 md:grid-cols-3 lg:grid-cols-6">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data?.map(
            (category: { _id: string; icon: string; title: string }) => (
              <CategoryCard
                key={category._id}
                _id={category._id}
                icon={category.icon}
                title={category.title}
              />
            ),
          )
        )}
      </div>
    </PageLayout>
  );
}

Categories.layout = 'base';
