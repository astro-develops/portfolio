import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/nav";
import { Toaster } from "@/components/ui/toaster"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Astro",
  description: "Astro's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.svg" sizes="any" />
      <body className={`${inter.className} bg-[#17171A]`}>
        <Nav />
        {children}
        <Toaster/>
        </body>
    </html>
  );
}
