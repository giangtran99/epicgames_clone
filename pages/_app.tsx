import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'


function MyApp({ Component, pageProps }: AppProps) {
  console.log("🚀 ~ file: _app.tsx ~ line 7 ~ MyApp ~ pageProps", pageProps)

  return <>
    <ChakraProvider theme={theme} >
      <Header />
      <Component pageProps={pageProps} />
      <Footer />
    </ChakraProvider>

  </>
}

export default MyApp