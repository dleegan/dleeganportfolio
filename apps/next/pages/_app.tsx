import 'raf/polyfill'
import 'setimmediate'

import { Provider } from 'app/provider'
import Head from 'next/head'
import React from 'react'
import type { SolitoAppProps } from 'solito'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: SolitoAppProps) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>dleegan</title>
        <meta
          name="description"
          content="Expo + Next.js with Solito. By Fernando Rojo."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider location={router.pathname}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
