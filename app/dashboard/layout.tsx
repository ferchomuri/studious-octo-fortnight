import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./components/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider className="md:[--sidebar-width:13rem] lg:[--sidebar-width:16rem]">
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <main className="flex-1 flex flex-col">
          <div className="p-4 md:hidden">
            <SidebarTrigger className="text-foreground" />
          </div>
          <div className="p-4 md:p-10 lg:p-20">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
