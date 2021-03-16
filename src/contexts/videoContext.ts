import React from "react"

import { VideoState, DispatchVideoType } from "@src/components"

interface VideoContextType {
  state: VideoState
  dispatch: DispatchVideoType
}

export const videoContext = React.createContext<VideoContextType | null>(null)
