
import React from 'react';
import { FolderOpen, ChevronDown } from 'lucide-react';
import { SearchFolder } from './types';
import { SidebarMenuItem, SidebarMenuButton, SidebarMenu } from '@/components/ui/sidebar';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';

interface FolderItemProps {
  folder: SearchFolder;
}

export const FolderItem = ({ folder }: FolderItemProps) => {
  return (
    <Collapsible>
      <CollapsibleTrigger className="flex items-center w-full px-4 py-2 hover:bg-accent">
        <FolderOpen className="w-4 h-4 mr-2" />
        <span className="flex-1 text-left">{folder.name}</span>
        <ChevronDown className="w-4 h-4" />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="pl-4">
          <SidebarMenu>
            {folder.searches.map((search, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton>
                  <span>{search}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
