"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface SettingsContextType {
  language: string
  currency: string
  theme: string
  setLanguage: (lang: string) => void
  setCurrency: (curr: string) => void
  setTheme: (theme: string) => void
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState("en")
  const [currency, setCurrencyState] = useState("eur")
  const [theme, setThemeState] = useState("light")

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("nova-language")
    const savedCurrency = localStorage.getItem("nova-currency")
    const savedTheme = localStorage.getItem("nova-theme")

    if (savedLanguage) setLanguageState(savedLanguage)
    if (savedCurrency) setCurrencyState(savedCurrency)
    if (savedTheme) setThemeState(savedTheme)
  }, [])

  const setLanguage = (lang: string) => {
    setLanguageState(lang)
    localStorage.setItem("nova-language", lang)
  }

  const setCurrency = (curr: string) => {
    setCurrencyState(curr)
    localStorage.setItem("nova-currency", curr)
  }

  const setTheme = (newTheme: string) => {
    setThemeState(newTheme)
    localStorage.setItem("nova-theme", newTheme)

    // Apply theme to document
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else if (newTheme === "light") {
      document.documentElement.classList.remove("dark")
    } else {
      // System theme
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      if (prefersDark) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
  }

  return (
    <SettingsContext.Provider value={{ language, currency, theme, setLanguage, setCurrency, setTheme }}>
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error("useSettings must be used within SettingsProvider")
  }
  return context
}
