import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface CategoryCardProps {
  name: string
  image: string
  description: string
  href: string
}

export function CategoryCard({ name, image, description, href }: CategoryCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00114d]/80 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-xl font-bold">{name}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          href={href}
          className="inline-flex items-center text-[#00114d] font-medium hover:text-[#001a6e] transition-colors"
        >
          Ver Catálogo <ChevronRight size={18} className="ml-1" />
        </Link>
      </div>
    </div>
  )
}
