import Image from "next/image"
import { ContactForm } from "@/components/contact-form"
import { ProductsSection } from "@/components/products-section"
import { BrandsSection } from "@/components/brands-section"
import { AboutSection } from "@/components/about-section"
import { FeatureBox } from "@/components/feature-box"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Navbar } from "@/components/navbar"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Destaques da Loja</h2>
          <p className="section-description">
            Há mais de uma década oferecendo os melhores produtos e serviços para sua construção
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-8 items-center">
            <FeatureBox number="10+" text="Anos de mercado" icon="history" />
            <FeatureBox number="1.000+" text="Clientes satisfeitos" icon="users" />
            <FeatureBox number="100%" text="Entrega rápida" icon="truck" />
            <FeatureBox number="5.000+" text="Produtos disponíveis" icon="package" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <ProductsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Brands Section */}
      <BrandsSection />

      {/* About Section */}
      <AboutSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Contact Form Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white" id="contato">
        <div className="container-custom">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-description">
            Preencha o formulário abaixo para solicitar orçamentos, tirar dúvidas ou fazer sugestões. Nossa equipe
            entrará em contato o mais breve possível.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="section-title">Localização</h2>
          <p className="section-description">
            Visite nossa loja física e conheça nosso showroom completo com as melhores opções para sua construção
          </p>
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.5241232255457!2d-45.66814152502961!3d-2.951951097024268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92b45fa0d4a4c8d7%3A0x2e06ba6cb6601d84!2sPaulo%20Neto%20Constru%C3%A7%C3%B5es!5e0!3m2!1spt-BR!2sbr!4v1744333490313!5m2!1spt-BR!2sbr"
              className="w-full h-96 border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="mt-8 bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-[#00114d] mb-4 text-center">Horário de Funcionamento</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-center">
                <p className="font-semibold">Segunda a Sexta</p>
                <p>08:00 - 18:00</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">Sábados</p>
                <p>08:00 - 12:00</p>
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
                  <a href="#produtos" className="hover:text-[#f2c744] transition-colors">
                    Produtos
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="hover:text-[#f2c744] transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#marcas" className="hover:text-[#f2c744] transition-colors">
                    Marcas Parceiras
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-[#f2c744] transition-colors">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#f2c744] transition-colors">
                    Perguntas Frequentes
                  </a>
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
