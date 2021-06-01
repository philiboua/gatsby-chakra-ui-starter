import React from "react"

import { IVideoState } from "../_state"
import { IVideoAction } from "../_state/actions"

export type DispatchVideoType = (action: IVideoAction) => void

export interface IVideoContext {
  state: IVideoState
  dispatch: DispatchVideoType
}

export const VideoContext = React.createContext<IVideoContext | null>(null)
