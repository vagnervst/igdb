import {
  Button,
  Box,
  Flex,
  Input,
} from '@chakra-ui/react'

const Home = () => (
  <Box p={4}>
    <Flex>
      <Input placeholder="Search game" />
      <Button ml={4}>Search</Button>
    </Flex>
  </Box>
)

export default Home
