import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DashboardSidebar } from "../components/Sidebar";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Music Dashboard",
  description: "Music Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider className="md:[--sidebar-width:13rem] lg:[--sidebar-width:16rem]">
          <div className="flex h-screen w-full overflow-hidden">
            <DashboardSidebar />
            <main className="flex-1 flex flex-col min-w-0 bg-background text-foreground overflow-y-auto">
              <div className="p-4 md:hidden sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
                <SidebarTrigger className="text-foreground" />
              </div>
              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
