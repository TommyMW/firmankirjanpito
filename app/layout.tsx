import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar"
import Footer from "../components/footer"










const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tee-Se-Itse-Kirjanpito",
  description: "Tee-Se-Itse-Kirjanpito-Ohjelmisto.",
};

export default function RootLayout({ children }: 
  Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <head>
        <title>Tee-Se-Itse-Kirjanpito</title>
      </head>
      <body>
        <div className="">
        <Navbar/>
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}