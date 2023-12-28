"use client"

import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

type ChakraProviderType = {
    children: React.ReactNode
}

const ChakraProviderContainer: React.FC<ChakraProviderType> = 
    ({children}: ChakraProviderType) => {
    return (
        <ChakraProvider>
            {children}
        </ChakraProvider>
    )
}

export default ChakraProviderContainer;