
import * as React from "react"
import { useIsMobile } from "@/hooks/use-mobile"

const SIDEBAR_COOKIE_NAME = "sidebar:state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

export type SidebarContext = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContext | null>(null)

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }
  return context
}

// Create a safe version of useSidebar that won't throw if used outside of provider
export function useSidebarSafe() {
  const context = React.useContext(SidebarContext)
  return context || {
    state: "expanded" as const,
    open: true,
    setOpen: () => {},
    openMobile: false,
    setOpenMobile: () => {},
    isMobile: false,
    toggleSidebar: () => {},
  }
}

export function SidebarProvider({
  defaultOpen = true,
  children,
  className,
  style,
  open: openProp,
  onOpenChange: setOpenProp,
}: React.PropsWithChildren<{
  defaultOpen?: boolean
  className?: string
  style?: React.CSSProperties
  open?: boolean
  onOpenChange?: (open: boolean) => void
}>) {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)
  
  // Get initial state from cookie if available
  const [_open, _setOpen] = React.useState(() => {
    // Only check for cookie in client-side
    if (typeof document !== "undefined") {
      const match = document.cookie.match(
        new RegExp(`(^| )${SIDEBAR_COOKIE_NAME}=([^;]+)`)
      )
      return match ? match[2] === "true" : defaultOpen
    }
    return defaultOpen
  })
  
  // Use controlled or uncontrolled state
  const open = openProp !== undefined ? openProp : _open
  const setOpen = React.useCallback(
    (value: boolean | ((prevState: boolean) => boolean)) => {
      const nextValue = typeof value === "function" ? value(open) : value
      
      if (setOpenProp) {
        setOpenProp(nextValue)
      } else {
        _setOpen(nextValue)
      }
      
      // Set cookie to persist state
      if (typeof document !== "undefined") {
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${nextValue}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
      }
    },
    [open, setOpenProp]
  )

  // Helper function to toggle sidebar state
  const toggleSidebar = React.useCallback(() => {
    if (isMobile) {
      setOpenMobile((prev) => !prev)
    } else {
      setOpen((prev) => !prev)
    }
  }, [isMobile, setOpen, setOpenMobile])

  // Add keyboard shortcut
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleSidebar])

  const state = open ? "expanded" : "collapsed"

  const contextValue = React.useMemo<SidebarContext>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <div
        style={{
          "--sidebar-width": "16rem",
          "--sidebar-width-icon": "3rem",
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
