"use client"

import { useState } from "react"
import Image from "next/image"
import { Tab } from "@/components/ui/tab"

export function ProductsSection() {
  const [activeTab, setActiveTab] = useState("todos")

  const categories = [
    { id: "todos", name: "Todos" },
    { id: "basicos", name: "Básicos" },
    { id: "acabamento", name: "Acabamento" },
    { id: "ferramentas", name: "Ferramentas" },
    { id: "eletrica", name: "Elétrica" },
    { id: "hidraulica", name: "Hidráulica" },
  ]

  const products = [
    {
      id: 1,
      image: "/images/worker-cement.jpg",
      alt: "Trabalhador com cimento",
      category: "basicos",
      title: "Cimento e Argamassa",
      description: "Produtos de alta qualidade para fundação e estrutura",
    },
    {
      id: 2,
      image: "/images/worker-floor.jpg",
      alt: "Trabalhador assentando piso",
      category: "acabamento",
      title: "Pisos e Revestimentos",
      description: "Variedade de pisos para todos os ambientes",
    },
    {
      id: 3,
      image: "/images/worker-plumbing.jpg",
      alt: "Trabalhador encanador",
      category: "hidraulica",
      title: "Material Hidráulico",
      description: "Tubos, conexões e acessórios para instalações",
    },
    {
      id: 4,
      image: "/images/worker-electrical.jpg",
      alt: "Trabalhador eletricista",
      category: "eletrica",
      title: "Material Elétrico",
      description: "Fios, cabos e componentes para instalações elétricas",
    },
    {
      id: 5,
      image: "/images/worker-bricklayer.jpg",
      alt: "Trabalhador pedreiro",
      category: "ferramentas",
      title: "Ferramentas",
      description: "Equipamentos profissionais para sua obra",
    },
    {
      id: 6,
      image: "/images/paint.jpg",
      alt: "Tintas",
      category: "acabamento",
      title: "Tintas e Vernizes",
      description: "Ampla variedade de cores e acabamentos",
    },
  ]

  const filteredProducts =
    activeTab === "todos" ? products : products.filter((product) => product.category === activeTab)

  return (
    <section id="produtos" className="py-20 px-5 text-center bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-3 text-[#f2c744]">Nossos Produtos</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Na Paulo Neto Construções você encontra tudo para sua obra do início ao fim, com qualidade e preço justo
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Tab
              key={category.id}
              active={activeTab === category.id}
              onClick={() => setActiveTab(category.id)}
              className="px-6 py-3"
            >
              {category.name}
            </Tab>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00114d]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white text-left">
                    <h3 className="text-xl font-bold">{product.title}</h3>
                    <p className="text-white/80">{product.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-[#00114d] mb-2">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#contato"
            className="inline-flex items-center bg-[#00114d] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#001a6e] transition-colors"
          >
            Solicite um Orçamento
          </a>
        </div>
      </div>
    </section>
  )
}
