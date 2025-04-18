
import React from 'react';
import { Sidebar, SidebarContent, SidebarHeader, SidebarTrigger } from '@/components/ui/sidebar';
import { RecentSearches } from './history/RecentSearches';
import { FolderList } from './history/FolderList';
import { SearchFolder } from './history/types';
import { PanelRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-between px-4 py-2">
          <h2 className="text-lg font-semibold">Search History</h2>
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <RecentSearches />
        <FolderList folders={demoFolders} />
      </SidebarContent>
    </Sidebar>
  );
};

export default HistorySidebar;
