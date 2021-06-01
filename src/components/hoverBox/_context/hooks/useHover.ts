import { useContext } from "react"
import { hoverContext } from "../hoverContext"

export const useHover = () => {
  return useContext(hoverContext)
}
