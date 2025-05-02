
import React from 'react';
import { History } from 'lucide-react';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';

export const RecentSearches = () => {
  return (
    <div className="space-y-2">
      <h3 className="px-4 text-sm font-medium flex items-center">
        <History className="w-4 h-4 mr-2" />
        Recent Searches
      </h3>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <History className="w-4 h-4" />
            <span>Latest Search</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </div>
  );
};
