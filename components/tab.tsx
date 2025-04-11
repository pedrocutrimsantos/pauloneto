"use client"

import type { ReactNode } from "react"

interface TabProps {
  children: ReactNode
  active?: boolean
  onClick?: () => void
  className?: string
}

export function Tab({ children, active = false, onClick, className = "" }: TabProps) {
  return (
    <button
      onClick={onClick}
      className={`${
        active ? "bg-[#00114d] text-white" : "bg-white text-[#00114d] border border-[#00114d] hover:bg-[#00114d]/10"
      } rounded-lg font-medium transition-colors ${className}`}
    >
      {children}
    </button>
  )
}
