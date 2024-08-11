import { useRouter } from 'next/router';
import React from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useGetProductBySlugQuery } from '@/redux/features/products/products.api';

import Basicinfo from '@/components/sections/product/Basicinfo';
import ReviewSection from '@/components/sections/product/ReviewAndDescription';
import RecomandedProduct from '@/components/sections/product/RecomandedProduct';

export default function Product() {
  const router = useRouter();
  const { slug } = router.query;
  const { data, isLoading, isError } = useGetProductBySlugQuery(slug as string);

  if (isError)
    return (
      <section className="container relative py-6 xl:max-w-7xl">
        <div>Something went wrong</div>
      </section>
    );

  return (
    <section className="container relative py-6 xl:max-w-7xl">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {!isLoading && data && data?.category?.length > 0 && (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink href={`/product-category/${data?.category[0]}`}>
                  {data?.category[0]}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          )}
          {!isLoading && (
            <BreadcrumbItem>
              <BreadcrumbPage>{data?.title || ''}</BreadcrumbPage>
            </BreadcrumbItem>
          )}
        </BreadcrumbList>
      </Breadcrumb>
      {isLoading ? (
        <div className="my-32 flex w-full items-center justify-center">
          Loading...
        </div>
      ) : (
        <>
          <Basicinfo data={data} />
          <ReviewSection data={data} />
          <div className="lg:hidden">
            <RecomandedProduct data={data?.youMayLike?.slice(0, 4) || []} />
          </div>
          <div className="max-lg:hidden">
            <RecomandedProduct data={data?.youMayLike || []} />
          </div>
        </>
      )}
    </section>
  );
}

Product.layout = 'base';
