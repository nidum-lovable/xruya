
import React from 'react';
import { NavLink } from 'react-router-dom';
import { User, History } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const DashboardSidebar = () => {
  const menuItems = [
    { icon: User, label: "Profile", path: "/dashboard/profile" },
    { icon: History, label: "Search History", path: "/dashboard/search-history" },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="px-4 py-6">
        <h2 className="text-lg font-semibold">Dashboard</h2>
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
