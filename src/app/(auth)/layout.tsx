import "@/app/globals.css";
// import Footer from "@/components/Footer";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}