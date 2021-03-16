import { VideoActionTypes } from "./videoActionTypes"
import { VideoAction } from "./reducer"

type ActionVideoCreator = () => VideoAction

export const play: ActionVideoCreator = () => {
  return {
    type: VideoActionTypes.PLAY_VIDEO,
  }
}

export const pause: ActionVideoCreator = () => {
  return {
    type: VideoActionTypes.PAUSE_VIDEO,
  }
}

export const mute: ActionVideoCreator = () => {
  return {
    type: VideoActionTypes.MUTE_VIDEO,
  }
}

export const unmute: ActionVideoCreator = () => {
  return {
    type: VideoActionTypes.UNMUTE_VIDEO,
  }
}

export const reinitializeState: ActionVideoCreator = () => {
  return {
    type: VideoActionTypes.VIDEO_INITIAL_STATE,
  }
}

export const mouseEnter: ActionVideoCreator = () => {
  return {
    type: VideoActionTypes.VIDEO_MOUSEENTER,
  }
}

export const mouseLeave: ActionVideoCreator = () => {
  return {
    type: VideoActionTypes.VIDEO_MOUSELEAVE,
  }
}
