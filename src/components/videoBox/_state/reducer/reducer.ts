import { IVideoAction, VideoActionTypes } from "../actions"
import { IVideoState, IMediaState } from "../initialState"

export const videoReducer = (
  state: IVideoState,
  action: IVideoAction
): IVideoState => {
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
      return { ...state, video: "pause" }
    case VideoActionTypes.VIDEO_ENDED:
      return { ...state, video: "stop" }
    default:
      return { ...state }
  }
}
