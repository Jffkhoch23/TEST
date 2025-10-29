"use client"

import type React from "react"

import { useState } from "react"
import { X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useUser } from "@/components/user-context"

interface LoginDialogProps {
  open: boolean
  onClose: () => void
}

export function LoginDialog({ open, onClose }: LoginDialogProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const { login } = useUser()

  if (!open) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    const result = await login(email, password)

    setIsLoading(false)

    if (result.success) {
      setEmail("")
      setPassword("")
      onClose()
    } else {
      setError(result.error || "Login failed")
    }
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-50 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-300 motion-reduce:transition-none"
        onClick={onClose}
      />
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[calc(100vw-2rem)] sm:max-w-md bg-card z-50 rounded-2xl shadow-2xl motion-safe:animate-in motion-safe:zoom-in-95 motion-safe:duration-300 motion-reduce:transition-none">
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">Login</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4">
          {error && (
            <div className="bg-destructive/10 text-destructive px-4 py-3 rounded-xl text-sm motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-top-2 motion-reduce:transition-none">
              {error}
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl"
              required
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-xl"
              required
              disabled={isLoading}
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl py-5 sm:py-6 font-medium motion-safe:transition-all motion-safe:duration-300 motion-reduce:transition-none hover:shadow-lg disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 motion-safe:animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            {"Don't have an account? "}
            <button
              type="button"
              className="text-accent hover:underline font-medium focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm focus-visible:outline-none"
            >
              Sign up
            </button>
          </p>
        </form>
      </div>
    </>
  )
}
