import React from 'react';
import { signOut } from 'next-auth/react';

import { useRouter } from 'next/router';

import { HeartIcon, IdCardIcon } from '@radix-ui/react-icons';
import sidebar from '@/utils/sidebar';
import { Button } from '@/components/ui/button';
import NavItem from './NavItem';
import AppLogo from '../AppLogo';

export default function SidebarContent() {
  const router = useRouter();
  const redirectCB = (path: string) => router.push(path);

  return (
    <div className="z-50 h-full rounded-none border shadow-md lg:left-0">
      <div className="relative h-full w-full">
        <div className="flex flex-col">
          <div className=" flex h-16 w-full items-center justify-between p-5">
            <AppLogo />
          </div>

          <div className="m-4 grid gap-6 p-4 text-gray-500">
            {sidebar.map((item, index: number) => (
              <NavItem
                key={`${index + 1}`}
                href={item.path}
                Inco={item.icon}
                name={item.name}
              />
            ))}
            <NavItem href="/" Inco={HeartIcon} name="WishList" />
            <NavItem href="/" Inco={IdCardIcon} name="My Account" />
          </div>
        </div>

        <Button
          onClick={() => {
            signOut({
              redirect: false,
            });
            redirectCB('/sign-in');
          }}
          color="light"
          className="absolute bottom-5 left-1/2 m-5 mx-auto w-2/3  -translate-x-1/2"
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
