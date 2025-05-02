
import * as React from "react"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-context"

export const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right"
    variant?: "sidebar" | "floating" | "inset"
    collapsible?: "offcanvas" | "icon" | "none"
  }
>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "none",
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Try to use the real sidebar context, but handle the case where it's not available
    let sidebarState = { 
      isMobile: false, 
      collapsed: false,
      mobileOpen: false,
      setMobileOpen: (open: boolean) => {} 
    };
    
    try {
      sidebarState = useSidebar();
    } catch (e) {
      // Use default values if context is not available
      console.warn("Sidebar used outside of SidebarProvider, using default values");
    }
    
    const { isMobile, collapsed, mobileOpen, setMobileOpen } = sidebarState;
    const state = collapsed ? "collapsed" : "expanded";

    if (collapsible === "none") {
      return (
        <div
          className={cn(
            "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      )
    }

    if (isMobile) {
      return (
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
            style={{ "--sidebar-width": "18rem" } as React.CSSProperties}
            side={side}
          >
            <div className="flex h-full w-full flex-col overflow-y-auto">{children}</div>
          </SheetContent>
        </Sheet>
      )
    }

    return (
      <div
        ref={ref}
        className="group peer hidden md:block text-sidebar-foreground"
        data-state={state}
        data-collapsible={collapsible}
        data-variant={variant}
        data-side={side}
      >
        <div
          className={cn(
            "relative h-svh transition-all duration-300 ease-in-out",
            state === "expanded" ? "w-[--sidebar-width]" : "w-[--sidebar-width-icon]",
            className
          )}
        >
          <div
            data-sidebar="sidebar"
            className="fixed inset-y-0 z-10 flex h-svh flex-col overflow-y-auto bg-sidebar border-r transition-all duration-300 ease-in-out"
            style={{
              width: state === "expanded" ? "var(--sidebar-width)" : "var(--sidebar-width-icon)"
            }}
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
)
Sidebar.displayName = "Sidebar"

export const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
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
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto",
        className
      )}
      {...props}
    />
  )
})
SidebarContent.displayName = "SidebarContent"

export const SidebarTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, onClick, ...props }, ref) => {
  // Try to use the real sidebar context, but handle the case where it's not available
  let toggleSidebar = () => {};
  try {
    const sidebarContext = useSidebar();
    toggleSidebar = sidebarContext.toggleSidebar;
  } catch (e) {
    console.warn("SidebarTrigger used outside of SidebarProvider");
  }

  return (
    <button
      ref={ref}
      data-sidebar="trigger"
      className={cn("h-7 w-7 rounded-md p-1 hover:bg-accent", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M9 3v18" />
      </svg>
      <span className="sr-only">Toggle Sidebar</span>
    </button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"
