"use client"

import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

type ChakraProviderType = {
    children: React.ReactNode
}

export function Provider ({children}: ChakraProviderType) {
    return (
        <ChakraProvider>
            {children}
        </ChakraProvider>
    )
}
