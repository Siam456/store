import React from 'react';

export default function AppLogo() {
  return (
    <a
      href="/"
      className="router-link-active router-link-exact-active md:w-[160px]"
    >
      <div className="flex items-center gap-2 text-lg font-bold">
        <img src="./logo.svg" alt="logo" width={32} height={32} />
        <span>SooNext</span>
      </div>
    </a>
  );
}
