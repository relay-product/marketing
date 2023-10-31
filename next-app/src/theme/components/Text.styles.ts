import { ComponentStyleConfig } from '@chakra-ui/react'
import { HeadingStyles } from './Heading.styles'

export const TextStyles: ComponentStyleConfig = {
  // style object for base or default style
  // baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  // sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    b1: {
      fontSize: '1.375rem',
      fontStyle: 'normal',
      lineHeight: '1.625rem',
      fontWeight: 400,
    },
    b1Bold: {
      fontSize: '1.375rem',
      fontStyle: 'normal',
      lineHeight: '1.625rem',
      fontWeight: 600,
    },
    b2: {
      fontSize: '1.125rem',
      fontStyle: 'normal',
      lineHeight: '1.25rem',
      fontWeight: 400,
    },
    b2Bold: {
      fontSize: '1.125rem',
      fontStyle: 'normal',
      lineHeight: '1.25rem',
      fontWeight: 600,
    },
    b3: {
      fontSize: '0.9375rem',
      fontStyle: 'normal',
      lineHeight: '1.125rem',
      fontWeight: 400,
    },
    b3Bold: {
      fontSize: '0.9375rem',
      fontStyle: 'normal',
      lineHeight: '1.125rem',
      fontWeight: 600,
    },
    b4: {
      fontSize: '0.75rem',
      fontStyle: 'normal',
      lineHeight: '1rem',
      textColor: 'gray.500',
      fontWeight: 400,
    },
    b5: {
      fontSize: '0.5rem',
      fontStyle: 'normal',
      lineHeight: '.5rem',
      textColor: 'gray.500',
      fontWeight: 400,
    },
    overline: {
      fontSize: '0.75rem',
      fontStyle: 'normal',
      lineHeight: '0.9375rem',
      fontWeight: 600,
      fontVariant: 'small-caps',
      letterSpacing: '0.2em',
    },

    ...HeadingStyles.variants,
  },
  // default values for 'size', 'variant' and 'colorScheme'
  // defaultProps: {},
}
