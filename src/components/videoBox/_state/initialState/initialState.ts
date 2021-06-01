export type IMediaState = "pause" | "play" | "stop"

export interface IVideoState {
  video: IMediaState
  muted: boolean
  videoHovered: boolean
}

export const initialVideoState = {
  muted: true,
  video: "pause" as IMediaState,
  videoHovered: false,
}
