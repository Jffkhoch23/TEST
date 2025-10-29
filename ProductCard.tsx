"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  product: {
    id: number
    name: string
    price: number
    description: string
    images: string[]
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const [added, setAdded] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const addToCart = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 600)
    console.log("Added to cart:", product)
  }

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <>
      <div className="cursor-pointer relative" onClick={openModal}>
        <img src={product.images[0]} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-2" />
        {added && (
          <div className="absolute inset-0 bg-black/20 flex justify-center items-center rounded-lg">
            <div className="bg-orange-500 text-white px-4 py-2 rounded-md">Added to cart!</div>
          </div>
        )}
        <h3 className="font-bold">{product.name}</h3>
        <p>€{product.price.toFixed(2)}</p>
        <Button className="w-full mt-2 bg-orange-500 text-white rounded-lg" onClick={(e) => { e.stopPropagation(); addToCart() }}>
          Add to Cart
        </Button>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg max-w-md w-11/12 p-4 relative">
            <span className="absolute top-2 right-2 cursor-pointer font-bold" onClick={closeModal}>X</span>
            <img src={product.images[0]} alt={product.name} className="w-full h-64 object-cover rounded-lg mb-2" />
            <h3 className="font-bold text-xl">{product.name}</h3>
            <p className="mb-2">€{product.price.toFixed(2)}</p>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <Button className="w-full bg-orange-500 text-white rounded-lg mt-2" onClick={addToCart}>
              Buy Now
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
