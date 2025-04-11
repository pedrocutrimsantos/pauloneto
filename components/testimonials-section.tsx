"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "João Silva",
      role: "Construtor",
      image: "/images/testimonial-1.jpg",
      text: "Excelente atendimento e produtos de qualidade. A entrega foi rápida e os preços são muito competitivos. Recomendo a todos os profissionais da construção civil.",
      rating: 5,
    },
    {
      id: 2,
      name: "Maria Oliveira",
      role: "Cliente",
      image: "/images/testimonial-2.jpg",
      text: "Encontrei todos os materiais que precisava para meu projeto. A equipe é muito prestativa e me ajudou a escolher as melhores opções. Voltarei com certeza!",
      rating: 5,
    },
    {
      id: 3,
      name: "Carlos Santos",
      role: "Cliente",
      image: "/images/testimonial-3.jpg",
      text: "Trabalho com a Paulo Neto há anos e nunca tive problemas. Material de primeira linha, entrega pontual e preços justos. Uma parceria que dá certo!",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  // Melhorar a centralização e o design da seção de depoimentos
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <h2 className="section-title">O Que Nossos Clientes Dizem</h2>
        <p className="section-description">A satisfação dos nossos clientes é o nosso maior orgulho</p>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.image || "/placeholder.svg?height=96&width=96"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-gray-700 mb-6 italic text-lg">"{testimonial.text}"</p>
                        <div>
                          <h4 className="text-xl font-bold text-[#00114d]">{testimonial.name}</h4>
                          <p className="text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors z-10"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={24} className="text-[#00114d]" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors z-10"
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={24} className="text-[#00114d]" />
          </button>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? "bg-[#00114d] w-8" : "bg-gray-300"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
