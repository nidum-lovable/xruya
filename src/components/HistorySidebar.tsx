
import React from 'react';
import { Sidebar, SidebarContent, SidebarHeader } from '@/components/ui/sidebar/sidebar-components';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar/sidebar-menu';
import { NestedMenuItem } from '@/components/ui/sidebar/nested-menu';
import { Clock, Star, Search, PanelLeftClose } from 'lucide-react';
import { useSidebar } from '@/components/ui/sidebar/sidebar-context';
import { Button } from '@/components/ui/button';

// Mock saved searches
const savedSearches = [
  { id: '1', query: 'AI Technology' },
  { id: '2', query: 'Web Development' },
];

// Mock recent searches
const recentSearches = [
  { id: '1', query: 'Machine Learning' },
  { id: '2', query: 'React Hooks' },
  { id: '3', query: 'Tailwind CSS' },
];

const HistorySidebar = () => {
  let isMobile = false;
  let toggleSidebar = () => {};
  
  try {
    const { isMobile: mobileState, toggleSidebar: toggle } = useSidebar();
    isMobile = mobileState;
    toggleSidebar = toggle;
  } catch (e) {
    console.warn("HistorySidebar used outside of SidebarProvider");
  }

  return (
    <Sidebar className="transition-all duration-300 ease-in-out">
      <SidebarHeader>
        <div className="flex items-center justify-between px-4 py-2">
          <h2 className="text-lg font-semibold">Search History</h2>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleSidebar}
            className="h-8 w-8"
          >
            <PanelLeftClose className="h-4 w-4" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <div className="space-y-4 p-4">
          <SidebarMenu>
            <NestedMenuItem title="Recent Searches" icon={Clock}>
              <SidebarMenu>
                {recentSearches.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton>
                      <Search className="h-4 w-4" />
                      <span>{item.query}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </NestedMenuItem>

            <NestedMenuItem title="Saved Searches" icon={Star}>
              <SidebarMenu>
                {savedSearches.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton>
                      <Search className="h-4 w-4" />
                      <span>{item.query}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </NestedMenuItem>
          </SidebarMenu>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default HistorySidebar;
