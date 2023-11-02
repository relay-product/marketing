import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Flex
        backgroundColor={'greyscale.grey-900'}
        flexDir={'column'}
        w={'100vw'}
        px="129px"
        gap="156px"
        paddingBottom="100px"
      >
        <Flex w="100%" paddingTop="245px">
          <Heading
            variant="h1"
            fontWeight={'400'}
            color={'greyscale.grey-50'}
            fontSize={'48px'}
            letterSpacing="-1"
            w="90%"
            maxW="870px"
          >
            You’re the domain expert. Relay is your startup team. Together, we turn your insight
            into valuable products.
          </Heading>
        </Flex>
        <Flex w="100%" justifyContent="flex-end">
          <SimpleGrid columns={2} spacing="16px" marginRight="10%">
            <Box boxSize="262px" bg="greyscale.grey-700">
              {/* Make image the box background. Or place a chakra <Image> here */}
            </Box>
            <Box boxSize="262px" bg="greyscale.grey-700" borderRadius="4px 127px 4px 4px">
              {/* Make image the box background. Or place a chakra <Image> here */}
            </Box>
            <Box boxSize="262px" bg="greyscale.grey-700" borderRadius="4px 127px 4px 4px">
              {/* Make image the box background. Or place a chakra <Image> here */}
            </Box>
            <Box boxSize="262px" bg="greyscale.grey-700">
              {/* Make image the box background. Or place a chakra <Image> here */}
            </Box>
          </SimpleGrid>
        </Flex>
        <Flex w="100%" flexWrap="wrap">
          <Box w="100%" h="454px" bg="greyscale.grey-700">
            {/* Make image the box background. Or place a chakra <Image> here */}
          </Box>
          <Heading
            variant="h1"
            fontWeight={'600'}
            color={'greyscale.grey-50'}
            fontSize={'32px'}
            letterSpacing="-1"
            lineHeight="36px"
            p="0"
            marginTop="16px"
          >
            Revolutionizing Medicare Enrollment.
          </Heading>
          <Text color="greyscale.grey-50" w="100%" fontWeight={'400'}>
            Scaling a legacy services company with software to create an incredibly valuable new
            SaaS product.
          </Text>
          <Flex w="100%" gap="70px" marginTop="46px">
            <Flex w="100%" flexWrap="wrap">
              <Box w="100%" h="454px" bg="greyscale.grey-700"></Box>
              <Heading
                variant="h1"
                fontWeight={'600'}
                color={'greyscale.grey-50'}
                fontSize={'32px'}
                letterSpacing="-1"
                lineHeight="36px"
                p="0"
                marginTop="16px"
              >
                Napkin Sketch to Revenue in 7 Weeks.
              </Heading>
              <Text color="greyscale.grey-50" w="100%" fontWeight={'400'}>
                Building a bold new marketplace from scratch in the professional sports space.
              </Text>
            </Flex>
            <Flex w="100%" flexWrap="wrap">
              <Box w="100%" h="454px" bg="greyscale.grey-700"></Box>
              <Heading
                variant="h1"
                fontWeight={'600'}
                color={'greyscale.grey-50'}
                fontSize={'32px'}
                letterSpacing="-1"
                lineHeight="36px"
                p="0"
                marginTop="16px"
              >
                Process Improvement Across Job sites.
              </Heading>
              <Text color="greyscale.grey-50" w="100%" fontWeight={'400'}>
                Creating job site efficiencies at scale in the roofing industry.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
