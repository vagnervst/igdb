import React from 'react'
import {
  Image,
  Flex,
} from '@chakra-ui/react'

type PropTypes = {
  image: {
    url: string,
    alt: string,
  },
}

const GameCard = ({ image }: PropTypes) => (
  <Flex
    width={300}
    height={400}
    borderRadius={5}
    bg="purple.700"
    cursor="pointer"
    position="relative"
    justifyContent="center"
    alignItems="center"
    overflow="hidden"
  >
    <Image
      src={image.url || '/icons/igdb.png'}
      alt={image.alt}
    />
  </Flex>
)

export default GameCard
