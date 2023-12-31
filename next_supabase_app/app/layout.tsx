import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarLayout from "./components/Navbar";
import AuthProvider from "./components/AuthProvider";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create a Nextjs supabase app",
  description: "Use App router to create a nextjs supabase app."
}

type RootLayoutProps = {
  children: React.ReactNode;
}

export default function RootLayout({children}: RootLayoutProps ) {
  const supabase = createServerComponentClient({ cookies });

  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarLayout/>
        <AuthProvider accessToken="supabase">
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
