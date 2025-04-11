import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  image: string
  price: string
  category: string
}

interface ProductsGridProps {
  products: Product[]
}

export function ProductsGrid({ products }: ProductsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
        >
          <div className="relative h-48 overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-2 right-2 bg-[#f2c744] text-[#00114d] text-xs font-bold px-2 py-1 rounded-full">
              {product.category}
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-[#00114d] mb-2">{product.name}</h3>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-bold text-[#00114d]">{product.price}</span>
              <Button size="sm" className="bg-[#00114d] hover:bg-[#001a6e] text-white text-xs px-3 py-1">
                Ver Detalhes
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
