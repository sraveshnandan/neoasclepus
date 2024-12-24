import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppMetaData } from "@/constants";
import { Toaster } from "react-hot-toast";
import Header from "@/components/globle/Header";
import Footer from "@/components/globle/Footer";


;
const sofiasans = localFont({
  src: "./fonts/SofiaSans-VariableFont_wght.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = AppMetaData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sofiasans.variable} relative max-w-8xl mx-auto bg-[#E9EAEC]  antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Toaster position="top-center" toastOptions={{ duration: 1200 }} />
      </body>
    </html>
  );
}
