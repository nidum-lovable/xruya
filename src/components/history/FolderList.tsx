
import React from 'react';
import { FolderItem } from './FolderItem';
import { SearchFolder } from './types';

interface FolderListProps {
  folders: SearchFolder[];
}

export const FolderList = ({ folders }: FolderListProps) => {
  return (
    <div className="space-y-2">
      <h3 className="px-4 text-sm font-medium">Folders</h3>
      <div>
        {folders.map((folder) => (
          <FolderItem key={folder.id} folder={folder} />
        ))}
      </div>
    </div>
  );
};
