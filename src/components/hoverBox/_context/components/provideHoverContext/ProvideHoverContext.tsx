import React, { useState } from "react"
import { hoverContext } from "../../hoverContext"

export const ProvideHoverContext: React.FC = ({ children }) => {
  const [isHovered, setHover] = useState(false)
  return (
    <hoverContext.Provider value={{ isHovered, setHover }}>
      {children}
    </hoverContext.Provider>
  )
}
