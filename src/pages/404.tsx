import React from 'react';
import { Button } from '@/components/ui/button';

export default function Error() {
  return (
    <div className=" relative h-screen w-full bg-background">
      <div className=" absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:max-w-[400px]">
        <div className=" text-center">
          <div>
            <h1 className="text-6xl font-bold">Error 404</h1>
            <p className=" mt-2 text-center text-sm text-slate-800/70 dark:text-slate-400/80">
              Sorry, we couldn’t find the page you’re looking for. Perhaps
              you’ve mistyped the URL? Be sure to check your spelling.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              type="button"
              color="dark"
              className="px-14"
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
