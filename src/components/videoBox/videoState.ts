export interface VideoState {
  video: "pause" | "play" | "ended" | null
  muted: boolean
  videoHovered: boolean
}
