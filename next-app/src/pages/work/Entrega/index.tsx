import { Flex } from '@chakra-ui/react'
import { Heading } from '../../../components/Heading.component'
import { Text } from '../../../components/Text.component'

export default function Entrega() {
  return (
    <>
      <Flex backgroundColor={'greyscale.grey-900'} flexDir={'column'} w={'100vw'}>
        <Heading type="h2" color={'greyscale.grey-50'}>
          Entrega
        </Heading>
      </Flex>
    </>
  )
}
