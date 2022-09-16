import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'



function MyApp({ Component, pageProps }: AppProps) {
  console.log("🚀 ~ file: _app.tsx ~ line 7 ~ MyApp ~ pageProps", pageProps)

  return <>
    <Header/>
    <Component pageProps={pageProps}/>
    <Footer/>
  </>
}

export default MyApp