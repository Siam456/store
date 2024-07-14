import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { toggleSidebar } from '@/redux/features/sidebar/sidebarConfigSlice';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import SidebarContent from './SidebarContent';

function MobileSidebar() {
  const dispatch = useDispatch();
  const sidebarConfig = useSelector((state: RootState) => state.sidebar);
  const { isSidebarOpen } = sidebarConfig;

  return (
    <Sheet open={isSidebarOpen} onOpenChange={() => dispatch(toggleSidebar())}>
      <SheetContent side="left" className="border-none p-0 sm:max-w-[425px]">
        <SidebarContent />
      </SheetContent>
    </Sheet>
  );
}

export default MobileSidebar;
