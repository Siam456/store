import React, { PropsWithChildren } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Sidebar from '@/components/Sidebar';
import { toggleSidebar } from '@/redux/features/sidebar/sidebarConfigSlice';
import { RootState } from '@/redux/store';

import NavBar from '@/components/headers/NavBar';
import Footer from '@/components/footer';

export default function Layout({ children }: PropsWithChildren) {
  const dispatch = useDispatch();
  const sidebarConfig = useSelector((state: RootState) => state.sidebar);

  const { isSidebarOpen } = sidebarConfig;

  return (
    <div
      className={`flex min-h-screen flex-col  ${isSidebarOpen && 'overflow-hidden'}`}
    >
      <div className="fixed">
        <Sidebar />
      </div>
      <NavBar toggleSidebar={() => dispatch(toggleSidebar())} />
      <main className="overflow-y-auto ">{children}</main>
      <Footer />
    </div>
  );
}
