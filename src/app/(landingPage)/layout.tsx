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
        <div className="flex flex-col min-h-screen">
          <div className="fixed w-full top-0 z-50">
            <Navbar />
          </div>
          <main className="flex-grow ">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}



// import type { Metadata } from "next";
// import { Be_Vietnam_Pro as Geist } from "next/font/google";
// import "@/app/globals.css";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
//   weight: "200"
// });

// export const metadata: Metadata = {
//   title: "Pro Clean",
//   description: "Hire a cleaner for your home or office",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} antialiased`}
//       >
//       <div className="flex flex-col min-h-screen">
//       <div className="fixed w-full h-full z-10">
//       <Navbar />
//       </div>
//         {children}
//       <Footer />
//       </div>
//       </body>
//     </html>
//   );
// }
