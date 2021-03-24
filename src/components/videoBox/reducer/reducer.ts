import { VideoActionTypes } from "./videoActionTypes"
import { VideoState } from "./videoState"

export interface VideoAction {
  type:
    | VideoActionTypes.MUTE_VIDEO
    | VideoActionTypes.PAUSE_VIDEO
    | VideoActionTypes.PLAY_VIDEO
    | VideoActionTypes.UNMUTE_VIDEO
    | VideoActionTypes.VIDEO_MOUSEENTER
    | VideoActionTypes.VIDEO_MOUSELEAVE
    | VideoActionTypes.VIDEO_INITIAL_STATE
}

export type DispatchVideoType = (action: VideoAction) => void

export const videoReducer = (
  state: VideoState,
  action: VideoAction
): VideoState => {
  switch (action.type) {
    case VideoActionTypes.PLAY_VIDEO:
      return { ...state, video: "play" }
    case VideoActionTypes.PAUSE_VIDEO:
      return { ...state, video: "pause" }
    case VideoActionTypes.MUTE_VIDEO:
      return { ...state, muted: true }
    case VideoActionTypes.UNMUTE_VIDEO:
      return { ...state, muted: false }
    case VideoActionTypes.VIDEO_MOUSEENTER:
      return { ...state, videoHovered: true }
    case VideoActionTypes.VIDEO_MOUSELEAVE:
      return { ...state, videoHovered: false }
    case VideoActionTypes.VIDEO_INITIAL_STATE:
      return { ...state, video: null }
    default:
      return { ...state }
  }
}
