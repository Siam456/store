// eslint-disable-next-line import/no-extraneous-dependencies
import localFont from 'next/font/local';

const inter = localFont({
  src: [
    {
      path: '../../public/fonts/inter.var.woff2',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-inter',
});
const Lexend = localFont({
  src: [
    {
      path: '../../public/fonts/Lexend.woff2',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-Lexend',
});
const Roboto = localFont({
  src: [
    {
      path: '../../public/fonts/Roboto-Black.woff2',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-Roboto',
});

const OpenSans = localFont({
  src: [
    {
      path: '../../public/fonts/OpenSans-VariableFont_wdth,wght.ttf',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-OpenSans',
});

export default function useFonts() {
  return {
    inter: `${inter.className} font-sans`,
    lexend: `${Lexend.className} font-sans`,
    Roboto: `${Roboto.className} font-sans`,
    OpenSans: `${OpenSans.className} font-sans`,
  };
}
