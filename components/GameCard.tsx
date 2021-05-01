import React from 'react'
import {
  Image,
  Flex,
} from '@chakra-ui/react'

type PropTypes = {
  name: string,
  image: {
    alt: string,
    url: string,
  },
}

const Fallback = ({ name }: { name: string }) => (
  <Flex boxSize="100%" justifyContent="center" alignItems="center">
    <Image
      objectFit="fill"
      src="/icons/igdb.png"
      pos="absolute"
    />
    <Flex
      bg="blackAlpha.400"
      boxSize="100%"
      justifyContent="center"
      alignItems="flex-end"
      p={4}
      boxSizing="border-box"
      fontWeight="bold"
      borderRadius="inherit"
      textAlign="center"
      sx={{
        '&:hover': 'opacity: 0'
      }}
    >
      {name}
    </Flex>
  </Flex>
)

const GameCard = ({ name, image }: PropTypes) => (
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
      fallback={<Fallback name={name} />}
      objectFit="fill"
      src={image.url}
      alt={image.alt}
    />
  </Flex>
)

export default GameCard
