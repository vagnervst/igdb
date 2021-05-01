import {
  Button,
  Box,
  Flex,
  Input,
} from '@chakra-ui/react'
import useSWR from 'swr'

import GameCard from '../components/GameCard'

const Home = () => {
  const { data, error } = useSWR('/api/games')

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <Box p={4}>
      <Flex>
        <Input placeholder="Search game" />
        <Button ml={4}>Search</Button>
      </Flex>
      <Flex p={4} wrap="wrap" justifyContent="center">
        {data.map(({ cover, id, name }) => (
          <Box m={2}>
            <GameCard
              key={id}
              image={{
                url: cover.url,
                alt: name,
              }}
            />
          </Box>
        ))}
      </Flex>
    </Box>
  )
}

export default Home
