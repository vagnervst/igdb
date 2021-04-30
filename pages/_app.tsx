import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
)

export default App
