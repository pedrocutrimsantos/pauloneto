import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export function AboutSection() {
  const benefits = [
    "Mais de 10 anos de experiência no mercado",
    "Equipe especializada e treinada",
    "Produtos de alta qualidade",
    "Entrega rápida em toda a região",
    "Preços competitivos",
    "Atendimento personalizado",
  ]

  return (
    <section id="sobre" className="py-20 px-5 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-6 text-[#f2c744]">Sobre a Paulo Neto Construções</h2>
            <p className="text-lg text-gray-700 mb-6">
              A Paulo Neto Construções é uma empresa com mais de 10 anos de experiência no mercado de materiais de
              construção. Nosso compromisso é oferecer produtos de alta qualidade, com preços justos e um atendimento
              diferenciado.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Contamos com uma equipe especializada, pronta para auxiliar em todas as etapas da sua obra, desde o
              planejamento inicial até os acabamentos finais. Trabalhamos com as melhores marcas do mercado e oferecemos
              condições especiais de pagamento, além de entrega rápida em toda a região.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="text-[#00114d] mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <p className="text-lg font-semibold text-[#00114d]">
              Na Paulo Neto Construções, você encontra tudo o que precisa para construir, reformar ou decorar seu
              espaço!
            </p>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/store-front.jpg"
                alt="Fachada da loja Paulo Neto Construções"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-[#00114d] font-bold text-xl">+10</p>
              <p className="text-gray-600">Anos no mercado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
