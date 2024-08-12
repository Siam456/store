import Link from 'next/link';
import {
  DiscordLogoIcon,
  // HeartFilledIcon,
  HeartIcon,
  InstagramLogoIcon,
  Share1Icon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';

import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Controller, useForm } from 'react-hook-form';

type Product = {
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
  dimensions: {
    colors: {
      name: string;
      hexCode: string;
    }[];
    sizes: string[];
    range: string[];
  };
  varieties: {
    color: string;
    size: string;
    range: string;
    price: number;
    salePrice: number;
    availability: {
      inStock: boolean;
      quantity: number;
    };
  }[];
};

export default function Basicinfo({ data }: { data: Product }) {
  const { watch, control, setValue, handleSubmit } = useForm({
    defaultValues: {
      color: '',
      size: '',
      range: '',
      quantity: 1,
    },
  });

  const [price, setPrice] = useState<number>(0);
  const [originalPrice, setOriginalPrice] = useState<number>(0);
  const [isStockAvailable, setIsStockAvailable] = useState<boolean>(false);

  const [selectedImage, setSelectedImage] = useState('./placeholder.webp');

  const [isShareOpen, setIsShareOpen] = useState(false);

  const [isProductOnWishlist, setIsProductOnWishlist] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

    if (wishlist.length > 0 && data) {
      const _isProductOnWishlist = wishlist.some(
        (item: Product) => item._id === data._id,
      );
      setIsProductOnWishlist(_isProductOnWishlist);
    }
  }, [data]);

  useEffect(() => {
    const subscription = watch((value) => {
      if (data?.varieties) {
        const selectedVariety = data?.varieties.find(
          (variety) =>
            variety.color === value.color &&
            variety.size === value.size &&
            variety.range === value.range,
        );

        setOriginalPrice(selectedVariety?.price || data?.originalPrice || 0);
        setPrice(selectedVariety?.salePrice || data?.price || 0);

        if (selectedVariety?.availability?.inStock) {
          setIsStockAvailable(true);
        } else {
          setIsStockAvailable(false);
        }

        // setValue('quantity', selectedVariety?.availability?.quantity || 1);
      }
    });
    return () => subscription.unsubscribe();
  }, [data, watch]);

  useEffect(() => {
    if (data) {
      setSelectedImage(data?.images[0]);
      setOriginalPrice(data?.originalPrice);
      setPrice(data?.price);

      if (data?.quantity > 0) {
        setIsStockAvailable(true);
      } else {
        setIsStockAvailable(false);
      }

      if (data?.dimensions?.colors && data?.dimensions?.colors?.length > 0) {
        setValue('color', data?.dimensions?.colors[0].name);
      }

      if (data?.dimensions?.sizes && data?.dimensions?.sizes?.length > 0) {
        setValue('size', data?.dimensions?.sizes[0]);
      }

      if (data?.dimensions?.range && data?.dimensions?.range?.length > 0) {
        setValue('range', data?.dimensions?.range[0]);
      }
    }
  }, [data, setValue]);

  const handleSelectImage = (image: string) => {
    setSelectedImage(image);
  };

  const addToWishlist = (product: Product) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

    const _isProductOnWishlist = wishlist.some(
      (item: Product) => item._id === product._id,
    );

    if (!_isProductOnWishlist)
      localStorage.setItem(
        'wishlist',
        JSON.stringify([
          {
            _id: product._id,
            title: product.title,
            images: product.images,
            discount: product.discount,
            avgRating: product.avgRating,
            originalPrice: product.originalPrice,
            price: product.price,
            slug: product.slug,
          },
          ...wishlist,
        ]),
      );

    setIsProductOnWishlist(true);
  };

  const removeProductFromWishlist = (product: Product) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const newWishlist = wishlist.filter(
      (item: Product) => item._id !== product._id,
    );
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    setIsProductOnWishlist(false);
  };

  const onSubmit = (_data: any) => {
    // eslint-disable-next-line no-console
    console.log(_data);
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
                <p className="ml-2 text-sm text-muted-foreground">
                  ({data?.avgRating})
                </p>
              </div>
            </div>
          </div>
          <div className="flex text-xl font-semibold">
            {data?.discount > 0 ? (
              <>
                <span className="font-normal text-gray-400 line-through">
                  €${originalPrice?.toFixed(2)}
                </span>
                <span className="ml-2">€{price?.toFixed(2)}</span>
              </>
            ) : (
              <span className="ml-2">€{price?.toFixed(2)}</span>
            )}
          </div>
        </div>

        <div className="my-8 grid gap-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Availability: </span>

            {isStockAvailable ? (
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

        <div className="prose mb-8 text-sm font-light">
          <p>{data?.shortDescription}</p>
        </div>

        <hr />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-8 mt-4 flex flex-col justify-between gap-1"
        >
          {data?.dimensions?.colors && data?.dimensions?.colors?.length > 0 && (
            <div className="relative flex flex-wrap justify-between py-2">
              <div className="grid gap-2">
                <div className="text-sm">
                  Color:{' '}
                  <span className="capitalize text-gray-400">
                    {watch('color') || ''}
                  </span>
                </div>
                <div className="flex gap-2">
                  {data?.dimensions?.colors?.map(
                    (
                      color: {
                        name: string;
                        hexCode: string;
                        imageUrl?: string;
                      },
                      colorIdx: number,
                    ) => (
                      <div key={`${colorIdx + 1}`}>
                        <Controller
                          name="color"
                          control={control}
                          render={({ field }) => (
                            <label
                              style={{
                                display: 'inline-block',
                                background: color.hexCode
                                  .trim()
                                  .toLocaleLowerCase(),
                                border: '2px solid white',
                              }}
                              className={cn(
                                'h-8 w-8 cursor-pointer rounded-full ring-[#6b7280]',
                                color.name.trim().toLocaleLowerCase() ===
                                  field?.value?.trim()?.toLocaleLowerCase()
                                  ? 'ring-2'
                                  : 'ring-0',
                              )}
                              htmlFor={color.name}
                            >
                              <input
                                onClick={(value) => {
                                  field.onChange(value);
                                  if (color.imageUrl) {
                                    setSelectedImage(color.imageUrl);
                                  }
                                }}
                                type="radio"
                                id={color.name}
                                name="color"
                                value={color.name}
                                hidden
                              />{' '}
                            </label>
                          )}
                        />
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          )}

          {data?.dimensions?.sizes && data?.dimensions?.sizes?.length > 0 && (
            <div className="relative flex flex-wrap justify-between py-2">
              <div className="grid gap-2">
                <div className="text-sm">
                  Size:{' '}
                  <span className="capitalize text-gray-400">
                    {watch('size') || ''}
                  </span>
                </div>
                <div className="flex gap-2">
                  {data?.dimensions?.sizes?.map(
                    (size: string, sizeIdx: number) => (
                      <div key={`${sizeIdx + 1}`}>
                        <Controller
                          name="size"
                          control={control}
                          render={({ field }) => (
                            <label
                              htmlFor={`size-${sizeIdx + 1}`}
                              className={cn(
                                'radio-button picker-long cursor-pointer rounded-lg border-2 bg-white px-4 py-2 text-sm',
                                size.trim().toLocaleLowerCase() ===
                                  field?.value?.trim()?.toLocaleLowerCase()
                                  ? 'border-[#6b7280]'
                                  : 'border-white',
                              )}
                            >
                              <input
                                id={`size-${sizeIdx + 1}`}
                                onClick={(value) => {
                                  field.onChange(value);
                                }}
                                type="radio"
                                name="size"
                                value={size}
                                hidden
                              />{' '}
                              {size}
                            </label>
                          )}
                        />
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          )}

          {data?.dimensions?.range && data?.dimensions?.range?.length > 0 && (
            <div className="relative flex flex-wrap justify-between py-2">
              <div className="grid gap-2">
                <div className="text-sm">
                  Range{' '}
                  <span className="capitalize text-gray-400">
                    {watch('range') || ''}
                  </span>
                </div>
                <div className="flex gap-2">
                  {data?.dimensions?.range?.map(
                    (range: string, rangeIdx: number) => (
                      <div key={`${rangeIdx + 1}`}>
                        <Controller
                          name="range"
                          control={control}
                          render={({ field }) => (
                            <label
                              htmlFor={`range-${rangeIdx + 1}`}
                              className={cn(
                                'radio-button picker-long cursor-pointer rounded-lg border-2 bg-white px-4 py-2 text-sm',
                                range.trim().toLocaleLowerCase() ===
                                  field?.value?.trim()?.toLocaleLowerCase()
                                  ? 'border-[#6b7280]'
                                  : 'border-white',
                              )}
                            >
                              <input
                                id={`range-${rangeIdx + 1}`}
                                onClick={(value) => {
                                  field.onChange(value);
                                }}
                                type="radio"
                                name="range"
                                value={range}
                                hidden
                              />{' '}
                              {range}
                            </label>
                          )}
                        />
                      </div>
                    ),
                  )}
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
            <Button
              className="w-full min-w-[150px] md:max-w-xs"
              disabled={!isStockAvailable}
            >
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
            {isProductOnWishlist ? (
              <button
                onClick={() => removeProductFromWishlist(data)}
                className="mt-4 flex cursor-pointer items-center gap-2 text-sm text-gray-400"
              >
                <svg
                  data-v-4847b53f=""
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="icon text-red-400"
                  width="18px"
                  height="18px"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 448a32 32 0 0 1-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8c-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 0 0 9.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64c.54 54.21-18.63 104.26-58.61 153c-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 0 1-18 5.56"
                  />
                </svg>
                <span>Remove from Wishlist</span>
              </button>
            ) : (
              <button
                onClick={() => addToWishlist(data)}
                className="mt-4 flex cursor-pointer items-center gap-2 text-sm text-gray-400"
              >
                <HeartIcon className="h-4 w-4" />
                <span>Add To Wishlist</span>
              </button>
            )}
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
