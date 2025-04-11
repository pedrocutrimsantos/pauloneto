"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FaqItem[] = [
    {
      question: "Quais formas de pagamento são aceitas?",
      answer:
        "Aceitamos pagamento em dinheiro, cartões de crédito e débito, PIX, transferência bancária e boleto. Para compras maiores, oferecemos condições especiais de parcelamento.",
    },
    {
      question: "Como funciona a entrega dos produtos?",
      answer:
        "Realizamos entregas em toda a região. O prazo varia de acordo com a disponibilidade dos produtos e a distância, mas geralmente entregamos em até 48 horas após a confirmação do pagamento.",
    },
    {
      question: "Vocês oferecem assessoria técnica?",
      answer:
        "Sim, contamos com uma equipe de profissionais qualificados que podem auxiliar na escolha dos materiais mais adequados para sua obra, além de fornecer orientações técnicas sobre aplicação e uso dos produtos.",
    },
    {
      question: "É possível fazer orçamentos online?",
      answer:
        "Sim, você pode solicitar um orçamento através do nosso formulário de contato ou pelo WhatsApp. Basta informar os materiais e quantidades desejadas que retornaremos com o orçamento completo em até 24 horas.",
    },
    {
      question: "Vocês trabalham com projetos personalizados?",
      answer:
        "Sim, oferecemos soluções personalizadas para projetos de todos os tamanhos. Entre em contato conosco para discutir suas necessidades específicas e como podemos ajudar a tornar seu projeto realidade.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 px-5 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-3 text-[#f2c744] text-center">Perguntas Frequentes</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 text-center">
          Tire suas dúvidas sobre nossos produtos e serviços
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-lg text-[#00114d]">{faq.question}</span>
                <ChevronDown
                  className={`text-[#00114d] transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 p-5 pt-0" : "max-h-0"
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Não encontrou o que procurava?</p>
          <a
            href="#contato"
            className="inline-flex items-center bg-[#00114d] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#001a6e] transition-colors"
          >
            Entre em contato conosco
          </a>
        </div>
      </div>
    </section>
  )
}
