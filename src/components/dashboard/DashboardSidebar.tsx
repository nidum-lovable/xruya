
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
} from "@/components/ui/sidebar";
import { Button } from '@/components/ui/button';
import { useSidebar } from '@/components/ui/sidebar';

const DashboardSidebar = () => {
  const { toggleSidebar } = useSidebar();
  
  const menuItems = [
    { icon: History, label: "Search History", path: "/dashboard/search-history" },
    { icon: User, label: "Profile", path: "/dashboard/profile" },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-between px-4 py-6">
        <h2 className="text-lg font-semibold">Dashboard</h2>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar} 
          className="h-8 w-8"
        >
          <PanelLeftClose className="h-5 w-5" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton asChild>
                <NavLink 
                  to={item.path}
                  className={({ isActive }) => 
                    isActive ? "text-primary" : "text-gray-600 hover:text-primary"
                  }
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default DashboardSidebar;
