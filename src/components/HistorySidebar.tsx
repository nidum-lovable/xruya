
import React from 'react';
import { Sidebar, SidebarContent, SidebarHeader } from '@/components/ui/sidebar/sidebar-components';
import { RecentSearches } from './history/RecentSearches';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar/sidebar-menu';
import { NestedMenuItem } from '@/components/ui/sidebar/nested-menu';
import { Clock, Star, Search } from 'lucide-react';
import { useSidebar } from '@/components/ui/sidebar/sidebar-context';

const HistorySidebar = () => {
  let isMobile = false;
  try {
    const { isMobile: mobileState } = useSidebar();
    isMobile = mobileState;
  } catch (e) {
    console.warn("HistorySidebar used outside of SidebarProvider");
  }

  return (
    <Sidebar className="transition-all duration-300 ease-in-out">
      <SidebarHeader>
        <div className="flex items-center justify-between px-4 py-2">
          <h2 className="text-lg font-semibold">Search History</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <div className="space-y-4 p-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Clock className="h-4 w-4" />
                <span>Recent Searches</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <NestedMenuItem title="Saved Searches" icon={Star}>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Search className="h-4 w-4" />
                    <span>AI Technology</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Search className="h-4 w-4" />
                    <span>Web Development</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </NestedMenuItem>
          </SidebarMenu>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default HistorySidebar;
