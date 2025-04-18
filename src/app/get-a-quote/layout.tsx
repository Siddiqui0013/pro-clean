import Navbar from "@/app/(landingPage)/sections/components/Navbar"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <div className="fixed w-full top-0 z-50">
            <Navbar />
          </div>
          <main className="flex-grow ">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}