
import React from 'react';
import { FolderItem } from './FolderItem';
import { SearchFolder } from './types';
import { SidebarGroup, SidebarGroupLabel } from '@/components/ui/sidebar';

interface FolderListProps {
  folders: SearchFolder[];
}

export const FolderList = ({ folders }: FolderListProps) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Folders</SidebarGroupLabel>
      {folders.map((folder) => (
        <FolderItem key={folder.id} folder={folder} />
      ))}
    </SidebarGroup>
  );
};
