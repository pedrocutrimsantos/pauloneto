"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      title: "Inspire, respire, Construa!",
      subtitle: "Encontre tudo para sua obra com qualidade, confiança e entrega rápida",
      image: "/images/construction-bg.jpg",
    },
    {
      title: "Materiais de Qualidade",
      subtitle: "Trabalhamos com as melhores marcas do mercado para garantir a excelência da sua obra",
      image: "/images/hero-2.jpg",
    },
    {
      title: "Entrega Rápida",
      subtitle: "Entregamos em toda a região com agilidade e segurança para sua obra não parar",
      image: "/images/hero-3.jpg",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-[#00114d]/75 z-10"></div>
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight animate-fadeIn">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto animate-fadeIn">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contato"
              className="bg-[#f2c744] text-[#00114d] px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Solicite um Orçamento
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="#produtos"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Conheça Nossos Produtos
            </Link>
          </div>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-[#f2c744] w-10" : "bg-white/50"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </header>
  )
}
