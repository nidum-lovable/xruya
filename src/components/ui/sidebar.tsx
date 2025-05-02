
import * as React from "react"
import { TooltipProvider } from "@/components/ui/tooltip"
import { SidebarProvider, SidebarContext, useSidebar, useSidebarSafe } from "./sidebar/sidebar-context"

// Re-export everything from our sub-modules
export {
  // Base sidebar components
  Sidebar, 
  SidebarHeader, 
  SidebarFooter,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarInset
} from "./sidebar/sidebar-base"

export {
  // Control components
  SidebarTrigger,
  SidebarRail,
  SidebarInput,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarSeparator
} from "./sidebar/sidebar-controls"

export {
  // Menu components
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton
} from "./sidebar/sidebar-menu"

// Re-export context
export {
  SidebarProvider,
  SidebarContext,
  useSidebar,
  useSidebarSafe
}

// Wrap everything in a TooltipProvider for convenience
export function EnhancedSidebarProvider(props: React.ComponentProps<typeof SidebarProvider>) {
  return (
    <TooltipProvider delayDuration={0}>
      <SidebarProvider {...props} />
    </TooltipProvider>
  )
}

export { type SidebarContext as SidebarContextType } from "./sidebar/sidebar-context"
