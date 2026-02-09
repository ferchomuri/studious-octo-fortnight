"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { dashboardNavigation } from "../lib/interfaces/navigation";

import { useIsMobile } from "@/src/hooks/use-mobile";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "./ui/sidebar";

export function DashboardSidebar() {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  return (
    <Sidebar
      collapsible={isMobile ? "offcanvas" : "none"}
      className="sticky top-0 h-screen overflow-hidden border-r border-white/10 bg-sidebar/60 backdrop-blur-xl"
    >
      <SidebarContent>
        <SidebarMenu className="gap-2 p-4 md:py-10 md:px-10 lg:py-20">
          {dashboardNavigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  className={`
                    transition-all duration-300 hover:bg-white/5 hover:text-primary text-lg
                    ${isActive ? "bg-white/10 text-primary shadow-[0_0_15px_rgba(180,90,250,0.3)] font-semibold" : "text-sidebar-foreground"}
                  `}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 py-1"
                  >
                    <item.icon
                      className={`h-5 w-5 ${isActive ? "text-accent drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]" : ""}`}
                    />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
