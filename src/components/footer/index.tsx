import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import AppLogo from '../AppLogo';
import FooterLinks from './FooterLinks';
import FotterBottom from './FotterBottom';

export default function Footer() {
  return (
    <footer className="order-last bg-white">
      <div className="container my-24 flex flex-wrap justify-between gap-12 md:gap-24">
        <div className="mr-auto">
          <AppLogo className=" transition-all duration-300 hover:underline" />
          <p className="mt-4 text-sm text-gray-700 xl:max-w-lg">
            SooNext is unmatched when it comes to performance and scalability.
            Reap the benefits of having a online store that out performs all of
            your competitors. You can edit components to display your own
            information just like the one you're reading now.
          </p>
          <div className="mt-8 bg-white">
            <Select defaultValue="english">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="english">
                    English <span className="font-light">us</span>
                  </SelectItem>
                  <SelectItem value="spanish">
                    Spanish <span className="font-light">es</span>
                  </SelectItem>
                  <SelectItem value="french">
                    French <span className="font-light">fr</span>
                  </SelectItem>
                  <SelectItem value="german">
                    German <span className="font-light">de</span>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <FooterLinks />
      </div>
      <FotterBottom />
    </footer>
  );
}
