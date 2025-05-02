
import * as React from "react"
import { useIsMobile } from "@/hooks/use-mobile"

export type SidebarContext = {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
  mobileOpen: boolean
  setMobileOpen: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContext | null>(null)

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

export function useSidebarSafe() {
  const context = React.useContext(SidebarContext)
  return context || {
    collapsed: false,
    setCollapsed: () => {},
    mobileOpen: false,
    setMobileOpen: () => {},
    isMobile: false,
    toggleSidebar: () => {},
  }
}

export function SidebarProvider({
  defaultCollapsed = false,
  children,
  className,
  style,
}: React.PropsWithChildren<{
  defaultCollapsed?: boolean
  className?: string
  style?: React.CSSProperties
}>) {
  const isMobile = useIsMobile()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed)

  // Toggle function that handles both mobile and desktop states
  const toggleSidebar = React.useCallback(() => {
    if (isMobile) {
      setMobileOpen((prev) => !prev)
    } else {
      setCollapsed((prev) => !prev)
    }
  }, [isMobile])

  // Add keyboard shortcut for toggling sidebar
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "b" && (event.metaKey || event.ctrlKey)) {
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
    [collapsed, isMobile, mobileOpen, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <div
        style={{
          "--sidebar-expanded-width": "16rem",
          "--sidebar-collapsed-width": "4rem",
          ...style,
        } as React.CSSProperties}
        className={className}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  )
}

export { SidebarContext }
