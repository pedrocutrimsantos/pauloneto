import type { ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
}

export function Tab({ active, className, children, ...props }: TabProps) {
  return (
    <button
      className={cn(
        "rounded-full font-medium transition-all duration-200",
        active
          ? "bg-[#00114d] text-white shadow-md"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
