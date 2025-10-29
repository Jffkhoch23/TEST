"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-16 sm:py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 sm:top-10 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-accent rounded-full blur-3xl motion-safe:animate-pulse motion-reduce:animate-none" />
        <div className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-accent rounded-full blur-3xl motion-safe:animate-pulse motion-reduce:animate-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-balance">
            Discover NOVA Collection
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 text-pretty">
            Unique streetwear designs that make a statement. Express yourself with our exclusive artistic prints.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-medium motion-safe:transition-all motion-safe:duration-300 motion-reduce:transition-none hover:shadow-xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Shop Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-medium motion-safe:transition-all motion-safe:duration-300 motion-reduce:transition-none bg-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              View Collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
