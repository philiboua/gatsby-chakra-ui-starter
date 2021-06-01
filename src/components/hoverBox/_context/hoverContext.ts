import React from "react"

export const hoverContext = React.createContext<{
  isHovered: boolean
  setHover: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)
