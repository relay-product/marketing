import { Flex, Heading } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Flex backgroundColor={'greyscale.grey-900'} flexDir={'column'} w={'100vw'}>
        <Flex
          backdropFilter={'blur(5px)'}
          background={'rgba(255, 255, 255, 0.2)'}
          position={'fixed'}
        >
          <Heading color={'greyscale.grey-50'} variant={'h3'}>
            Relay
          </Heading>
        </Flex>
      </Flex>
    </>
  )
}
