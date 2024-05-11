import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {NextUIProvider} from "@nextui-org/react";

import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fastconvert",
  description: "Convert safe and fast your files",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/images/logo.ico" sizes="any" />
      </head>
      <body className={inter.className}>
      <NextUIProvider>
      <NavBar/>
      {children}
      <Footer/>
      </NextUIProvider>   
</body>
    </html>
  );
}
