import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { SWRConfig } from 'swr'

import fetcher from '../utils/fetcher'

import theme from '../theme'

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <SWRConfig
      value={{
        shouldRetryOnError: false,
        fetcher,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  </ChakraProvider>
)

export default App
