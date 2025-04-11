import { History, Users, Truck, Package } from "lucide-react"

interface FeatureBoxProps {
  number: string
  text: string
  icon: "history" | "users" | "truck" | "package"
}

export function FeatureBox({ number, text, icon }: FeatureBoxProps) {
  const getIcon = () => {
    switch (icon) {
      case "history":
        return <History size={40} className="mb-4 text-[#00114d]" />
      case "users":
        return <Users size={40} className="mb-4 text-[#00114d]" />
      case "truck":
        return <Truck size={40} className="mb-4 text-[#00114d]" />
      case "package":
        return <Package size={40} className="mb-4 text-[#00114d]" />
      default:
        return null
    }
  }

  return (
    <div className="bg-white text-[#00114d] p-8 rounded-xl w-full max-w-[250px] shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 flex flex-col items-center text-center">
      {getIcon()}
      <h3 className="text-4xl font-bold mb-2">{number}</h3>
      <p className="text-base">{text}</p>
    </div>
  )
}
