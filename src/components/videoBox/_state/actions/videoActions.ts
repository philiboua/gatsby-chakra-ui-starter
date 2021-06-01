export enum VideoActionTypes {
  PLAY_VIDEO = "PLAY_VIDEO",
  PAUSE_VIDEO = "PAUSE_VIDEO",
  MUTE_VIDEO = "MUTE_VIDEO",
  UNMUTE_VIDEO = "UNMUTE_VIDEO",
  VIDEO_MOUSEENTER = "VIDEO_MOUSEENTER",
  VIDEO_MOUSELEAVE = "VIDEO_MOUSELEAVE",
  VIDEO_INITIAL_STATE = "VIDEO_INITIAL_STATE",
  VIDEO_ENDED = "VIDEO_ENDED",
}

export interface IVideoAction {
  type:
    | VideoActionTypes.MUTE_VIDEO
    | VideoActionTypes.PAUSE_VIDEO
    | VideoActionTypes.PLAY_VIDEO
    | VideoActionTypes.UNMUTE_VIDEO
    | VideoActionTypes.VIDEO_MOUSEENTER
    | VideoActionTypes.VIDEO_MOUSELEAVE
    | VideoActionTypes.VIDEO_INITIAL_STATE
    | VideoActionTypes.VIDEO_ENDED
}

type ActionVideoCreator = () => IVideoAction

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

export const endOfVideo: ActionVideoCreator = () => {
  return {
    type: VideoActionTypes.VIDEO_ENDED,
  }
}
