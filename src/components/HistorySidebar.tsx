
import React from 'react';
import { Sidebar, SidebarContent, SidebarHeader } from '@/components/ui/sidebar';
import { RecentSearches } from './history/RecentSearches';
import { FolderList } from './history/FolderList';
import { SearchFolder } from './history/types';

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
        <h2 className="text-lg font-semibold px-4 py-2">Search History</h2>
      </SidebarHeader>
      <SidebarContent>
        <RecentSearches />
        <FolderList folders={demoFolders} />
      </SidebarContent>
    </Sidebar>
  );
};

export default HistorySidebar;
