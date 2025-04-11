"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"

export function BrandsSection() {
  const brands = [
    {
      id: 1,
      name: "Suvinil",
      logo: "/images/suvinil-logo.png",
    },
    {
      id: 2,
      name: "Coral",
      logo: "/images/coral-logo.png",
    },
    {
      id: 3,
      name: "Apodi",
      logo: "/images/apodi-logo.png",
    },
    {
      id: 4,
      name: "Fortleve",
      logo: "/images/fortleve-logo.png",
    },
    {
      id: 5,
      name: "Gerdau",
      logo: "/images/gerdau-logo.png",
    },
    {
      id: 6,
      name: "Tachibra",
      logo: "/images/tachibra-logo.png",
    },
    {
      id: 7,
      name: "Tigre",
      logo: "/images/tigre-logo.png",
    },
    {
      id: 8,
      name: "Amanco",
      logo: "/images/amanco-logo.png",
    },
  ]

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = containerRef.current?.querySelectorAll(".brand-item")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="marcas" className="py-20 px-5 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-3 text-[#f2c744] text-center">Marcas Parceiras</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 text-center">
          Trabalhamos com as melhores marcas do mercado para garantir a qualidade dos nossos produtos
        </p>
        <div
          ref={containerRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center"
        >
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="brand-item opacity-0 transition-all duration-500 hover:scale-110 bg-white p-6 rounded-lg shadow-sm hover:shadow-md"
            >
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={`Marca ${brand.name}`}
                width={120}
                height={120}
                className="object-contain h-20 w-auto mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
