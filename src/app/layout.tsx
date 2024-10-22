import type { Metadata } from "next";
import {Lora} from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const lora = Lora ({subsets:["latin"]})

export const metadata: Metadata = {
  title: {
    template:"%s | maravilla",
    absolute:"maravilla"
  },
  description: "Maravilla Casual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.className}`} 
      >
        <NavBar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
