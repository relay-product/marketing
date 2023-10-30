import { extendTheme } from '@chakra-ui/react'
import { colors } from './foundations/colors'
import { fonts } from './foundations/fonts'
import { HeadingStyles as Heading } from './components/Heading.styles'
import { TextStyles as Text } from './components/Text.styles'
import { ButtonStyles as Button } from './components/Button.styles'

export const theme = extendTheme({
  fonts,
  colors,
  components: {
    Heading,
    Text,
    Button,
  },
})
