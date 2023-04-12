import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react'

import Layout from '@/components/layout'
import LoginModal from '@/components/modals/loginModal'
import RegisterModal from '@/components/modals/registerModal'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <LoginModal />
      <RegisterModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
