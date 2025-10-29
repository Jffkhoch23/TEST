"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface User {
  email: string
  name: string
}

interface UserContextType {
  user: User | null
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  isAuthenticated: boolean
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 800))

    // Simple validation (this is a demo - in production, use real authentication)
    if (!email || !password) {
      return { success: false, error: "Please fill in all fields" }
    }

    if (password.length < 6) {
      return { success: false, error: "Password must be at least 6 characters" }
    }

    // Mock successful login
    const userName = email.split("@")[0]
    setUser({
      email,
      name: userName.charAt(0).toUpperCase() + userName.slice(1),
    })

    return { success: true }
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <UserContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>{children}</UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUser must be used within UserProvider")
  }
  return context
}
