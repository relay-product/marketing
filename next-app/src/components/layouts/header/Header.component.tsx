import {
  Image,
  Flex,
  Spacer,
  useDisclosure,
  Heading,
  Divider,
  Box,
  Text,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  Button,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { useDevice } from '@/hooks/useDevice'
import { HamburgerIcon } from '@chakra-ui/icons'
// import MobileMenu from '@/components/layouts/header/MobileMenu.component'
// import DesktopMenu from '@/components/layouts/header/DesktopMenu.component'

type MobileProps = {
  isMobile: boolean
}

export const Header = ({ isMobile }: MobileProps) => {
  const router = useRouter()
  const { device } = useDevice()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleWorkClick = () => {
    router.push('/work')
    if (isMobile && onClose) onClose()
  }
  const handlePhilosophyClick = () => {
    router.push('/philosophy')
    if (isMobile && onClose) onClose()
  }
  const handleTeamClick = () => {
    router.push('/team')
    if (isMobile && onClose) onClose()
  }
  const handleMetricClick = () => {
    router.push('/metric')
    if (isMobile && onClose) onClose()
  }

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
        <>
          <IconButton
            aria-label={'Open Menu'}
            size="lg"
            icon={<HamburgerIcon />}
            display={device === 'mobile' ? undefined : 'none'}
            bg="none"
            onClick={onOpen}
            color={'greyscale.grey-50'}
          />
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent bgColor={'greyscale.grey-900'}>
              <DrawerCloseButton color={'greyscale.grey-50'} />
              <DrawerBody>
                <Flex flexDir={'column'} py="1rem" gap="1rem" h="100%" w={'100%'}>
                  <Text onClick={handleWorkClick} variant={'b3'} color={'greyscale.grey-50'}>
                    Our Work
                  </Text>
                  <Text onClick={handlePhilosophyClick} variant={'b3'} color={'greyscale.grey-50'}>
                    Our Philosophy
                  </Text>
                  <Text onClick={handleTeamClick} variant={'b3'} color={'greyscale.grey-50'}>
                    Our Team
                  </Text>
                  <Text onClick={handleMetricClick} variant={'b3'} color={'greyscale.grey-50'}>
                    Metric
                  </Text>
                  <Flex
                    w={'90%'}
                    justifyContent={'space-between'}
                    alignItems={'end'}
                    position={'fixed'}
                    bottom={'1rem'}
                    left={'1rem'}
                  >
                    <Image h={'3rem'} src="/full-logo.svg" onClick={() => router.push('/')} />
                    <Flex alignItems={'center'} mb={'0.5rem'}>
                      <Button variant={'primary'}>Get in touch</Button>
                      <Image boxSize={'0.8rem'} ml={'-0.5rem'} src={'/arrow.svg'} />
                    </Flex>
                  </Flex>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <>
          <Flex
            mb={'1.25rem'}
            left={'20rem'}
            position={'fixed'}
            justifyContent={'space-between'}
            gap={'5rem'}
          >
            <Text onClick={handleWorkClick} variant={'b3'} color={'greyscale.grey-50'}>
              Our Work
            </Text>
            <Text onClick={handlePhilosophyClick} variant={'b3'} color={'greyscale.grey-50'}>
              Our Philosophy
            </Text>
            <Text onClick={handleTeamClick} variant={'b3'} color={'greyscale.grey-50'}>
              Our Team
            </Text>
            <Text onClick={handleMetricClick} variant={'b3'} color={'greyscale.grey-50'}>
              Metric
            </Text>
          </Flex>
          <Flex alignItems={'center'} mb={'1.25rem'} right={'2rem'} position={'fixed'}>
            <Button variant={'primary'}>Get in touch</Button>
            <Image boxSize={'0.8rem'} ml={'-0.5rem'} src={'/arrow.svg'} />
          </Flex>
        </>
      )}
    </Flex>
  )
}
