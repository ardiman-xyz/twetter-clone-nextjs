import Layout from '@/components/layout'
import LoginModal from '@/components/modals/loginModal'
import RegisterModal from '@/components/modals/registerModal'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
