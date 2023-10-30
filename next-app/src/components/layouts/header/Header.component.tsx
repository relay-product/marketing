import { Image, Flex, Spacer, useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { useDevice } from '@/hooks/useDevice'
// import MobileMenu from '@/components/layouts/header/MobileMenu.component'
// import DesktopMenu from '@/components/layouts/header/DesktopMenu.component'

export const Header = () => {
  const router = useRouter()
  const { device } = useDevice()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex
      cursor="pointer"
      px={device === 'mobile' ? '1rem' : '1.5rem'}
      py={device === 'mobile' ? '0.5rem' : '2.5rem'}
      alignItems={'center'}
      h="5.5rem"
      boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.05)'}
      position={'fixed'}
      width={'100%'}
      bg={'white'}
      zIndex={'100'}
    >
      <Flex flexDir={'column'} padding={'0.25rem'}>
        <Image
          h={device === 'mobile' ? '2rem' : '3rem'}
          src="/logo.svg"
          onClick={() => router.push('/')}
        />
      </Flex>
      <Spacer cursor="default" />
      {device === 'mobile' ? (
        // <MobileMenu onClose={onClose} onOpen={onOpen} isOpen={isOpen} />
      ) : (
        // <DesktopMenu />
      )}
    </Flex>
  )
}
