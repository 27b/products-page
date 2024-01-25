'use client'

import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'  

import { ChakraProvider } from '@chakra-ui/react'


export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
        <ChakraProvider>
            {children}
        </ChakraProvider>
    </QueryClientProvider>
    )
}