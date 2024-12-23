
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import {ToastContainer} from 'react-toastify'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Audiophile",
  description: "The best place to get music gear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <ToastContainer />
          {children}
          </CartProvider>
      </body>
    </html>
  );
}
