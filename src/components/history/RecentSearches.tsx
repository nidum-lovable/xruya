
import React, { useState } from 'react';
import { History, ChevronDown, ChevronUp } from 'lucide-react';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

// Mock recent searches data
const recentSearchItems = [
  { id: '1', query: 'Machine Learning' },
  { id: '2', query: 'React Hooks' },
  { id: '3', query: 'Tailwind CSS' },
  { id: '4', query: 'TypeScript Tutorial' },
  { id: '5', query: 'Next.js Documentation' },
];

export const RecentSearches = () => {
  const [showAll, setShowAll] = useState(false);
  const displayItems = showAll ? recentSearchItems : recentSearchItems.slice(0, 3);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Recent Searches</SidebarGroupLabel>
      <SidebarMenu>
        {displayItems.map((item) => (
          <SidebarMenuItem key={item.id}>
            <SidebarMenuButton>
              <History className="w-4 h-4" />
              <span>{item.query}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
        {recentSearchItems.length > 3 && (
          <SidebarMenuItem>
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full justify-start text-xs text-muted-foreground"
              onClick={toggleShowAll}
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-3 h-3 mr-1" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-3 h-3 mr-1" />
                  View More ({recentSearchItems.length - 3})
                </>
              )}
            </Button>
          </SidebarMenuItem>
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
};
