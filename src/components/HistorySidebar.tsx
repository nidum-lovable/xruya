
import React from 'react';
import { Sidebar, SidebarContent, SidebarHeader } from '@/components/ui/sidebar';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { Clock, Star, Search, PanelLeftClose, ChevronRight } from 'lucide-react';
import { useSidebar } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Mock saved searches (now with more items)
const savedSearches = [
  { id: '1', query: 'AI Technology' },
  { id: '2', query: 'Web Development' },
  { id: '3', query: 'Machine Learning' },
  { id: '4', query: 'React Hooks' },
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
          <div className="space-y-2">
            <h3 className="font-medium text-sm flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Recent Searches
            </h3>
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
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium text-sm flex items-center">
              <Star className="h-4 w-4 mr-2" />
              Saved Searches
            </h3>
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
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full justify-start text-sm text-muted-foreground"
              asChild
            >
              <Link to="/dashboard/search-history">
                <ChevronRight className="h-4 w-4 mr-1" />
                View more
              </Link>
            </Button>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default HistorySidebar;
