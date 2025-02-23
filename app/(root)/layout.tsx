export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        <p className="text-white-1">Left SIDEBAR</p>
        {children}
        <p className="text-white-1">Right SIDEBAR</p>
      </main>
    </div>
  );
}
