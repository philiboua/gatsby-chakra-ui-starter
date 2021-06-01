import { useContext } from "react"
import { hoverContext } from "../hoverContext"

export const useToggleHover = () => {
  const context = useContext(hoverContext)
  if (context !== null) {
    const { setHover } = context
    return { setHover }
  }
  return null
}
