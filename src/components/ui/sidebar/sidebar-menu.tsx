
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-context"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-col space-y-1 py-2", className)}
    {...props}
  />
))
SidebarMenu.displayName = "SidebarMenu"

export const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("px-2", className)}
    {...props}
  />
))
SidebarMenuItem.displayName = "SidebarMenuItem"

export interface SidebarMenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  active?: boolean
  tooltip?: string
}

export const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuButtonProps
>(({ className, asChild = false, active, tooltip, children, ...props }, ref) => {
  const { collapsed } = useSidebar()
  const Comp = asChild ? Slot : "button"
  
  const button = (
    <Comp
      ref={ref}
      className={cn(
        "flex items-center w-full px-2 py-1.5 text-sm rounded-md gap-x-3 hover:bg-accent/50",
        active && "bg-accent text-accent-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
  
  // Use tooltip only when sidebar is collapsed
  if (tooltip && collapsed) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent side="right">{tooltip}</TooltipContent>
      </Tooltip>
    )
  }
  
  return button
})
SidebarMenuButton.displayName = "SidebarMenuButton"
