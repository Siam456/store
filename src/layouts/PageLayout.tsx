import React, { ReactNode } from 'react';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/router';

export default function PageLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <section className="container">
      <div className="mt-6">
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center text-sm text-secondary hover:text-secondary/90"
        >
          <ChevronLeftIcon className="mr-2 h-4 w-4" />
          Back
        </button>
      </div>
      {children}
    </section>
  );
}
