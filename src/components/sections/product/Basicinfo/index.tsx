import Link from 'next/link';
import {
  DiscordLogoIcon,
  HeartIcon,
  InstagramLogoIcon,
  Share1Icon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';

import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Basicinfo({
  data,
}: {
  data: {
    _id: string;
    title: string;
    images: string[];
    discount: number;
    avgRating: number;
    originalPrice: number;
    price: number;
    quantity: number;
    sku: string;
    description: string;
    category: string[];
    colors: string[];
    sizes: string[];
    range: string[];
  };
}) {
  const [selectedImage, setSelectedImage] = useState('./loading-img.jpg');
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedrange, setSelectedRange] = useState<string | null>(null);

  const [isShareOpen, setIsShareOpen] = useState(false);

  useEffect(() => {
    if (data) {
      setSelectedImage(data.images[0]);

      if (data.colors.length > 0) {
        setSelectedColor(data.colors[0]);
      }

      if (data.sizes.length > 0) {
        setSelectedSize(data.sizes[0]);
      }

      if (data.range.length > 0) {
        setSelectedRange(data.range[0]);
      }
    }
  }, [data]);

  const handleSelectImage = (image: string) => {
    setSelectedImage(image);
  };

  const handleSelectColor = (color: string) => {
    setSelectedColor(color);
  };

  const handleSelectSize = (size: string) => {
    setSelectedSize(size);
  };

  const handleSelectRange = (range: string) => {
    setSelectedRange(range);
  };
  return (
    <div className="mt-6 flex flex-col gap-10 md:flex-row md:justify-between lg:gap-24">
      <div className="relative flex-1">
        {data?.discount !== 0 && (
          <span className="absolute right-2 top-2 z-10 rounded-md bg-red-400 px-2 py-1 text-xs font-semibold text-white">
            {data?.discount.toFixed(0)}%
          </span>
        )}{' '}
        <img
          width={640}
          height={640}
          src={selectedImage}
          alt={data?.title}
          className="w-full min-w-[350px] rounded-xl object-contain"
        />
        <div className="gallery-images my-4">
          {data?.images.map((image: string, imageIdx: number) => (
            <button
              key={`${imageIdx + 1}`}
              onClick={() => handleSelectImage(image)}
              className="cursor-pointer"
            >
              <img
                src={image}
                alt={data?.title}
                className="h-20 w-20 rounded-xl object-cover"
              />
            </button>
          ))}
        </div>
      </div>
      <div className="w-full md:py-2 lg:max-w-md xl:max-w-lg">
        <div className="mb-4 flex justify-between">
          <div className="flex-1">
            <h1 className="font-sesmibold mb-2 flex flex-wrap items-center gap-2 text-2xl">
              {data?.title}
            </h1>
            <div className="inline-flex items-center">
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
          </div>
          <div className="flex text-xl font-semibold">
            {data?.discount > 0 && (
              <>
                <span className="font-normal text-gray-400 line-through">
                  €${data?.originalPrice?.toFixed(2)}
                </span>
                <span className="ml-2">€{data?.price?.toFixed(2)}</span>
              </>
            )}
          </div>
        </div>

        <div className="my-8 grid gap-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Availability: </span>

            {data?.quantity > 0 ? (
              <span className="text-green-600">In Stock</span>
            ) : (
              <span className="text-red-600">Out Of Stock</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">SKU:</span>
            <span>{data?.sku}</span>
          </div>
        </div>

        <div className="prose mb-8 font-light">
          <p>{data?.description}</p>
        </div>

        <hr />

        <form>
          {selectedColor && (
            <div className="mb-8 mt-4 flex flex-col justify-between gap-1">
              <div className="relative flex flex-wrap justify-between py-2">
                <div className="grid gap-2">
                  <div className="text-sm">
                    Color:{' '}
                    <span className="capitalize text-gray-400">
                      {selectedColor}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {data?.colors.map((color: string, colorIdx: number) => (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleSelectColor(color);
                        }}
                        key={`${colorIdx + 1}`}
                        className={`h-8 w-8 rounded-full ${color.trim().toLowerCase() === selectedColor.trim().toLocaleLowerCase() && 'border-2 border-[#6b7280]'}  bg-${color.trim().toLocaleLowerCase()} bg-${color.trim().toLocaleLowerCase()}-500 shadow-inner`}
                        style={{
                          boxShadow: 'inset 0 0 0 2px #F3F4F6',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedSize && (
            <div className="mb-8 mt-4 flex flex-col justify-between gap-1">
              <div className="relative flex flex-wrap justify-between py-2">
                <div className="grid gap-2">
                  <div className="text-sm">
                    Size:{' '}
                    <span className="capitalize text-gray-400">
                      {selectedSize}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {data?.sizes.map((size: string, sizeIdx: number) => (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleSelectSize(size);
                        }}
                        key={`${sizeIdx + 1}`}
                        className={` radio-button picker-long rounded-lg border-2 px-4 py-2 text-sm ${size.trim().toLowerCase() === selectedSize.trim().toLocaleLowerCase() ? ' border-[#6b7280]' : 'border-white'} bg-background shadow-inner`}
                        style={{
                          boxShadow: 'inset 0 0 0 2px #F3F4F6',
                        }}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedrange && (
            <div className="mb-8 mt-4 flex flex-col justify-between gap-1">
              <div className="relative flex flex-wrap justify-between py-2">
                <div className="grid gap-2">
                  <div className="text-sm">
                    Range{' '}
                    <span className="capitalize text-gray-400">
                      {selectedrange}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {data?.range.map((range: string, rangeIdx: number) => (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleSelectRange(range);
                        }}
                        key={`${rangeIdx + 1}`}
                        className={` radio-button picker-long rounded-lg border-2 px-4 py-2 text-sm ${range.trim().toLowerCase() === selectedrange.trim().toLocaleLowerCase() ? ' border-[#6b7280]' : 'border-white'} bg-background shadow-inner`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="fixed bottom-0 left-0 z-10 mt-12 flex w-full items-center gap-4 bg-white bg-opacity-90 p-4 md:static md:bg-transparent md:p-0">
            <Input
              type="number"
              placeholder="Quantity"
              defaultValue={1}
              className="flex h-12 min-h-full w-20 items-center justify-center gap-4 rounded-lg border bg-white py-2.5 text-left focus:outline-none"
              min={1}
              max={data?.quantity}
            />
            <Button className="w-full" disabled={data?.quantity === 0}>
              Add to Cart
            </Button>
          </div>
        </form>
        <div>
          <div className="my-8 grid gap-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Categories:</span>
              <div>
                {data?.category?.length > 0 &&
                  data?.category.map((cat: string, catIdx: number) => (
                    <span key={`${catIdx + 1}`}>
                      <Link
                        href={`/product-category/${cat}`}
                        className="text-primary"
                      >
                        {cat}
                      </Link>
                      {catIdx < Number(data?.category.length) - 1 && (
                        <span>,&nbsp;</span>
                      )}
                    </span>
                  ))}
              </div>
            </div>
            <hr />
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="mt-4 flex cursor-pointer items-center gap-2 text-sm text-gray-400">
              <HeartIcon className="h-4 w-4" />
              <span>Add To Wishlist</span>
            </button>
            {isShareOpen ? (
              <div className="mt-4 flex cursor-pointer items-center gap-2 text-sm text-gray-400">
                <Link href="/">
                  <TwitterLogoIcon className="h-4 w-4" />
                </Link>
                <Link href="/">
                  <DiscordLogoIcon className="h-4 w-4" />
                </Link>
                <Link href="/">
                  <InstagramLogoIcon className="h-4 w-4" />
                </Link>
              </div>
            ) : (
              <button
                onClick={() => setIsShareOpen(true)}
                className="mt-4 flex cursor-pointer items-center gap-2 text-sm text-gray-400"
              >
                <Share1Icon className="h-4 w-4" />
                <span>Share</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
