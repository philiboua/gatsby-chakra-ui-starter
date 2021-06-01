import { useContext } from "react"
import { hoverContext } from "../hoverContext"

export const useIsHovered = () => {
  const context = useContext(hoverContext)
  if (context !== null) {
    const { isHovered } = context
    return isHovered
  }

  return false
}
