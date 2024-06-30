import React from 'react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <div>
      {' '}
      <div className="relative mx-auto">
        <img
          width={1400}
          height={800}
          alt="Hero_image"
          loading="eager"
          className="h-[420px] w-full object-cover lg:h-[560px] xl:h-[640px]"
          src="./hero-4.webp"
        />
        <div className="container absolute inset-0 flex flex-col items-start justify-center bg-gradient-to-l from-gray-200 p-8 md:bg-none">
          <h1 className="text-3xl font-bold md:mb-4 md:text-4xl lg:text-6xl">
            Just landed.
          </h1>
          <h2 className="text-lg font-bold md:mb-4 lg:text-3xl">
            The New Year Collection
          </h2>
          <div className="text-md mb-8 max-w-sm text-balance font-light lg:max-w-md">
            <p>
              Our latest collection is here. Discover the latest trends and
              styles for the new year.
            </p>
          </div>

          <Button className="mt-4">Shop now</Button>
        </div>
      </div>
    </div>
  );
}
