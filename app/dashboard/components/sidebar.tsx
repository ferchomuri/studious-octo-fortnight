"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { dashboardNavigation } from "../config/navigation";

export function DashboardSidebar() {
  const [activeId, setActiveId] = useState("home");

  return (
    <Sidebar className="border-r border-white/10 bg-sidebar/60 backdrop-blur-xl">
      <SidebarContent>
        <SidebarMenu className="gap-2 p-4 md:py-10 md:px-10 lg:py-20">
          {dashboardNavigation.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  onClick={() => setActiveId(id)}
                  className={`
                    transition-all duration-300 hover:bg-white/5 hover:text-primary 
                    ${isActive ? "bg-white/10 text-primary shadow-[0_0_15px_rgba(180,90,250,0.3)] font-semibold" : "text-muted-foreground"}
                  `}
                >
                  <Link href={item.href} className="flex items-center gap-3">
                    <item.icon
                      className={`h-4 w-4 ${isActive ? "text-accent drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]" : ""}`}
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
