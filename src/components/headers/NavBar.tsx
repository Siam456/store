import React from 'react';

import { HamburgerMenuIcon, PersonIcon } from '@radix-ui/react-icons';
import Search from '@/components/ui/search';
// import UserNav from '@/components/headers/user-nav';
import MainNav from '@/components/headers/main-nav';
import AppLogo from '../AppLogo';

export default function NavBar({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  return (
    <header className="sticky top-0 z-40 border-b bg-white backdrop-blur-sm ">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center">
          <button
            className=" relative block cursor-pointer rounded-full p-2 duration-300 lg:hidden"
            onClick={() => toggleSidebar()}
          >
            <HamburgerMenuIcon className="mr-4 h-5 w-5 lg:hidden" />
          </button>
          <AppLogo />
        </div>
        <MainNav className="mx-6 max-lg:hidden " />
        <div className="ml-auto flex items-center space-x-4">
          <Search placeholder="Search Products..." className="" />
          <PersonIcon className="h-5 w-5" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="icon mr-1 md:mr-0"
            width="22px"
            height="22px"
            viewBox="0 0 512 512"
            data-v-4847b53f=""
          >
            <circle
              cx="176"
              cy="416"
              r="16"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <circle
              cx="400"
              cy="416"
              r="16"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M48 80h64l48 272h256"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"
            />
          </svg>
          {/* <UserNav /> */}
        </div>
      </div>
    </header>
  );
}
