import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AllContextProvider } from '@/store/AllContext'
export default function App({ Component, pageProps }: AppProps) {
  return(
    <AllContextProvider>
    <Component {...pageProps} />
  </AllContextProvider>
  )


}
