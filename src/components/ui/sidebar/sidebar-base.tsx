
import * as React from "react"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { useSidebar } from "./sidebar-context"

export const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right"
  }
>(({ side = "left", className, children, ...props }, ref) => {
  const { collapsed, mobileOpen, setMobileOpen, isMobile } = useSidebar()
  
  // Mobile sidebar uses Sheet component
  if (isMobile) {
    return (
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent
          side={side}
          className="w-[var(--sidebar-expanded-width)] p-0 bg-sidebar"
        >
          <div className="flex flex-col h-full overflow-y-auto">
            {children}
          </div>
        </SheetContent>
      </Sheet>
    )
  }

  // Desktop sidebar with collapsible behavior
  return (
    <div
      ref={ref}
      className={cn(
        "z-30 h-screen transition-all duration-300 ease-in-out border-r bg-sidebar",
        collapsed ? "w-[var(--sidebar-collapsed-width)]" : "w-[var(--sidebar-expanded-width)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
Sidebar.displayName = "Sidebar"

export const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-between h-14 px-4 border-b", className)}
      {...props}
    />
  )
})
SidebarHeader.displayName = "SidebarHeader"

export const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col flex-1 overflow-auto p-2", className)}
      {...props}
    />
  )
})
SidebarContent.displayName = "SidebarContent"

export const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("border-t p-4", className)}
      {...props}
    />
  )
})
SidebarFooter.displayName = "SidebarFooter"
