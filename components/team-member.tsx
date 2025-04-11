import Image from "next/image"
import { Facebook, Instagram, Linkedin } from "lucide-react"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  bio: string
}

export function TeamMember({ name, role, image, bio }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image || "/placeholder.svg?height=256&width=256"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00114d]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
                aria-label={`Facebook de ${name}`}
              >
                <Facebook size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
                aria-label={`Instagram de ${name}`}
              >
                <Instagram size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
                aria-label={`LinkedIn de ${name}`}
              >
                <Linkedin size={18} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-[#00114d] mb-1">{name}</h3>
        <p className="text-[#f2c744] font-medium mb-3">{role}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  )
}
