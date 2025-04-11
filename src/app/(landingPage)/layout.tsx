import type { Metadata } from "next";
import { Be_Vietnam_Pro as Geist } from "next/font/google";
import "@/app/globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: "200"
});

export const metadata: Metadata = {
  title: "Pro Clean",
  description: "Hire a cleaner for your home or office",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
      <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
