import { useEffect } from 'react';
import { Layouts } from '../shared/components/layouts/Layout';
import { MyAppProps } from '../shared/components/layouts/Types';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: MyAppProps) {
  const Layout = Layouts[Component.Layout] ?? ((page: MyAppProps) => page);
 
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
