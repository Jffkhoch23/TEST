"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-context"
import type { Product } from "@/lib/products"

interface ProductModalProps {
  product: Product
  open: boolean
  onClose: () => void
}

export function ProductModal({ product, open, onClose }: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { addItem } = useCart()

  if (!open) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
    })
  }

  const handleBuyNow = () => {
    handleAddToCart()
    onClose()
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black/70 z-50 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-300 motion-reduce:transition-none"
        onClick={onClose}
      />
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[calc(100vw-1rem)] sm:max-w-[calc(100vw-2rem)] md:max-w-4xl max-h-[95vh] sm:max-h-[90vh] bg-card z-50 rounded-xl sm:rounded-2xl shadow-2xl motion-safe:animate-in motion-safe:zoom-in-95 motion-safe:duration-300 motion-reduce:transition-none overflow-hidden">
        <div className="flex flex-col md:flex-row h-full max-h-[95vh] sm:max-h-[90vh]">
          {/* Image Section */}
          <div className="relative md:w-1/2 aspect-square md:aspect-auto bg-muted">
            <Image
              src={product.images[currentImageIndex] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
            />
            {product.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full focus-visible:ring-2 focus-visible:ring-ring"
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                >
                  <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full focus-visible:ring-2 focus-visible:ring-ring"
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                >
                  <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      className={`h-2 rounded-full motion-safe:transition-all motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                        index === currentImageIndex ? "bg-accent w-6" : "bg-background/50 w-2"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation()
                        setCurrentImageIndex(index)
                      }}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 p-4 sm:p-6 md:p-8 overflow-y-auto">
            <div className="flex items-start justify-between mb-4 sm:mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">{product.name}</h2>
                <p className="text-2xl sm:text-3xl font-bold text-accent">€{product.price.toFixed(2)}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="focus-visible:ring-2 focus-visible:ring-ring"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">{product.description}</p>

            <div className="space-y-3">
              <Button
                onClick={handleBuyNow}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl py-5 sm:py-6 font-medium text-base sm:text-lg motion-safe:transition-all motion-safe:duration-300 motion-reduce:transition-none hover:shadow-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Buy Now
              </Button>
              <Button
                onClick={handleAddToCart}
                variant="outline"
                className="w-full rounded-xl py-5 sm:py-6 font-medium text-base sm:text-lg motion-safe:transition-all motion-safe:duration-300 motion-reduce:transition-none hover:bg-accent hover:text-accent-foreground bg-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Add to Cart
              </Button>
            </div>

            <div className="mt-6 sm:mt-8 pt-6 border-t border-border space-y-2 text-xs sm:text-sm text-muted-foreground">
              <p>• Premium quality materials</p>
              <p>• Free shipping on orders over €50</p>
              <p>• 30-day return policy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
