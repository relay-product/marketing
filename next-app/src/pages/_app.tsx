import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/theme/theme'
import MainLayout from '@/components/layouts/Main.layout'

export default function App({ Component, pageProps: { session, ...pageProps }, router }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
  )

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ChakraProvider>
      </QueryClientProvider>
    </>
  )
}
