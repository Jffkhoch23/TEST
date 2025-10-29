"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CategoryMenuProps {
  open: boolean
  onClose: () => void
  onCategorySelect: (category: string) => void
}

const categories = [
  { id: "all", label: "All Products" },
  { id: "sweaters", label: "Sweaters" },
  { id: "tshirts", label: "T-Shirts" },
  { id: "hoodies", label: "Hoodies" },
  { id: "pants", label: "Pants" },
  { id: "jeans", label: "Jeans" },
]

export function CategoryMenu({ open, onClose, onCategorySelect }: CategoryMenuProps) {
  if (!open) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-50 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-300 motion-reduce:transition-none"
        onClick={onClose}
      />
      <div className="fixed left-0 top-0 bottom-0 w-full max-w-[min(90vw,20rem)] sm:max-w-xs bg-card z-50 shadow-2xl motion-safe:animate-in motion-safe:slide-in-from-left motion-safe:duration-300 motion-reduce:transition-none">
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">Categories</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="p-3 sm:p-4 space-y-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant="ghost"
              className="w-full justify-start text-left text-base hover:bg-accent hover:text-accent-foreground motion-safe:transition-all motion-safe:duration-300 motion-reduce:transition-none rounded-xl py-5 sm:py-6 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              onClick={() => onCategorySelect(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>
    </>
  )
}
