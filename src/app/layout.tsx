import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {NextUIProvider} from "@nextui-org/react";

import "./globals.css";
import NavBar from "./components/NavBar";

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
      <body className={inter.className}>
      <NextUIProvider>
      <NavBar/>
      {children}
      </NextUIProvider>   
</body>
    </html>
  );
}
