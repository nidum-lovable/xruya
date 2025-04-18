
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from './sidebar-menu';

interface NestedMenuProps {
  title: string;
  icon?: React.ComponentType;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function NestedMenuItem({ title, icon: Icon, children, defaultOpen = false }: NestedMenuProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <SidebarMenuButton 
          className="w-full justify-between group"
        >
          <div className="flex items-center gap-2">
            {Icon && <Icon className="h-4 w-4" />}
            <span>{title}</span>
          </div>
          <ChevronDown className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "transform rotate-180"
          )} />
        </SidebarMenuButton>
      </CollapsibleTrigger>
      <CollapsibleContent className="animate-accordion-down">
        <div className="pl-4 border-l border-border ml-4 mt-1">
          {children}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
