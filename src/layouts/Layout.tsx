import React, { PropsWithChildren } from 'react';
import { useDispatch } from 'react-redux';

import Sidebar from '@/components/Sidebar';
import { toggleSidebar } from '@/redux/features/sidebar/sidebarConfigSlice';

import NavBar from '@/components/headers/NavBar';
import Footer from '@/components/footer';
import { toggleCartDrawer } from '@/redux/features/sidebar/cartDrawerConfigSlice';
import { cn } from '@/lib/utils';
import CartDrawer from '@/components/Sidebar/CartDrawer';

export default function Layout({ children }: PropsWithChildren) {
  const dispatch = useDispatch();

  return (
    <div className={cn('flex min-h-screen flex-col')}>
      <div className="fixed">
        <Sidebar />
      </div>
      <div className="fixed">
        <CartDrawer />
      </div>
      <NavBar
        toggleCartDrawer={() => dispatch(toggleCartDrawer())}
        toggleSidebar={() => dispatch(toggleSidebar())}
      />
      <main className="overflow-y-auto ">{children}</main>
      <Footer />
    </div>
  );
}
