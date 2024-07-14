import Link from 'next/link';
import React from 'react';

export default function FooterLinks() {
  return (
    <>
      <div>
        <h4 className="font-semibold">Information</h4>
        <ul className="mt-4 space-y-4">
          <li className=" text-sm hover:underline">
            <Link target="_blank" href="/">
              About Us
            </Link>
          </li>
          <li className=" text-sm hover:underline">
            <Link target="_blank" href="/">
              Contact Us
            </Link>
          </li>
          <li className=" text-sm hover:underline">
            <Link target="_blank" href="/">
              Press
            </Link>
          </li>
          <li className=" text-sm hover:underline">
            <Link target="_blank" href="/">
              FAQ's
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold">Products</h4>
        <ul className="mt-4 space-y-4">
          <li className=" text-sm hover:underline">
            <Link target="_blank" href="/">
              New Arrivals
            </Link>
          </li>
          <li className=" text-sm hover:underline">
            <Link target="_blank" href="/">
              On sale
            </Link>
          </li>
          <li className=" text-sm hover:underline">
            <Link target="_blank" href="/">
              Top rated
            </Link>
          </li>
          <li className=" text-sm hover:underline">
            <Link target="_blank" href="/">
              Gift Cards
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold">Customer Service</h4>
        <ul className="mt-4 space-y-4">
          <li className=" text-sm hover:underline">
            <Link target="_blank" href="/">
              Contact Us
            </Link>
          </li>
          <li className=" text-sm hover:underline">
            <Link target="_blank" href="/">
              Shipping & Returns
            </Link>
          </li>
          <li className=" text-sm hover:underline">
            <Link target="_blank" href="/">
              Privacy Policy
            </Link>
          </li>
          <li className=" text-sm hover:underline">
            <Link target="_blank" href="/">
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold">My Account</h4>
        <ul className="mt-4 space-y-4">
          <li className=" text-sm hover:underline">
            <Link href="/">My Account</Link>
          </li>
          <li className=" text-sm hover:underline">
            <Link href="/">Order History</Link>
          </li>
          <li className=" text-sm hover:underline">
            <Link href="/">Wishlist</Link>
          </li>
          <li className=" text-sm hover:underline">
            <Link href="/">Newsletter</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
