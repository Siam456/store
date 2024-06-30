import '@/styles/globals.css';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { SessionProvider } from 'next-auth/react';
import store from '@/redux/store';

import type { AppPropsWithLayout } from '@/types';
import Layout from '@/layouts/Layout';

import useFonts from '@/hooks/useFonts';
import Toaster from '@/components/ui/toaster';

const ComponentMap = {
  base: ({ Component, pageProps }: AppPropsWithLayout) => (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ),
  none: ({ Component, pageProps }: AppPropsWithLayout) => (
    <Component {...pageProps} />
  ),
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  ...rest
}: AppPropsWithLayout) {
  const { OpenSans } = useFonts();

  const layout = Component.layout ?? 'none';
  const ModifiedComponent = ComponentMap[layout];

  return (
    <div className={OpenSans}>
      <SessionProvider session={session}>
        {/* <Head></Head> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <Toaster />
            <Provider store={store}>
              <ModifiedComponent
                Component={Component}
                pageProps={{
                  ...pageProps,
                }}
                {...rest}
              />
            </Provider>{' '}
          </TooltipProvider>
        </ThemeProvider>
      </SessionProvider>
    </div>
  );
}
