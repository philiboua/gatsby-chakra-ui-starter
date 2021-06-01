import { useReducer, useMemo } from "react"
import { initialVideoState } from "../initialState"
import { videoReducer } from "../reducer"

export const useVideoBoxReducer = () => {
  const [state, dispatch] = useReducer(videoReducer, initialVideoState)

  return useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])
}
