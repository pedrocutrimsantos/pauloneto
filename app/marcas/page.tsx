import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ChevronRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BrandCard } from "@/components/brand-card"

export default function MarcasPage() {
  const brands = [
    {
      id: 1,
      name: "Suvinil",
      logo: "/images/suvinil-logo.png",
      category: "Tintas",
      description:
        "Líder no mercado de tintas premium, a Suvinil oferece produtos de alta qualidade e durabilidade para todos os tipos de ambientes.",
      website: "https://www.suvinil.com.br",
    },
    {
      id: 2,
      name: "Coral",
      logo: "/images/coral-logo.png",
      category: "Tintas",
      description:
        "Com mais de 60 anos de tradição, a Coral oferece uma ampla linha de tintas e vernizes para proteção e decoração.",
      website: "https://www.coral.com.br",
    },
    {
      id: 3,
      name: "Apodi",
      logo: "/images/apodi-logo.png",
      category: "Cimento",
      description: "Cimento de alta qualidade e resistência, ideal para todos os tipos de construção e acabamento.",
      website: "https://www.cimentoapodi.com.br",
    },
    {
      id: 4,
      name: "Fortleve",
      logo: "/images/fortleve-logo.png",
      category: "Reservatórios",
      description:
        "Especializada em soluções para armazenamento de água, a Fortleve oferece produtos duráveis e de alta qualidade.",
      website: "https://www.fortleve.com.br",
    },
    {
      id: 5,
      name: "Gerdau",
      logo: "/images/gerdau-logo.png",
      category: "Aço e Ferro",
      description:
        "Líder em aços longos nas Américas, a Gerdau fornece produtos de alta qualidade para construção civil.",
      website: "https://www.gerdau.com.br",
    },
    {
      id: 6,
      name: "Tachibra",
      logo: "/images/tachibra-logo.png",
      category: "Iluminação",
      description: "Especializada em soluções de iluminação, a Tachibra oferece produtos eficientes e econômicos.",
      website: "https://www.tachibra.com.br",
    },
    {
      id: 7,
      name: "Tigre",
      logo: "/images/tigre-logo.png",
      category: "Tubos e Conexões",
      description: "Referência em tubos e conexões, a Tigre oferece soluções completas para instalações hidráulicas.",
      website: "https://www.tigre.com.br",
    },
    {
      id: 8,
      name: "Amanco",
      logo: "/images/amanco-logo.png",
      category: "Tubos e Conexões",
      description: "Especializada em sistemas hidráulicos, a Amanco oferece produtos de alta qualidade e durabilidade.",
      website: "https://www.amanco.com.br",
    },
    {
      id: 9,
      name: "Vonder",
      logo: "/images/vonder-logo.png",
      category: "Ferramentas",
      description: "Ampla linha de ferramentas manuais e elétricas para profissionais e amadores da construção civil.",
      website: "https://www.vonder.com.br",
    },
    {
      id: 10,
      name: "Tramontina",
      logo: "/images/tramontina-logo.png",
      category: "Ferramentas",
      description:
        "Reconhecida pela qualidade e durabilidade, a Tramontina oferece ferramentas e utensílios para diversos fins.",
      website: "https://www.tramontina.com.br",
    },
    {
      id: 11,
      name: "Quartzolit",
      logo: "/images/quartzolit-logo.png",
      category: "Argamassas",
      description: "Especializada em argamassas, rejuntes e produtos para assentamento e acabamento de revestimentos.",
      website: "https://www.quartzolit.weber",
    },
    {
      id: 12,
      name: "Deca",
      logo: "/images/deca-logo.png",
      category: "Metais e Louças",
      description:
        "Referência em metais e louças sanitárias, a Deca oferece produtos de alta qualidade e design inovador.",
      website: "https://www.deca.com.br",
    },
  ]

  const categories = [
    "Todas",
    "Tintas",
    "Cimento",
    "Reservatórios",
    "Aço e Ferro",
    "Iluminação",
    "Tubos e Conexões",
    "Ferramentas",
    "Argamassas",
    "Metais e Louças",
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-[#00114d] text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Marcas Parceiras</h1>
              <p className="text-lg text-white/80 max-w-xl">
                Trabalhamos com as melhores marcas do mercado para garantir a qualidade dos nossos produtos
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight size={18} className="text-white/50" />
                <span className="text-[#f2c744]">Marcas</span>
              </div>
            </div>
            <div className="relative w-full md:w-auto h-64 md:h-80">
              <Image
                src="/images/brands-hero.jpg"
                alt="Marcas Parceiras Paulo Neto Construções"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={
                  index === 0
                    ? "bg-[#00114d] hover:bg-[#001a6e] text-white"
                    : "border-[#00114d] text-[#00114d] hover:bg-[#00114d] hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-title">Nossas Marcas Parceiras</h2>
          <p className="section-description">
            Conheça as marcas de qualidade que fazem parte do nosso catálogo de produtos
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {brands.map((brand) => (
              <BrandCard
                key={brand.id}
                name={brand.name}
                logo={brand.logo}
                category={brand.category}
                description={brand.description}
                website={brand.website}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Vantagens das Nossas Parcerias</h2>
          <p className="section-description">
            Benefícios que nossas parcerias com as melhores marcas trazem para nossos clientes
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="order-2 md:order-1">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#00114d] p-3 rounded-full mr-4 flex-shrink-0">
                    <CheckCircle2 size={24} className="text-[#f2c744]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#00114d] mb-2">Garantia de Qualidade</h3>
                    <p className="text-gray-600">
                      Produtos de marcas reconhecidas no mercado, com garantia de qualidade e durabilidade.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#00114d] p-3 rounded-full mr-4 flex-shrink-0">
                    <CheckCircle2 size={24} className="text-[#f2c744]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#00114d] mb-2">Preços Competitivos</h3>
                    <p className="text-gray-600">
                      Parcerias diretas com fabricantes nos permitem oferecer preços mais acessíveis aos nossos
                      clientes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#00114d] p-3 rounded-full mr-4 flex-shrink-0">
                    <CheckCircle2 size={24} className="text-[#f2c744]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#00114d] mb-2">Suporte Técnico</h3>
                    <p className="text-gray-600">
                      Acesso a informações técnicas e suporte especializado para cada produto e marca.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#00114d] p-3 rounded-full mr-4 flex-shrink-0">
                    <CheckCircle2 size={24} className="text-[#f2c744]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#00114d] mb-2">Disponibilidade de Estoque</h3>
                    <p className="text-gray-600">
                      Mantemos estoque constante dos produtos mais procurados, garantindo disponibilidade imediata.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/partnership-benefits.jpg"
                  alt="Vantagens das parcerias"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-[#00114d] rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-8 md:p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Seja um Parceiro</h2>
                <p className="text-white/80 mb-8">
                  Sua marca também pode fazer parte do nosso catálogo de divulgação. Entre em contato conosco e saiba
                  como se tornar um parceiro da Paulo Neto Construções.
                </p>
                <Button className="bg-[#f2c744] hover:bg-white text-[#00114d] font-bold px-8 py-6 h-auto text-lg">
                  Entre em Contato
                </Button>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image src="/images/become-partner.jpg" alt="Seja um Parceiro" fill className="object-cover" />
              </div>
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
