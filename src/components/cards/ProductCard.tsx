import Link from 'next/link';
import React from 'react';
import { useIncreaseViewCountMutation } from '@/redux/features/products/products.api';

export default function ProductCard({
  data,
}: {
  data: {
    _id: string;
    discount: number;
    images: string[];
    slug: string;
    title: string;
    originalPrice: number;
    price: number;
    avgRating: number;
  };
}) {
  const [increaseView] = useIncreaseViewCountMutation();

  const handleIncreaseView = async () => {
    await increaseView(data?._id);
  };
  return (
    <button
      onClick={handleIncreaseView}
      key={`${data?._id}`}
      className="product-card group relative w-full"
    >
      <Link href={`product/${data?.slug}`}>
        {data?.discount !== 0 && (
          <span className="absolute right-2 top-2 z-10 rounded-md bg-red-400 px-2 py-1 text-xs font-semibold text-white">
            {data?.discount.toFixed(0)}%
          </span>
        )}{' '}
        <img
          width={220}
          height={248}
          alt="Woo Ninja"
          loading="eager"
          title="hoodie_2_front.jpg"
          src={data?.images[0]}
          className="rounded-lg object-cover transition-all duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="p-2 text-start">
        <div className="inline-flex">
          {/* review */}
          {Array.from({ length: 5 }).map((_, index) => (
            <svg
              key={`${index + 1}`}
              data-v-4847b53f=""
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="14px"
              height="14px"
              viewBox="0 0 512 512"
              className={`icon ${
                index + 1 <= data?.avgRating
                  ? 'text-yellow-400'
                  : 'text-gray-300'
              }`}
            >
              <path
                fill="currentColor"
                d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
              />
            </svg>
          ))}
        </div>
        <Link className="text-start" href={`product/${data?.slug}`}>
          <p className="mb-2 text-sm font-light leading-tight">{data?.title}</p>
        </Link>
        <div className="flex text-sm font-semibold">
          <span className="font-normal text-gray-400 line-through">
            €{data?.originalPrice.toFixed(2)}
          </span>
          <span className="ml-2">€{data?.price.toFixed(2)}</span>
        </div>
      </div>
    </button>
  );
}
