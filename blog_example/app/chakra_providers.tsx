"use client"

import { theme } from "@/chakra_theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";


type ChakraProviderType = {
    children: React.ReactNode
}

export function Provider ({children}: ChakraProviderType) {
    return (
        <>
          
          <ChakraProvider theme={theme}>
            {children}
          </ChakraProvider>
        </>
    )
}
