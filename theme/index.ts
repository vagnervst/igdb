import { extendTheme } from '@chakra-ui/react'

const config = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
      },
      _placeholder: {
        color: 'whiteAlpha.900',
      },
    },
  },
})

export default config
