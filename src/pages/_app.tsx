import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Canada Line</title>
        <link rel='icon' href='favicon.ico' type='image/x-icon' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
