import Link from "next/link"

export function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/5598984388342"
      target="_blank"
      className="fixed bottom-5 right-5 bg-[#25d366] text-white font-bold py-4 px-5 rounded-full shadow-lg z-50 transition-all duration-300 hover:bg-[#1ebc5b] hover:scale-110 flex items-center"
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
        className="lucide lucide-message-circle mr-2"
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>
      Fale Conosco
    </Link>
  )
}
