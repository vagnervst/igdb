import { extendTheme } from '@chakra-ui/react'

const config = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
})

export default extendTheme({ config })
