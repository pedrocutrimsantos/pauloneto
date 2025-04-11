import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ChevronRight, Award, Users, Clock, TrendingUp, Truck, HeartHandshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TeamMember } from "@/components/team-member"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function SobrePage() {
  const teamMembers = [
    {
      id: 1,
      name: "Paulo Neto",
      role: "Fundador e CEO",
      image: "/images/team-1.jpg",
      bio: "Fundador da empresa, com mais de 20 anos de experiência no setor de construção civil.",
    },
    {
      id: 2,
      name: "Maria do Carmo",
      role: "Gerente Comercial",
      image: "/images/team-2.jpg",
      bio: "Especialista em vendas e atendimento ao cliente, com 10 anos de experiência no mercado.",
    },
    {
      id: 3,
      name: "Francisco Milton",
      role: "Consultor Técnico",
      image: "/images/team-3.jpg",
      bio: "Fundador da empresa, com mais de 20 anos de experiência no setor de construção civil.",
    },
    {
      id: 4,
      name: "Pedro Cutrim",
      role: "Gerente de Tecnologia",
      image: "/images/team-4.jpg",
      bio: "Responsável por garantir a eficiência do sertor tecnologico.",
    },
  ]

  const values = [
    {
      title: "Qualidade",
      description: "Comprometimento com produtos e serviços de alta qualidade",
      icon: <Award className="h-10 w-10 text-[#f2c744]" />,
    },
    {
      title: "Atendimento",
      description: "Foco total na satisfação e necessidades dos clientes",
      icon: <Users className="h-10 w-10 text-[#f2c744]" />,
    },
    {
      title: "Pontualidade",
      description: "Respeito aos prazos e compromissos assumidos",
      icon: <Clock className="h-10 w-10 text-[#f2c744]" />,
    },
    {
      title: "Inovação",
      description: "Busca constante por novidades e melhores soluções",
      icon: <TrendingUp className="h-10 w-10 text-[#f2c744]" />,
    },
    {
      title: "Logística",
      description: "Entrega rápida e eficiente em toda a região",
      icon: <Truck className="h-10 w-10 text-[#f2c744]" />,
    },
    {
      title: "Compromisso",
      description: "Relações de confiança e parceria com clientes e fornecedores",
      icon: <HeartHandshake className="h-10 w-10 text-[#f2c744]" />,
    },
  ]

  const milestones = [
    {
      year: "2010",
      title: "Fundação da Empresa",
      description: "Início das atividades em um pequeno espaço no centro da cidade",
    },
    {
      year: "2013",
      title: "Primeira Expansão",
      description: "Ampliação da loja e aumento do catálogo de produtos",
    },
    {
      year: "2015",
      title: "Novas Parcerias",
      description: "Estabelecimento de parcerias com as principais marcas do mercado",
    },
    {
      year: "2018",
      title: "Modernização",
      description: "Implementação de sistemas de gestão e vendas online",
    },
    {
      year: "2020",
      title: "Novo Centro de Distribuição",
      description: "Inauguração do centro logístico para atender toda a região",
    },
    {
      year: "2023",
      title: "Reconhecimento Regional",
      description: "Premiação como melhor loja de materiais de construção da região",
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nós</h1>
              <p className="text-lg text-white/80 max-w-xl">
                Conheça a história, valores e a equipe por trás da Paulo Neto Construções
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight size={18} className="text-white/50" />
                <span className="text-[#f2c744]">Sobre Nós</span>
              </div>
            </div>
            <div className="relative w-full md:w-auto h-64 md:h-80">
              <Image
                src="/images/about-hero.jpg"
                alt="Equipe Paulo Neto Construções"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#00114d]">Nossa História</h2>
              <p className="text-lg text-gray-700 mb-6">
                A Paulo Neto Construções nasceu em 2010, a partir do sonho de seu fundador de oferecer materiais de
                construção de qualidade com preços justos e atendimento diferenciado. O que começou como uma pequena
                loja no centro da cidade, hoje se tornou referência em toda a região.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Ao longo desses anos, crescemos e nos modernizamos, mas mantivemos nossa essência: o compromisso com a
                satisfação dos clientes e a qualidade dos produtos. Investimos constantemente em treinamento da equipe,
                tecnologia e logística para oferecer a melhor experiência possível.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Hoje, contamos com uma ampla loja física, um centro de distribuição moderno e uma equipe de
                profissionais qualificados, prontos para atender desde o pequeno consumidor até grandes construtoras.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#00114d] hover:bg-[#001a6e] text-white px-6 py-6 h-auto">
                  Conhecer Nosso Catálogo
                </Button>
                <Button
                  variant="outline"
                  className="border-[#00114d] text-[#00114d] hover:bg-[#00114d] hover:text-white px-6 py-6 h-auto"
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image src="/images/store-history.jpg" alt="História da loja" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#f2c744] p-4 rounded-lg shadow-lg">
                <p className="text-[#00114d] font-bold text-xl">2010</p>
                <p className="text-[#00114d]/80">Ano de fundação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Nossos Valores</h2>
          <p className="section-description">Princípios que guiam nossas ações e decisões no dia a dia da empresa</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#00114d] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-title">Nossa Trajetória</h2>
          <p className="section-description">Conheça os principais marcos na história da Paulo Neto Construções</p>

          <div className="relative mt-16">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#00114d]/20"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#f2c744] border-4 border-white shadow-md"></div>

                  {/* Content */}
                  <div
                    className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className="md:w-1/2"></div>
                    <div
                      className={`bg-white p-6 rounded-xl shadow-md md:w-1/2 ${
                        index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                      }`}
                    >
                      <div className="bg-[#00114d] text-white inline-block px-4 py-1 rounded-full text-sm font-bold mb-3">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-[#00114d] mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Nossa Equipe</h2>
          <p className="section-description">
            Conheça os profissionais dedicados que fazem a Paulo Neto Construções acontecer
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member) => (
              <TeamMember key={member.id} name={member.name} role={member.role} image={member.image} bio={member.bio} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-[#00114d] text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[#f2c744] mb-2">10+</div>
              <p className="text-xl">Anos no mercado</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[#f2c744] mb-2">5.000+</div>
              <p className="text-xl">Produtos disponíveis</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[#f2c744] mb-2">1.000+</div>
              <p className="text-xl">Clientes satisfeitos</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[#f2c744] mb-2">20+</div>
              <p className="text-xl">Marcas parceiras</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-[#f2c744] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#00114d]">Faça parte da nossa história</h2>
            <p className="text-[#00114d]/80 max-w-2xl mx-auto mb-8 text-lg">
              Junte-se aos milhares de clientes satisfeitos que confiam na Paulo Neto Construções para suas obras e
              reformas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#00114d] hover:bg-[#001a6e] text-white px-8 py-6 h-auto text-lg">
                Conhecer Nosso Catálogo
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
                  <span>Av. Major Silva Filho, 906, Centro - Araguanã/MA</span>
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
              Desenvolvido por <span className="text-red-500">❤</span> por Pedro Cutrim dos Santos
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppFloat />
    </main>
  )
}
