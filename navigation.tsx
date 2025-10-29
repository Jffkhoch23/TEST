"use client"

import { useState } from "react"
import { Menu, Settings, ShoppingCart, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CategoryMenu } from "@/components/category-menu"
import { SettingsMenu } from "@/components/settings-menu"
import { LoginDialog } from "@/components/login-dialog"
import { CartDrawer } from "@/components/cart-drawer"
import { useCart } from "@/components/cart-context"
import { useUser } from "@/components/user-context"

interface NavigationProps {
  onCategoryChange: (category: string) => void
}

export function Navigation({ onCategoryChange }: NavigationProps) {
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const { items } = useCart()
  const { user, logout, isAuthenticated } = useUser()

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  const handleAuthClick = () => {
    if (isAuthenticated) {
      logout()
    } else {
      setLoginOpen(true)
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Menu */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCategoryOpen(true)}
              className="text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* Center - Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <h1 className="text-2xl font-bold text-primary-foreground tracking-wider">NOVA</h1>
          </div>

          {/* Right side - Settings, Cart, Login/Logout */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSettingsOpen(true)}
              className="text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <Settings className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCartOpen(true)}
              className="relative text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-in zoom-in-50">
                  {totalItems}
                </span>
              )}
            </Button>

            <Button
              onClick={handleAuthClick}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-6 rounded-full transition-all duration-300 hover:shadow-lg flex items-center gap-2"
            >
              {isAuthenticated ? (
                <>
                  <span className="hidden sm:inline">{user?.name}</span>
                  <LogOut className="h-4 w-4" />
                </>
              ) : (
                "Login"
              )}
            </Button>
          </div>
        </div>
      </div>

      <CategoryMenu
        open={categoryOpen}
        onClose={() => setCategoryOpen(false)}
        onCategorySelect={(category) => {
          onCategoryChange(category)
          setCategoryOpen(false)
        }}
      />
      <SettingsMenu open={settingsOpen} onClose={() => setSettingsOpen(false)} />
      <LoginDialog open={loginOpen} onClose={() => setLoginOpen(false)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </nav>
  )
}
