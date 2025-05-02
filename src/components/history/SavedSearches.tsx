
import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

// Mock saved searches data
const savedSearchItems = [
  { id: '1', query: 'AI Technology' },
  { id: '2', query: 'Web Development' },
  { id: '3', query: 'JavaScript Frameworks' },
  { id: '4', query: 'UI/UX Best Practices' },
  { id: '5', query: 'Responsive Design' },
];

export const SavedSearches = () => {
  const [showAll, setShowAll] = useState(false);
  const displayItems = showAll ? savedSearchItems : savedSearchItems.slice(0, 3);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Saved Searches</SidebarGroupLabel>
      <SidebarMenu>
        {displayItems.map((item) => (
          <SidebarMenuItem key={item.id}>
            <SidebarMenuButton>
              <Star className="w-4 h-4" />
              <span>{item.query}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
        {savedSearchItems.length > 3 && (
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
                  View More ({savedSearchItems.length - 3})
                </>
              )}
            </Button>
          </SidebarMenuItem>
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
};
