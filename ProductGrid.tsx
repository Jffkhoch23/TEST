"use client"

import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"

interface ProductGridProps {
  category: string
}

export function ProductGrid({ category }: ProductGridProps) {
  const filteredProducts = category === "all" ? products : products.filter((p) => p.category === category)

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
