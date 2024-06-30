import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function AppLogo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`${className} router-link-active router-link-exact-active md:w-[160px]`}
    >
      <div className="flex items-center gap-2 text-lg font-bold">
        <Image src="/logo.png" alt="logo" width={32} height={32} />
        <span>SooNext</span>
      </div>
    </Link>
  );
}

AppLogo.defaultProps = {
  className: '',
};
