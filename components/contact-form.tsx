"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, User, MessageSquare, Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean
    message?: string
  }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulando envio para um servidor
    try {
      // Aqui você implementaria a lógica real de envio do formulário
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSubmitStatus({
        success: true,
        message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
      })

      // Limpar o formulário após envio bem-sucedido
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Erro ao enviar mensagem. Por favor, tente novamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div id="contato" className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div className="bg-[#00114d] text-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-[#f2c744] text-center md:text-left">Informações de Contato</h3>
        <p className="mb-8 text-center md:text-left">
          Estamos prontos para atender você e tirar todas as suas dúvidas. Entre em contato conosco pelos canais abaixo
          ou preencha o formulário.
        </p>

        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-[#001a6e] p-3 rounded-full mr-4">
              <Phone size={20} className="text-[#f2c744]" />
            </div>
            <div>
              <h4 className="font-semibold text-[#f2c744]">Telefone</h4>
              <p>(98) 98438-8342</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-[#001a6e] p-3 rounded-full mr-4">
              <Mail size={20} className="text-[#f2c744]" />
            </div>
            <div>
              <h4 className="font-semibold text-[#f2c744]">E-mail</h4>
              <p>contato@paulonetoconstrucao.com.br</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-[#001a6e] p-3 rounded-full mr-4">
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
                className="lucide lucide-map-pin text-[#f2c744]"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-[#f2c744]">Endereço</h4>
              <p>Av. Major Silva Filho, 98, Centro</p>
              <p>Araguanã/MA - CEP: 65368-000</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h4 className="font-semibold text-[#f2c744] mb-4 text-center md:text-left">Horário de Funcionamento</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Segunda a Sexta</span>
              <span>08:00 - 18:00</span>
            </div>
            <div className="flex justify-between">
              <span>Sábados</span>
              <span>08:00 - 12:00</span>
            </div>
            <div className="flex justify-between">
              <span>Domingos e Feriados</span>
              <span>Fechado</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-[#00114d] text-center md:text-left">Envie sua Mensagem</h3>
          <div className="space-y-5">
            <div>
              <Label htmlFor="name" className="text-[#00114d] font-medium">
                Nome Completo
              </Label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User size={18} className="text-gray-400" />
                </div>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  required
                  className="pl-10 border-gray-300 focus:border-[#00114d] focus:ring-[#00114d]"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-[#00114d] font-medium">
                E-mail
              </Label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail size={18} className="text-gray-400" />
                </div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                  className="pl-10 border-gray-300 focus:border-[#00114d] focus:ring-[#00114d]"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="phone" className="text-[#00114d] font-medium">
                Telefone
              </Label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Phone size={18} className="text-gray-400" />
                </div>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(99) 99999-9999"
                  required
                  className="pl-10 border-gray-300 focus:border-[#00114d] focus:ring-[#00114d]"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="message" className="text-[#00114d] font-medium">
                Mensagem
              </Label>
              <div className="relative mt-1">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <MessageSquare size={18} className="text-gray-400" />
                </div>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Digite sua mensagem aqui..."
                  required
                  className="pl-10 min-h-[150px] border-gray-300 focus:border-[#00114d] focus:ring-[#00114d]"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#00114d] hover:bg-[#001a6e] text-white py-3 h-auto text-base"
            >
              {isSubmitting ? (
                "Enviando..."
              ) : (
                <>
                  <Send size={18} className="mr-2" /> Enviar Mensagem
                </>
              )}
            </Button>

            {submitStatus.message && (
              <div
                className={`mt-4 p-4 rounded-md text-center ${
                  submitStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {submitStatus.message}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
