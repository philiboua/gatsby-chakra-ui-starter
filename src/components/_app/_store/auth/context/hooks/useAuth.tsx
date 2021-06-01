/* eslint unicorn/consistent-function-scoping: "off", "@typescript-eslint/explicit-module-boundary-types": "off"   */
import { useContext } from "react"
import { authContext } from "../authContext"

export const useAuth = () => {
  return useContext(authContext)
}
