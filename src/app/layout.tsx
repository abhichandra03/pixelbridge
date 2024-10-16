import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Parent from "@/Components/Parent";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const Cheeseburga = localFont({
  src: "./fonts/CHEESEBURGA.woff",
  variable: "--font-Cheeseburga",
  weight: "100 200 300 400 500 600 700 800 900",
});
const Montserrat = localFont({
  src: "./fonts/Montserrat.woff",
  variable: "--font-Montserrat",
  weight: "100 200 300 400 500 600 700 800 900",
});
const KumbhSans = localFont({
  src: "./fonts/Montserrat.woff",
  variable: "--font-KumbhSans",
  weight: "300 400 700",
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${Cheeseburga.variable} ${Montserrat.variable} ${KumbhSans.variable} antialiased z-10 `}
      >
        <Parent />
      </body>
    </html>
  );
}
