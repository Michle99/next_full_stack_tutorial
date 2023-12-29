import { extendTheme } from "@chakra-ui/react";
// import { mode } from '@chakra-ui/theme-tools'


export const theme = extendTheme({
    initialColorMode: "dark",
    useSystemColorMode: false,
    colors: {
        
    },
    styles: {
        global: {
            body: {
                bg: 'blue',
                color: 'white'
            }
        }
    },
    fonts: {
      heading: 'var(--font-roboto)',
      body: 'var(--font-roboto)',
    }
});