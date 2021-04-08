import { useReducer } from "react"

export const useToggle = (initialValue = false) => {
  return useReducer(state => !state, initialValue)
}
