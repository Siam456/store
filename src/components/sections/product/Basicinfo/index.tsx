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
// import { Controller, useForm } from 'react-hook-form';
import { Product, ProductAttribute } from '@/types/product';
import ColorSelector from './ColorSelector';

export default function Basicinfo({ data }: { data: Product }) {
  // const { watch, register, control, setValue, handleSubmit } = useForm({
  //   defaultValues: {
  //     color: '',
  //     discount: 0,
  //     dimensions: [{ label: '', value: '' }],
  //     quantity: 1,
  //   },
  // });

  const [productAttribute, setProductAttribute] = useState<ProductAttribute>({
    price: 0,
    originalPrice: 0,
    discount: 0,
    quantity: 0,
    isStockAvailable: false,
    selectedImage: 'https://source.unsplash.com/random/640x640',
    isShareOpen: false,
    isProductOnWishlist: false,
    color: '',
    dimensions: [{ label: '', value: '' }],
  });

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    if (wishlist.length && data) {
      const isProductOnWishlist = wishlist.some(
        (item: Product) => item._id === data._id,
      );
      setProductAttribute((prev) => ({ ...prev, isProductOnWishlist }));
    }
  }, [data]);

  // const changeProductAttribute = ({
  //   type,
  //   value,
  // }: {
  //   type: string;
  //   value:
  //     | string
  //     | {
  //         label: string;
  //         value: string;
  //       };
  // }) => {
  //   if (!data?.varieties) return;

  //   // const selectedVariety = data.varieties.find(
  //   //   (variety) =>
  //   //     variety.color === productAttribute?.color &&
  //   //     productAttribute?.dimensions &&
  //   //     productAttribute?.dimensions.every(
  //   //       (v) => v && variety.dimensions[v.label || ''] === v.value,
  //   //     ),
  //   // );

  //   const selectedVariety = data.varieties.find(
  //     (variety) =>
  //       variety.color === productAttribute?.color &&
  //       productAttribute?.dimensions &&
  //       productAttribute?.dimensions.every(
  //         (v) => v && variety.dimensions[v.label] === v.value,
  //       ),
  //   );

  //   setProductAttribute((prev) => ({
  //     ...prev,
  //     originalPrice: selectedVariety?.price || data?.originalPrice || 0,
  //     price: selectedVariety?.salePrice || data?.price || 0,
  //     quantity: selectedVariety?.availability?.quantity || data?.quantity || 0,
  //     discount: selectedVariety?.discount || data?.discount || 0,
  //     isStockAvailable:
  //       selectedVariety?.availability?.inStock ||
  //       (data?.quantity || 0) > 0 ||
  //       false,
  //   }));
  // };

  useEffect(() => {
    if (productAttribute) {
      const selectedVariety = data.varieties.find(
        (variety) =>
          variety.color === productAttribute?.color &&
          productAttribute?.dimensions &&
          productAttribute?.dimensions.every(
            (v) => v && variety.dimensions[v.label] === v.value,
          ),
      );

      setProductAttribute((prev) => ({
        ...prev,
        originalPrice: selectedVariety?.price || data?.originalPrice || 0,
        price: selectedVariety?.salePrice || data?.price || 0,
        quantity:
          selectedVariety?.availability?.quantity || data?.quantity || 0,
        discount: selectedVariety?.discount || data?.discount || 0,
        isStockAvailable:
          selectedVariety?.availability?.inStock ||
          (data?.quantity || 0) > 0 ||
          false,
      }));
    }
  }, [productAttribute, data]);

  useEffect(() => {
    if (data) {
      let dimensions: { label: string; value: string }[] = [];

      if (data?.dimensions?.length > 0) {
        dimensions = data.dimensions.map((dimension) => ({
          label: dimension.label,
          value: dimension.values[0],
        }));
      }
      setProductAttribute((prev) => ({
        ...prev,
        price: data.price,
        originalPrice: data.originalPrice,
        discount: data.discount,
        quantity: data.quantity,
        isStockAvailable: data.quantity > 0,
        color: data.colors[0]?.name || '',
        dimensions,
        selectedImage:
          data?.images[0] || 'https://source.unsplash.com/random/640x640',
      }));
    }
  }, [data]);

  const handleSelectImage = (image: string) => {
    setProductAttribute((prev) => ({ ...prev, selectedImage: image }));
  };

  const handleWishlistUpdate = (product: Product, action: 'add' | 'remove') => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    let newWishlist;

    if (
      action === 'add' &&
      !wishlist.some((item: Product) => item._id === product._id)
    ) {
      newWishlist = [
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
      ];
      setProductAttribute((prev) => ({ ...prev, isProductOnWishlist: true }));
    } else if (action === 'remove') {
      newWishlist = wishlist.filter(
        (item: Product) => item._id !== product._id,
      );
      setProductAttribute((prev) => ({ ...prev, isProductOnWishlist: false }));
    }

    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
  };

  // eslint-disable-next-line no-unused-vars
  const onSubmit = (_data: any) => {
    // eslint-disable-next-line no-console
    console.log(_data);
    // eslint-disable-next-line no-console
    console.log(productAttribute);
  };

  return (
    <div className="mt-6 flex flex-col gap-10 md:flex-row md:justify-between lg:gap-24">
      <div className="relative flex-1">
        {data?.discount !== 0 && (
          <span className="absolute right-2 top-2 z-10 rounded-md bg-red-400 px-2 py-1 text-xs font-semibold text-white">
            {productAttribute.discount.toFixed(0)}%
          </span>
        )}{' '}
        <img
          width={640}
          height={640}
          src={productAttribute.selectedImage}
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
                  €${productAttribute.originalPrice?.toFixed(2)}
                </span>
                <span className="ml-2">
                  €{productAttribute.price?.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="ml-2">
                €{productAttribute.price?.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        <div className="my-8 grid gap-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Availability: </span>

            {productAttribute.isStockAvailable ? (
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
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="mb-8 mt-4 flex flex-col justify-between gap-1"
        >
          {data.colors?.length > 0 && (
            <div className="relative flex flex-wrap justify-between py-2">
              <div>
                <div className="mb-2 text-sm">
                  Color:{' '}
                  <span className="capitalize text-gray-400">
                    {productAttribute.color}{' '}
                  </span>
                </div>
                <div className="flex gap-2">
                  {data.colors.map(
                    (
                      color: { name: string; hexCode: string },
                      colorIdx: number,
                    ) => (
                      <div key={`${colorIdx + 1}`}>
                        <ColorSelector
                          color={color}
                          productAttribute={productAttribute}
                          setProductAttribute={setProductAttribute}
                        />
                      </div>
                    ),
                  )}
                </div>
              </div>
              <div className="flex items-center">
                {data.colors.map(
                  (
                    color: {
                      name: string;
                      imageUrl: string;
                    },
                    colorIdx,
                  ) => (
                    <div className="overflow-hidden" key={`${colorIdx + 1}`}>
                      {color.imageUrl &&
                        color.name === productAttribute.color && (
                          <img
                            src={color.imageUrl}
                            alt={color.name}
                            className="block max-h-24 max-w-24 rounded-lg"
                          />
                        )}
                    </div>
                  ),
                )}
              </div>
            </div>
          )}

          {data?.dimensions && data?.dimensions?.length > 0 && (
            <div className="relative flex flex-wrap justify-between gap-6 py-2">
              {data?.dimensions?.map(
                (
                  dimension: { label: string; values: string[] },
                  dIdx: number,
                ) => (
                  <div key={`${dIdx + 1}`} className="grid gap-3">
                    <div className="text-sm">
                      {dimension.label}:{' '}
                      <span className="capitalize text-gray-400">
                        {productAttribute.dimensions[dIdx]?.value || ''}{' '}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {dimension?.values?.map(
                        (value: string, valueIdx: number) => (
                          <div className="mb-3" key={`${valueIdx + 1}`}>
                            <label
                              htmlFor={`dimensions-${value + 1}`}
                              className={cn(
                                'radio-button picker-long h-12 cursor-pointer rounded-lg border-2 bg-white px-4 py-2 text-sm',
                                value.trim().toLocaleLowerCase() ===
                                  productAttribute?.dimensions[
                                    dIdx
                                  ]?.value?.toLocaleLowerCase()
                                  ? 'border-[#6b7280]'
                                  : 'border-white',
                                'custom-height', // Add a custom class for height
                              )}
                              style={{ height: '50px' }} // Inline style for height
                            >
                              <input
                                id={`dimensions-${value + 1}`}
                                onClick={(_dValue) => {
                                  setProductAttribute((prev) => ({
                                    ...prev,
                                    dimensions: prev.dimensions.map(
                                      (d, idx) => {
                                        if (idx === dIdx) {
                                          return {
                                            label: dimension.label,
                                            value,
                                          };
                                        }
                                        return d;
                                      },
                                    ),
                                  }));
                                }}
                                type="radio"
                                value={value}
                                hidden
                              />{' '}
                              {value}
                            </label>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                ),
              )}
            </div>
          )}

          <div className="fixed bottom-0 left-0 z-10 mt-12 flex w-full items-center gap-4 bg-white bg-opacity-90 p-4 md:static md:bg-transparent md:p-0">
            <Input
              type="number"
              name="quantity"
              onChange={(e) => {
                setProductAttribute((prev) => ({
                  ...prev,
                  quantity: Number(e.target.value),
                }));
              }}
              placeholder="Quantity"
              defaultValue={1}
              className="flex h-12 min-h-full w-20 items-center justify-center gap-4 rounded-lg border bg-white py-2.5 text-left focus:outline-none"
              min={1}
              max={productAttribute.quantity}
            />
            <Button
              className="w-full min-w-[150px] md:max-w-xs"
              disabled={!productAttribute.isStockAvailable}
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
            {productAttribute.isProductOnWishlist ? (
              <button
                onClick={() => handleWishlistUpdate(data, 'remove')}
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
                onClick={() => handleWishlistUpdate(data, 'add')}
                className="mt-4 flex cursor-pointer items-center gap-2 text-sm text-gray-400"
              >
                <HeartIcon className="h-4 w-4" />
                <span>Add To Wishlist</span>
              </button>
            )}
            {productAttribute.isShareOpen ? (
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
                onClick={() => {
                  setProductAttribute((prev) => ({
                    ...prev,
                    isShareOpen: !prev.isShareOpen,
                  }));
                }}
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
