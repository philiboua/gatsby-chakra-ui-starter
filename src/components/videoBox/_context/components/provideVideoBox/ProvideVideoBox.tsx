import React from "react"
import { VideoContext } from "../../videoBoxContext"
import { useVideoBoxReducer } from "../../../_state/_useVideoBoxReducer"

export const ProvideVideoBox: React.FC = ({ children }) => {
  const context = useVideoBoxReducer()
  return (
    <VideoContext.Provider value={context}>{children}</VideoContext.Provider>
  )
}
