import Link from 'next/link';
import React from 'react';

export default function CartItems() {
  return (
    <div>
      <ul className="flex flex-1 flex-col gap-4 overflow-y-scroll p-6 md:p-8">
        <div className="relative flex h-16 w-full items-center overflow-hidden rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 512 512"
            className="absolute right-0 w-6 scale-0 transform transition-all"
          >
            <path
              d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="32"
              d="M80 112h352"
            />
            <path
              d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
          {/* className="rounded-lg inset-0 absolute transition-all" style="transform: none;" */}
          <div>
            <div className="group flex items-center gap-3">
              <Link
                aria-current="page"
                href="/product/wordpress-pennant"
                className="router-link-active router-link-exact-active"
              >
                <img
                  width="64"
                  height="64"
                  className="skeleton h-16 w-16 rounded-md"
                  src="https://secure.woonuxt.com/wp-content/uploads/2019/01/pennant-1-150x150.jpg"
                  alt="WordPress Pennant - Short"
                  title="pennant-1.jpg"
                  loading="lazy"
                />
              </Link>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <Link
                    aria-current="page"
                    href="/product/wordpress-pennant"
                    className="router-link-active router-link-exact-active leading-tight"
                  >
                    WordPress Pennant - Short
                  </Link>
                </div>
                <div className="mt-1 flex text-xs font-semibold">
                  <span className="">€15.00</span>
                </div>
              </div>
              <div className="inline-flex flex-col items-end gap-2">
                <div
                  data-v-04bd7bbf=""
                  className="isolate flex rounded bg-white text-sm leading-none shadow-sm shadow-gray-200"
                >
                  <button
                    data-v-04bd7bbf=""
                    title="Decrease Quantity"
                    aria-label="Decrease Quantity"
                    type="button"
                    className="h-6 w-6 rounded-l border border-r border-gray-300 hover:bg-gray-50 focus:outline-none disabled:cursor-not-allowed"
                    disabled
                  >
                    <svg
                      data-v-4847b53f=""
                      data-v-04bd7bbf=""
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      className="icon"
                      width="14px"
                      height="14px"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                        d="M400 256H112"
                      />
                    </svg>
                  </button>
                  <input
                    data-v-04bd7bbf=""
                    type="number"
                    min="0"
                    aria-label="Quantity"
                    className="flex w-8 items-center justify-center border-y border-gray-300 px-2 text-right text-xs focus:outline-none"
                  />
                  <button
                    data-v-04bd7bbf=""
                    title="Increase Quantity"
                    aria-label="Increase Quantity"
                    type="button"
                    className="h-6 w-6 rounded-r border border-l border-gray-300 hover:bg-gray-50 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
                  >
                    <svg
                      data-v-4847b53f=""
                      data-v-04bd7bbf=""
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      className="icon"
                      width="14px"
                      height="14px"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                        d="M256 112v288m144-144H112"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center text-xs leading-none text-gray-400 group-hover:text-gray-700">
                  <button className="mr-2 border-r pr-2" type="button">
                    Move to Wishlist
                  </button>
                  <button
                    title="Remove Item"
                    aria-label="Remove Item"
                    type="button"
                    className="flex cursor-pointer items-center gap-1 hover:text-red-500"
                  >
                    <svg
                      data-v-4847b53f=""
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      className="icon hidden md:inline-block"
                      width="12px"
                      height="12px"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="none"
                        d="M296 64h-80a7.91 7.91 0 0 0-8 8v24h96V72a7.91 7.91 0 0 0-8-8"
                      />
                      <path
                        fill="currentColor"
                        d="M432 96h-96V72a40 40 0 0 0-40-40h-80a40 40 0 0 0-40 40v24H80a16 16 0 0 0 0 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 0 0 0-32M192.57 416H192a16 16 0 0 1-16-15.43l-8-224a16 16 0 1 1 32-1.14l8 224A16 16 0 0 1 192.57 416M272 400a16 16 0 0 1-32 0V176a16 16 0 0 1 32 0Zm32-304h-96V72a7.91 7.91 0 0 1 8-8h80a7.91 7.91 0 0 1 8 8Zm32 304.57A16 16 0 0 1 320 416h-.58A16 16 0 0 1 304 399.43l8-224a16 16 0 1 1 32 1.14Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
}
