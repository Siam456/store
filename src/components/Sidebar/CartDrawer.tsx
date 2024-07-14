import { useDispatch, useSelector } from 'react-redux';
import { Cross2Icon } from '@radix-ui/react-icons';
import { RootState } from '@/redux/store';

import { Sheet, SheetContent, SheetHeader } from '@/components/ui/sheet';
import { toggleCartDrawer } from '@/redux/features/sidebar/cartDrawerConfigSlice';
import { Button } from '../ui/button';
import CartItems from './CartItems';

function CartDrawer() {
  const dispatch = useDispatch();
  const cartDrawerConfig = useSelector((state: RootState) => state.cartDrawer);
  const { isCartDrawerOpen } = cartDrawerConfig;

  return (
    <Sheet
      open={isCartDrawerOpen}
      onOpenChange={() => dispatch(toggleCartDrawer())}
    >
      <SheetContent
        isCloseButton={false}
        className="border-none sm:max-w-[500px]"
      >
        <SheetHeader>
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              className=" p-3 shadow-xl"
              onClick={() => dispatch(toggleCartDrawer())}
            >
              <Cross2Icon className="h-4 w-4" />
            </Button>
            <p className=" text-lg">Cart (1)</p>
            <Button
              variant="ghost"
              className=" p-3 shadow-xl"
              onClick={() => dispatch(toggleCartDrawer())}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 512 512"
              >
                <path
                  d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  strokeWidth="32"
                  d="M80 112h352"
                />
                <path
                  d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                />
              </svg>
            </Button>
          </div>
          <CartItems />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default CartDrawer;
