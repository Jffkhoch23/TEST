"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { ProductGrid } from "@/components/product-grid"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/components/cart-context"
import { SettingsProvider } from "@/components/settings-context"
import { UserProvider } from "@/components/user-context"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  return (
    <SettingsProvider>
      <UserProvider>
        <CartProvider>
          <div className="min-h-screen bg-background">
            <Navigation onCategoryChange={setSelectedCategory} />
            <main>
              <HeroSection />
              <ProductGrid category={selectedCategory} />
            </main>
            <Footer />
          </div>
        </CartProvider>
      </UserProvider>
    </SettingsProvider>
  )
}
