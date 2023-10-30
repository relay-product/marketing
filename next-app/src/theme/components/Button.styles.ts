import { ComponentStyleConfig } from '@chakra-ui/react'

export const ButtonStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: {
      bg: 'none',
      color: 'greyscale.grey-50',
      fontSize: '1rem',
      fontWeight: '800',
      height: 'fit-content',
      padding: '1rem 1.5rem 1rem 1.5rem',
      width: 'fit-content',
    },
  },
}
