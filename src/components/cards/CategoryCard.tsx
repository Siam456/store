import React from 'react';
import Link from 'next/link';

export default function CategoryCard(category: {
  _id: string;
  title: string;
  icon: string;
}) {
  const { _id, title, icon } = category;
  return (
    <Link
      className="item group relative flex w-full snap-x snap-mandatory justify-center overflow-hidden rounded-xl border border-white"
      key={_id}
      href={`/categories/${_id}`}
    >
      <>
        <img
          src={icon}
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
          alt={title}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent opacity-50" />
        <span className=" absolute bottom-0 z-10 mb-2 mt-auto text-sm font-semibold capitalize text-white md:mb-4 md:text-base">
          {title}
        </span>
      </>
    </Link>
  );
}
