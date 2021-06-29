import { useContext } from "react"
import { BillboardContext } from "../billboardContext"

export const useBillboardContext = () => {
  const contextProps = useContext(BillboardContext)
  return contextProps
}
