import { Image, Flex, Spacer, useDisclosure, Heading, Divider, Box, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { useDevice } from '@/hooks/useDevice'
// import MobileMenu from '@/components/layouts/header/MobileMenu.component'
// import DesktopMenu from '@/components/layouts/header/DesktopMenu.component'

export const Header = () => {
  const router = useRouter()
  const { device } = useDevice()
  //   const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex
      cursor="pointer"
      px={device === 'mobile' ? '1rem' : '1rem'}
      py={device === 'mobile' ? '0.5rem' : '1rem'}
      alignItems={'center'}
      h={'fit-content'}
      position={'fixed'}
      width={'100%'}
      zIndex={'100'}
    >
      <Flex w={'100%'} flexDir={'row'} padding={'0.25rem'} gap={'0.5rem'} alignItems={'center'}>
        <Image
          h={device === 'mobile' ? '1rem' : '2rem'}
          src="/logo.svg"
          onClick={() => router.push('/')}
        />
        <Heading variant={'h1'} fontWeight={'600'} color={'greyscale.grey-50'} fontSize={'2rem'}>
          Relay
        </Heading>

        <Flex mt={'1rem'} height={'1px'} bgColor={'greyscale.grey-50'} shrink={0} grow={1}></Flex>
      </Flex>
      <Spacer cursor="default" />
      {device === 'mobile' ? (
        // <MobileMenu onClose={onClose} onOpen={onOpen} isOpen={isOpen} />
        <></>
      ) : (
        // <DesktopMenu />
        <>
          <Flex
            pb={'1.25rem'}
            left={'20rem'}
            position={'fixed'}
            justifyContent={'space-between'}
            gap={'5rem'}
          >
            <Text variant={'b3'} color={'greyscale.grey-50'}>
              Our Work
            </Text>
            <Text variant={'b3'} color={'greyscale.grey-50'}>
              Our Philosophy
            </Text>
            <Text variant={'b3'} color={'greyscale.grey-50'}>
              Our Team
            </Text>
            <Text variant={'b3'} color={'greyscale.grey-50'}>
              Metric
            </Text>
          </Flex>
        </>
      )}
    </Flex>
  )
}
