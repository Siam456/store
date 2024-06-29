import React from 'react';
import AppLogo from '../AppLogo';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import FooterLinks from './FooterLinks';
import FotterBottom from './FotterBottom';

export default function Footer() {
  return (
    <div className="order-last bg-white">
      <div className="container my-24 flex flex-wrap justify-between gap-12 md:gap-20">
        <div className="flex flex-col gap-4">
          <AppLogo />
          <p className="text-sm">
            SooNext is unmatched when it comes to performance and scalability.
            Reap the benefits of having a online store that out performs all of
            your competitors. You can edit components to display your own
            information just like the one you're reading now.
          </p>
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

        <FooterLinks />
      </div>
      <FotterBottom />
    </div>
  );
}
