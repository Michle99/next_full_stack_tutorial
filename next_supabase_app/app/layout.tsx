import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarLayout from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create a Nextjs supabase app",
  description: "Use App router to create a nextjs supabase app."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarLayout/>
        {children}
      </body>
    </html>
  );
}
