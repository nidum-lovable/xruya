
import React from 'react';
import { FolderOpen, ChevronDown, ChevronRight, History } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
} from '@/components/ui/sidebar';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';

interface SearchFolder {
  id: string;
  name: string;
  searches: string[];
}

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
        <SidebarGroup>
          <SidebarGroupLabel>Recent Searches</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <History className="w-4 h-4" />
                <span>Latest Search</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Folders</SidebarGroupLabel>
          {demoFolders.map((folder) => (
            <Collapsible key={folder.id}>
              <CollapsibleTrigger className="flex items-center w-full px-4 py-2 hover:bg-accent">
                <FolderOpen className="w-4 h-4 mr-2" />
                <span className="flex-1 text-left">{folder.name}</span>
                <ChevronDown className="w-4 h-4" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {folder.searches.map((search, index) => (
                    <SidebarMenuItem key={index}>
                      <SidebarMenuButton>
                        <span>{search}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default HistorySidebar;
