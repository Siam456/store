import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { closeSidebar } from '@/redux/features/sidebar/sidebarConfigSlice';
import { Button } from '../ui/button';

interface Props {
  Inco: React.ElementType;
  name: string;

  href: string | undefined;
}

function NavItem({ Inco, name, href }: Props) {
  const router = useRouter();
  const dispatch = useDispatch();

  const redirectCB = (path: string) => router.push(path);
  return (
    <Button
      onClick={() => {
        dispatch(closeSidebar());

        if (href) redirectCB(href);
      }}
      className={` center flex 
      w-full  items-center justify-start gap-3 rounded-md  p-2 capitalize hover:bg-slate-200  ${
        router.pathname === href
          ? 'bg-slate-300 hover:bg-slate-300 '
          : ' bg-transparent '
      } group transition-all duration-300
      disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
    >
      <Inco
        className={`h-5 w-5 text-slate-700/80 duration-300 group-hover:text-indigo-500/80 `}
      />

      <p
        className={`my-1 font-normal leading-3 text-slate-700/80 
          `}
      >
        {name}
      </p>
    </Button>
  );
}

export default NavItem;
