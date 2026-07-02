import type { Metadata } from "next";
import { Georama, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";




const georama = Georama({
  subsets: ["latin"],
  variable: "--font-georama",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Karan's MacBook Protfolio",
  description: "Protfolio like a Macbook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${georama.variable} ${robotoMono.variable} antialiased`}
      >
        
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
