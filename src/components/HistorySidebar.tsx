
import React from 'react';
import { Sidebar, SidebarContent, SidebarHeader } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { PanelLeftClose } from 'lucide-react';
import { useSidebar } from '@/components/ui/sidebar';
import { RecentSearches } from '@/components/history/RecentSearches';
import { SavedSearches } from '@/components/history/SavedSearches';

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
          <RecentSearches />
          <SavedSearches />
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default HistorySidebar;
