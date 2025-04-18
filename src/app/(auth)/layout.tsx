export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="md:overflow-hidden">
        {children}
    </div>
  );
}