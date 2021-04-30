import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

import theme from '../styles/theme'

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
)

export default App
