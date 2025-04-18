
import React from 'react';
import { Sidebar, SidebarContent, SidebarHeader, SidebarTrigger } from '@/components/ui/sidebar';
import { RecentSearches } from './history/RecentSearches';
import { FolderList } from './history/FolderList';
import { SearchFolder } from './history/types';
import { PanelRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSidebar } from '@/components/ui/sidebar';

const demoFolders: SearchFolder[] = [
  {
    id: '1',
    name: 'Science',
    searches: ['Quantum Physics', 'String Theory'],
  },
  {
    id: '2', 
    name: 'Technology',
    searches: ['AI Trends', 'Web3'],
  },
];

const HistorySidebar = () => {
  const { isMobile } = useSidebar();

  return (
    <Sidebar className="transition-all duration-300 ease-in-out">
      <SidebarHeader>
        <div className="flex items-center justify-between px-4 py-2">
          <h2 className="text-lg font-semibold">Search History</h2>
          {!isMobile && <SidebarTrigger />}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <div className="space-y-4 p-4">
          <RecentSearches />
          <FolderList folders={demoFolders} />
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default HistorySidebar;
