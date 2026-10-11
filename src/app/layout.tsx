import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

import Navbar from "./Component/Navber";
import Footer from "./Component/Footer";

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali", "latin"],
  variable: "--font-noto-bengali",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "বাজার দর | BazarDor",
    template: "%s | বাজার দর",
  },
  description: "নিত্যপ্রয়োজনীয় পণ্যের বাজারদর এক নজরে দেখুন।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={`${notoSansBengali.variable} h-full antialiased`}>
      <body className="flex min-h-screen flex-col font-sans">
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}