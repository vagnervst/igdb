import {
  Box,
  Flex,
  Spinner,
} from '@chakra-ui/react'

import GameCard from '../../components/GameCard'

const GamesList = ({ data, error }) => {
  if (error) {
    return <div>Failed to load</div>
  }

  if (!data) {
    return (
      <Flex p={4} justifyContent="center" alignItems="center">
        <Spinner size="xl" />
      </Flex>
    )
  }

  return (
    <Flex p={4} wrap="wrap" justifyContent="center">
      {data.map(({ cover, id, name }) => (
        <Box m={2}>
          <GameCard
            key={id}
            name={name}
            image={{
              url: cover.url,
              alt: name,
            }}
          />
        </Box>
      ))}
    </Flex>
  )
}

export default GamesList
