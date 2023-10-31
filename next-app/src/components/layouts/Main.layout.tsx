import { Box, Flex } from '@chakra-ui/react'
import { Header } from './header/Header.component'

type MainLayoutProps = {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Flex w={'100%'} height={'100vh'} bg={'greyscale.grey-900'} flexDir={'column'}>
      <Header />
      <Box backgroundColor={'primary.blue-50'} pt="8rem" flexGrow={1}>
        {children}
      </Box>
    </Flex>
  )
}
