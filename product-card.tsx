"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ProductModal } from "@/components/product-modal"
import { useCart } from "@/components/cart-context"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsAnimating(true)
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
    })
    setTimeout(() => setIsAnimating(false), 600)
  }

  return (
    <>
      <div className="group cursor-pointer" onClick={() => setModalOpen(true)}>
        <div className="relative aspect-square bg-muted rounded-xl sm:rounded-2xl overflow-hidden mb-3 motion-safe:transition-all motion-safe:duration-300 motion-reduce:transition-none group-hover:shadow-xl group-hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-ring">
          <Image
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-reduce:transition-none group-hover:scale-110"
          />
          {isAnimating && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-50 motion-safe:duration-300 motion-reduce:transition-none">
              <div className="bg-accent text-accent-foreground px-3 sm:px-4 py-2 rounded-full font-medium text-sm">
                Added to cart!
              </div>
            </div>
          )}
        </div>
        <div className="space-y-2">
          <h3 className="font-medium text-foreground text-sm md:text-base line-clamp-2">{product.name}</h3>
          <p className="text-base sm:text-lg md:text-xl font-bold text-foreground">€{product.price.toFixed(2)}</p>
          <Button
            onClick={handleAddToCart}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl motion-safe:transition-all motion-safe:duration-300 motion-reduce:transition-none hover:shadow-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 py-5"
          >
            Add to Cart
          </Button>
        </div>
      </div>

      <ProductModal product={product} open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
