import { Roboto, Rubik } from "next/font/google";

const roboto = Roboto({
    subsets: ['latin'],
    variable: '--font-roboto',
    weight: "500",
    style: "italic"
})

export const fonts = {
    roboto,
}