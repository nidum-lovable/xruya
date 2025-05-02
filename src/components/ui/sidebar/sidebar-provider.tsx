
import * as React from "react"
import { TooltipProvider } from "@/components/ui/tooltip"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { SidebarContext } from "./sidebar-context"

const SIDEBAR_KEYBOARD_SHORTCUT = "b"

export const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultCollapsed?: boolean
    collapsed?: boolean
    onCollapsedChange?: (collapsed: boolean) => void
  }
>(
  (
    {
      defaultCollapsed = false,
      collapsed: collapsedProp,
      onCollapsedChange: setCollapsedProp,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const isMobile = useIsMobile()
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const [_collapsed, _setCollapsed] = React.useState(defaultCollapsed)
    const collapsed = collapsedProp ?? _collapsed
    
    const setCollapsed = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const collapsedState = typeof value === "function" ? value(collapsed) : value
        if (setCollapsedProp) {
          setCollapsedProp(collapsedState)
        } else {
          _setCollapsed(collapsedState)
        }
        document.cookie = `sidebar:collapsed=${collapsedState}; path=/; max-age=${60 * 60 * 24 * 7}`
      },
      [setCollapsedProp, collapsed]
    )

    const toggleSidebar = React.useCallback(() => {
      return isMobile
        ? setMobileOpen((open) => !open)
        : setCollapsed((collapsed) => !collapsed)
    }, [isMobile, setCollapsed])

    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault()
          toggleSidebar()
        }
      }

      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }, [toggleSidebar])

    const contextValue = React.useMemo<SidebarContext>(
      () => ({
        collapsed,
        setCollapsed,
        mobileOpen,
        setMobileOpen,
        isMobile,
        toggleSidebar,
      }),
      [collapsed, setCollapsed, isMobile, mobileOpen, setMobileOpen, toggleSidebar]
    )

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
            style={
              {
                "--sidebar-expanded-width": "16rem",
                "--sidebar-collapsed-width": "4rem",
                ...style,
              } as React.CSSProperties
            }
            className={cn(
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
              className
            )}
            ref={ref}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    )
  }
)
SidebarProvider.displayName = "SidebarProvider"
