"use client"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 text-white py-16 sm:py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 sm:top-10 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
            Discover NOVA Collection
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90">
            Unique streetwear designs that make a statement. Express yourself with our exclusive artistic prints.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-medium transition-all duration-300 hover:shadow-xl focus:ring-2 focus:ring-offset-2">
              Shop Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-500 rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-medium transition-all duration-300 focus:ring-2 focus:ring-offset-2">
              View Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
