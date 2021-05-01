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
    width={[300, 400, 330, 285]}
    height={[400, 530, 430, 380]}
    borderRadius={5}
    bg="purple.700"
    cursor="pointer"
    position="relative"
    justifyContent="center"
    alignItems="center"
    overflow="hidden"
  >
    <Image
      width={image.url && "100%"}
      height={image.url && "100%"}
      src={image.url || '/icons/igdb.png'}
      alt={image.alt}
    />
  </Flex>
)

export default GameCard
