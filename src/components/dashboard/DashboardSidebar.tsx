
import React from 'react';
import { NavLink } from 'react-router-dom';
import { User, History, PanelLeftClose } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar";

const DashboardSidebar = () => {
  const { collapsed } = useSidebar();
  
  const menuItems = [
    { icon: History, label: "Search History", path: "/dashboard/search-history" },
    { icon: User, label: "Profile", path: "/dashboard/profile" },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <h2 className={cn("text-lg font-semibold transition-opacity", 
          collapsed ? "opacity-0" : "opacity-100")}>
          Dashboard
        </h2>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton 
                asChild
                tooltip={item.label}
              >
                <NavLink 
                  to={item.path}
                  className={({ isActive }) => 
                    cn("flex items-center", isActive ? "text-primary" : "text-muted-foreground")
                  }
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  <span className={cn("ml-2 transition-opacity", 
                    collapsed ? "opacity-0 hidden" : "opacity-100")}>{item.label}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

// Need to import cn utility
import { cn } from '@/lib/utils';

export default DashboardSidebar;
