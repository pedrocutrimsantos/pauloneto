import Image from "next/image"
import { ExternalLink } from "lucide-react"

interface BrandCardProps {
  name: string
  logo: string
  category: string
  description: string
  website: string
}

export function BrandCard({ name, logo, category, description, website }: BrandCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      <div className="p-6 flex flex-col items-center">
        <div className="bg-gray-50 w-full h-32 rounded-lg flex items-center justify-center mb-6 p-4">
          <Image
            src={logo || "/placeholder.svg"}
            alt={`Logo ${name}`}
            width={150}
            height={80}
            className="object-contain max-h-24"
          />
        </div>
        <div className="text-center">
          <div className="inline-block bg-[#f2c744]/20 text-[#00114d] text-xs font-medium px-3 py-1 rounded-full mb-3">
            {category}
          </div>
          <h3 className="text-xl font-bold text-[#00114d] mb-3">{name}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          <div className="flex justify-center gap-3">
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#00114d] font-medium hover:text-[#001a6e] transition-colors"
            >
              Site Oficial <ExternalLink size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
