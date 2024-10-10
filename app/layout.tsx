import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar"
import Footer from "../components/footer"










const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Draive AI",
  description: "Automate Drive-Thrus with AI.",
};

export default function RootLayout({ children }: 
  Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <head>
        <title>Draive - AI Drive-Thrus</title>
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