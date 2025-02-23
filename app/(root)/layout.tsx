import { LeftSidebar } from "@/components/left-sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        <LeftSidebar />
        {children}
        <p className="text-white-1">Right SIDEBAR</p>
      </main>
    </div>
  );
}
