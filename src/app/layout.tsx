import { UserProvider } from '@/context';
import './globals.css';
import { Be_Vietnam_Pro as Geist } from "next/font/google";
import { Metadata } from 'next';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    weight: "200"
  });

export const metadata: Metadata = {
  title: 'ProClean - Professional Cleaning Services',
  description: 'Connect with professional cleaners in your area',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}