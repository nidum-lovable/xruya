
import * as React from "react"
import { TooltipProvider } from "@/components/ui/tooltip"
import { SidebarProvider as BaseSidebarProvider } from "./sidebar/sidebar-context"

// Re-export everything from our sub-modules
export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "./sidebar/sidebar-base"

export {
  SidebarTrigger,
} from "./sidebar/sidebar-controls"

export {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "./sidebar/sidebar-menu"

export {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "./sidebar/sidebar-group"

export {
  SidebarProvider,
  SidebarContext,
  useSidebar,
  useSidebarSafe,
} from "./sidebar/sidebar-context"

// Convenience wrapper with TooltipProvider
export function EnhancedSidebarProvider(props: React.ComponentProps<typeof BaseSidebarProvider>) {
  return (
    <TooltipProvider delayDuration={0}>
      <BaseSidebarProvider {...props} />
    </TooltipProvider>
  )
}
