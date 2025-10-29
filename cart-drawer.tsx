"use client"

import { X, Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-context"
import Image from "next/image"

interface CartDrawerProps {
  open: boolean
  onClose: () => void
}

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, updateQuantity, removeItem } = useCart()

  if (!open) return null

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-50 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-300 motion-reduce:transition-none"
        onClick={onClose}
      />
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-[min(95vw,28rem)] sm:max-w-md bg-card z-50 shadow-2xl motion-safe:animate-in motion-safe:slide-in-from-right motion-safe:duration-300 motion-reduce:transition-none flex flex-col">
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">Shopping Cart</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center p-6">
            <p className="text-muted-foreground text-center">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 sm:gap-4 bg-muted/30 p-3 sm:p-4 rounded-xl">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-background flex-shrink-0">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 space-y-2 min-w-0">
                    <h3 className="font-medium text-foreground text-sm sm:text-base line-clamp-2">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">€{item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-transparent focus-visible:ring-2 focus-visible:ring-ring"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-6 sm:w-8 text-center font-medium text-sm">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-transparent focus-visible:ring-2 focus-visible:ring-ring"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 sm:h-8 sm:w-8 ml-auto text-destructive hover:text-destructive focus-visible:ring-2 focus-visible:ring-ring"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border p-4 sm:p-6 space-y-4">
              <div className="flex items-center justify-between text-base sm:text-lg font-bold">
                <span>Total</span>
                <span>€{total.toFixed(2)}</span>
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl py-5 sm:py-6 font-medium motion-safe:transition-all motion-safe:duration-300 motion-reduce:transition-none hover:shadow-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                Checkout
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
