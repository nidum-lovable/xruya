
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
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

// Mock saved searches data
const savedSearchItems = [
  { id: '1', query: 'AI Technology' },
  { id: '2', query: 'Web Development' },
  { id: '3', query: 'JavaScript Frameworks' },
  { id: '4', query: 'UI/UX Best Practices' },
  { id: '5', query: 'Responsive Design' },
];

export const SavedSearches = () => {
  const [open, setOpen] = useState(false);
  // Always show the first 3 items
  const initialItems = savedSearchItems.slice(0, 3);
  // Extra items to show/hide
  const extraItems = savedSearchItems.slice(3);

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Saved Searches</SidebarGroupLabel>
      <SidebarMenu>
        {/* Always visible items */}
        {initialItems.map((item) => (
          <SidebarMenuItem key={item.id}>
            <SidebarMenuButton>
              <Star className="w-4 h-4" />
              <span>{item.query}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
        
        {extraItems.length > 0 && (
          <Collapsible open={open} onOpenChange={setOpen}>
            <CollapsibleContent>
              {extraItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton>
                    <Star className="w-4 h-4" />
                    <span>{item.query}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </CollapsibleContent>
            
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full justify-start text-xs text-muted-foreground"
                >
                  {open ? (
                    <>
                      <ChevronUp className="w-3 h-3 mr-1" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-3 h-3 mr-1" />
                      View More ({extraItems.length})
                    </>
                  )}
                </Button>
              </CollapsibleTrigger>
            </SidebarMenuItem>
          </Collapsible>
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
};
