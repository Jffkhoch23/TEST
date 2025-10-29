export interface Product {
  id: string
  name: string
  price: number
  category: string
  images: string[]
  description: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "NOVA Gummy Bear Hoodie - White",
    price: 59.99,
    category: "hoodies",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_000000009524620aa05b7902a40cadb4-osMD8R698HZ3BgScf4nbakZRDbH1Ve.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20ohne%20Titel_20251008_175819_0000-3oogzkuSxlJhxc9kCZf6UctOdjoyXf.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_00000000257c6246a58fd650e50a61e3-CgiHqyoGVVfNa9uGiLXeW7Z05eSERv.png",
    ],
    description:
      "Premium white hoodie featuring our exclusive translucent blue gummy bear design. Made from soft, high-quality cotton blend for ultimate comfort.",
  },
  {
    id: "2",
    name: "NOVA Star Hoodie - White",
    price: 59.99,
    category: "hoodies",
    images: ["/white-hoodie-with-pink-nova-text-in-comic-bubble.jpg"],
    description:
      "Eye-catching white hoodie with playful pink NOVA star burst design. Perfect for making a bold statement.",
  },
  {
    id: "3",
    name: "NOVA Logo T-Shirt - White",
    price: 34.99,
    category: "tshirts",
    images: ["/white-t-shirt-with-black-nova-logo.jpg"],
    description: "Classic white t-shirt featuring the iconic NOVA logo in bold black. Essential streetwear staple.",
  },
  {
    id: "4",
    name: "NOVA Compass T-Shirt - White",
    price: 34.99,
    category: "tshirts",
    images: ["/white-t-shirt-with-nova-compass-logo.jpg"],
    description: "Premium white tee with the NOVA compass design. Navigate your style with confidence.",
  },
  {
    id: "5",
    name: "NOVA Butterfly Hoodie - Black",
    price: 64.99,
    category: "hoodies",
    images: ["/black-hoodie-with-blue-butterfly-and-blue-text.jpg"],
    description: "Striking black hoodie featuring a mesmerizing blue morpho butterfly design with artistic typography.",
  },
  {
    id: "6",
    name: "NOVA Oval Logo T-Shirt - White",
    price: 34.99,
    category: "tshirts",
    images: ["/white-t-shirt-with-nova-text-in-purple-oval.jpg"],
    description: "Clean white t-shirt with NOVA text in a stylish purple oval. Minimalist yet impactful design.",
  },
  {
    id: "7",
    name: "Jovi Cargo Pants - Black",
    price: 69.99,
    category: "pants",
    images: ["/black-cargo-streetwear.png"],
    description:
      "Premium Jovi cargo pants in classic black. Multiple pockets and comfortable fit for urban adventures.",
  },
  {
    id: "8",
    name: "Jovi Cargo Pants - Olive",
    price: 69.99,
    category: "pants",
    images: ["/olive-green-cargo-pants-streetwear.jpg"],
    description: "Versatile Jovi cargo pants in olive green. Durable fabric with modern streetwear aesthetic.",
  },
  {
    id: "9",
    name: "NOVA Denim Jeans - Blue",
    price: 79.99,
    category: "jeans",
    images: ["/blue-denim-jeans-with-nova-branding.jpg"],
    description: "Classic blue denim jeans with subtle NOVA branding. Perfect fit and premium quality.",
  },
  {
    id: "10",
    name: "NOVA Denim Jeans - Black",
    price: 79.99,
    category: "jeans",
    images: ["/black-denim-jeans-streetwear.jpg"],
    description: "Sleek black denim jeans for a modern streetwear look. Comfortable and stylish.",
  },
  {
    id: "11",
    name: "NOVA Gummy Bear Sweater - White",
    price: 54.99,
    category: "sweaters",
    images: ["/white-sweater-with-blue-gummy-bear-design.jpg"],
    description: "Cozy white sweater featuring the iconic blue gummy bear graphic. Perfect for cooler days.",
  },
  {
    id: "12",
    name: "NOVA Logo Sweater - Black",
    price: 54.99,
    category: "sweaters",
    images: ["/black-sweater-with-white-nova-logo.jpg"],
    description: "Premium black sweater with bold white NOVA branding. Comfortable and stylish.",
  },
]
