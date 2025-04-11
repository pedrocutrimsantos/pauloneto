import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { ProductsGrid } from "@/components/products-grid"
import { CategoryCard } from "@/components/category-card"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ChevronRight, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ProdutosPage() {
  const categories = [
    {
      id: "basicos",
      name: "Materiais Básicos",
      image: "/images/worker-cement.jpg",
      description: "Cimento, areia, brita, tijolos e outros materiais para estrutura",
    },
    {
      id: "acabamento",
      name: "Acabamentos",
      image: "/images/worker-floor.jpg",
      description: "Pisos, revestimentos, tintas e materiais para acabamento",
    },
    {
      id: "hidraulica",
      name: "Hidráulica",
      image: "/images/worker-plumbing.jpg",
      description: "Tubos, conexões e acessórios para instalações hidráulicas",
    },
    {
      id: "eletrica",
      name: "Elétrica",
      image: "/images/worker-electrical.jpg",
      description: "Fios, cabos, disjuntores e componentes elétricos",
    },
    {
      id: "ferramentas",
      name: "Ferramentas",
      image: "/images/worker-bricklayer.jpg",
      description: "Ferramentas manuais e elétricas para profissionais e amadores",
    },
    {
      id: "tintas",
      name: "Tintas e Vernizes",
      image: "/images/paint.jpg",
      description: "Tintas, vernizes, esmaltes e produtos para pintura",
    },
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Cimento CP II 50kg",
      image: "/images/cement-bag.jpg",
      price: "R$ 32,90",
      category: "basicos",
    },
    {
      id: 2,
      name: "Argamassa AC III 20kg",
      image: "/images/mortar.jpg",
      price: "R$ 28,50",
      category: "basicos",
    },
    {
      id: 3,
      name: "Tinta Acrílica Premium 18L",
      image: "/images/paint-bucket.jpg",
      price: "R$ 289,90",
      category: "tintas",
    },
    {
      id: 4,
      name: "Porcelanato 60x60cm",
      image: "/images/porcelain-tile.jpg",
      price: "R$ 69,90/m²",
      category: "acabamento",
    },
    {
      id: 5,
      name: "Furadeira de Impacto 750W",
      image: "/images/drill.jpg",
      price: "R$ 199,90",
      category: "ferramentas",
    },
    {
      id: 6,
      name: "Kit Instalação Hidráulica",
      image: "/images/plumbing-kit.jpg",
      price: "R$ 149,90",
      category: "hidraulica",
    },
    {
      id: 7,
      name: "Cabo Flexível 2,5mm 100m",
      image: "/images/electrical-wire.jpg",
      price: "R$ 179,90",
      category: "eletrica",
    },
    {
      id: 8,
      name: "Massa Corrida 18L",
      image: "/images/wall-putty.jpg",
      price: "R$ 79,90",
      category: "acabamento",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-[#00114d] text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossos Produtos</h1>
              <p className="text-lg text-white/80 max-w-xl">
                Encontre tudo o que você precisa para sua construção ou reforma, com qualidade e preço justo.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight size={18} className="text-white/50" />
                <span className="text-[#f2c744]">Produtos</span>
              </div>
            </div>
            <div className="relative w-full md:w-auto h-64 md:h-80">
              <Image
                src="/images/products-hero.jpg"
                alt="Produtos Paulo Neto Construções"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Buscar no catálogo..."
                className="pl-10 py-6 rounded-lg border-gray-300 w-full"
              />
            </div>
            <Button className="bg-[#00114d] hover:bg-[#001a6e] text-white w-full md:w-auto">
              <Filter size={18} className="mr-2" /> Filtrar Catálogo
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-title">Categorias de Produtos</h2>
          <p className="section-description">
            Navegue por nossas categorias e encontre exatamente o que você precisa para sua obra
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                name={category.name}
                image={category.image}
                description={category.description}
                href={`/produtos/${category.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Produtos em Destaque</h2>
          <p className="section-description">
            Conheça nossos produtos mais vendidos e com as melhores avaliações dos clientes
          </p>

          <ProductsGrid products={featuredProducts} />

          <div className="mt-12 text-center">
            <Button className="bg-[#00114d] hover:bg-[#001a6e] text-white px-8 py-6 h-auto text-lg">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-[#00114d] to-[#001a6e] rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-8 md:p-12 text-white text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ofertas Especiais</h2>
                <p className="text-white/80 mb-8">
                  Aproveite nossas promoções exclusivas e economize em sua obra. Ofertas válidas por tempo limitado.
                </p>
                <Button className="bg-[#f2c744] hover:bg-white text-[#00114d] font-bold px-8 py-6 h-auto text-lg">
                  Ver Ofertas
                </Button>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image src="/images/special-offers.jpg" alt="Ofertas Especiais" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Marcas Parceiras</h2>
          <p className="section-description">
            Trabalhamos com as melhores marcas do mercado para garantir a qualidade dos nossos produtos
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {[
              "/images/suvinil-logo.png",
              "/images/coral-logo.png",
              "/images/apodi-logo.png",
              "/images/tigre-logo.png",
            ].map((logo, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Image
                  src={logo || "/placeholder.svg"}
                  alt="Logo Marca Parceira"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/marcas"
              className="text-[#00114d] font-medium hover:text-[#001a6e] transition-colors inline-flex items-center"
            >
              Ver todas as marcas <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-[#f2c744] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#00114d]">
              Precisa de informações sobre produtos?
            </h2>
            <p className="text-[#00114d]/80 max-w-2xl mx-auto mb-8 text-lg">
              Nossa equipe de especialistas está pronta para ajudar você a encontrar os produtos ideais para sua obra.
              Entre em contato conosco!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#00114d] hover:bg-[#001a6e] text-white px-8 py-6 h-auto text-lg">
                Fale Conosco
              </Button>
              <Button
                variant="outline"
                className="border-[#00114d] text-[#00114d] hover:bg-[#00114d] hover:text-white px-8 py-6 h-auto text-lg"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000a33] text-white py-12 px-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <Image
                src="/images/logo.png"
                alt="Logo da Paulo Neto Construções"
                width={200}
                height={80}
                className="mb-4 drop-shadow-lg"
              />
              <p className="text-gray-300 mb-4">
                Sua loja completa de materiais de construção, oferecendo qualidade, variedade e os melhores preços da
                região.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/paulonetoconstrucao"
                  target="_blank"
                  className="text-white hover:text-[#f2c744] transition-colors"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/paulonetoconstrucao"
                  target="_blank"
                  className="text-white hover:text-[#f2c744] transition-colors"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/5598984388342"
                  target="_blank"
                  className="text-white hover:text-[#f2c744] transition-colors"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-message-circle"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#f2c744]">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin mr-2 mt-1 text-[#f2c744]"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Av. Principal, 1234, Centro - Cidade/UF</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone mr-2 text-[#f2c744]"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>(98) 98438-8342</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail mr-2 text-[#f2c744]"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <a
                    href="mailto:contato@paulonetoconstrucao.com.br"
                    className="hover:text-[#f2c744] transition-colors"
                  >
                    contato@paulonetoconstrucao.com.br
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#f2c744]">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/produtos" className="hover:text-[#f2c744] transition-colors">
                    Produtos
                  </Link>
                </li>
                <li>
                  <Link href="/sobre" className="hover:text-[#f2c744] transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="/marcas" className="hover:text-[#f2c744] transition-colors">
                    Marcas Parceiras
                  </Link>
                </li>
                <li>
                  <Link href="/#contato" className="hover:text-[#f2c744] transition-colors">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="hover:text-[#f2c744] transition-colors">
                    Perguntas Frequentes
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-6 text-center">
            <p>&copy; {new Date().getFullYear()} Paulo Neto Construções - Todos os direitos reservados</p>
            <p className="text-sm text-gray-400 mt-2">
              Desenvolvido com <span className="text-red-500">❤</span> por Sua Empresa
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppFloat />
    </main>
  )
}
