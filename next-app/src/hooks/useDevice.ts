import { useBreakpointValue } from '@chakra-ui/react'

type DeviceTypes = 'desktop' | 'mobile'

export type UseDeviceReturn = {
  device: DeviceTypes
}

export const useDevice = (): UseDeviceReturn => {
  const device = useBreakpointValue<DeviceTypes>(
    {
      base: 'mobile',
      sm: 'mobile',
      md: 'desktop',
      lg: 'desktop',
      xl: 'desktop',
      '2xl': 'desktop',
    },
    {
      fallback: 'mobile',
    },
  )
  if (!device) {
    return { device: 'mobile' }
  }
  return { device }
}
