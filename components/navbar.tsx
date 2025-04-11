"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#00114d]/95 py-2 shadow-lg" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Logo da Paulo Neto Construções"
              width={150}
              height={60}
              className="drop-shadow-md"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`${
                isScrolled ? "text-white" : "text-white"
              } hover:text-[#f2c744] transition-colors font-medium`}
            >
              Home
            </Link>
            <Link
              href="/produtos"
              className={`${
                isScrolled ? "text-white" : "text-white"
              } hover:text-[#f2c744] transition-colors font-medium`}
            >
              Produtos
            </Link>
            <Link
              href="/sobre"
              className={`${
                isScrolled ? "text-white" : "text-white"
              } hover:text-[#f2c744] transition-colors font-medium`}
            >
              Sobre Nós
            </Link>
            <Link
              href="/marcas"
              className={`${
                isScrolled ? "text-white" : "text-white"
              } hover:text-[#f2c744] transition-colors font-medium`}
            >
              Marcas
            </Link>
            <Link
              href="/#contato"
              className={`${
                isScrolled ? "text-white" : "text-white"
              } hover:text-[#f2c744] transition-colors font-medium`}
            >
              Contato
            </Link>
            <a
              href="tel:+5598984388342"
              className="flex items-center bg-[#f2c744] text-[#00114d] px-4 py-2 rounded-full font-bold hover:bg-white transition-colors"
            >
              <Phone size={18} className="mr-2" />
              (98) 98438-8342
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#00114d] mt-4 rounded-lg shadow-xl p-4 absolute left-4 right-4 z-50">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white hover:text-[#f2c744] transition-colors font-medium py-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/produtos"
                className="text-white hover:text-[#f2c744] transition-colors font-medium py-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                Produtos
              </Link>
              <Link
                href="/sobre"
                className="text-white hover:text-[#f2c744] transition-colors font-medium py-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link
                href="/marcas"
                className="text-white hover:text-[#f2c744] transition-colors font-medium py-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                Marcas
              </Link>
              <Link
                href="/#contato"
                className="text-white hover:text-[#f2c744] transition-colors font-medium py-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
              <a
                href="tel:+5598984388342"
                className="flex items-center bg-[#f2c744] text-[#00114d] px-4 py-2 rounded-full font-bold hover:bg-white transition-colors justify-center"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={18} className="mr-2" />
                (98) 98438-8342
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
