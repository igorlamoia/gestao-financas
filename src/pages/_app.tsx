import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { AsideNavbar } from '@/components/aside/navbar';

import { Layout } from './layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
