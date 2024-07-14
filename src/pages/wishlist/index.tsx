import { Cross2Icon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';

export default function Wishlist() {
  const [wishlist, setWishlist] = React.useState([]);

  React.useEffect(() => {
    const _wishlist = localStorage.getItem('wishlist');
    if (_wishlist) {
      setWishlist(JSON.parse(_wishlist));
    }
  }, []);

  const removeFromWishlist = (id: string) => {
    const _wishlist = wishlist.filter(
      (item: { _id: string }) => item._id !== id,
    );
    setWishlist(_wishlist);
    localStorage.setItem('wishlist', JSON.stringify(_wishlist));
  };

  return (
    <div className="mx-auto my-4 min-h-[600px] w-full max-w-3xl px-4">
      <h1 className="my-4 border-b py-4 text-center text-2xl font-semibold">
        Wishlist
      </h1>
      {wishlist.length > 0 ? (
        <ul className="my-8 grid divide-y divide-gray-100">
          {wishlist.map(
            (item: {
              _id: string;
              images: string[];
              title: string;
              discount: number;
              originalPrice: number;
              price: number;
              slug: string;
            }) => (
              <li className="flex items-center gap-4 py-4">
                <button onClick={() => removeFromWishlist(item?._id)}>
                  <Cross2Icon className="h-6 w-6 text-gray-500" />
                </button>
                <Link href={item?.slug}>
                  <img
                    className="h-20 w-20 rounded-lg object-cover"
                    src={
                      item?.images?.length > 0
                        ? item.images[0]
                        : './placeholder.webp'
                    }
                    alt="Product"
                  />
                </Link>
                <Link href={item?.slug}>
                  <h2 className="text-lg leading-tight">{item.title}</h2>
                </Link>
                {item?.discount > 0 ? (
                  <div className="ml-auto flex font-semibold">
                    <span className="font-normal text-gray-400 line-through">
                      €{item?.originalPrice.toFixed(2)}
                    </span>
                    <span className="ml-2">€{item?.price.toFixed(2)}</span>
                  </div>
                ) : (
                  <div className="ml-auto flex font-semibold">
                    <span>€{item?.price.toFixed(2)}</span>
                  </div>
                )}
              </li>
            ),
          )}
        </ul>
      ) : (
        <div className="flex min-h-[600px] items-center justify-center text-center text-gray-500">
          <p>You have no items in your wishlist</p>
        </div>
      )}
    </div>
  );
}

Wishlist.layout = 'base';
