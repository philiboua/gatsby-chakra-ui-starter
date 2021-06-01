import { useContext } from "react"
import { VideoContext } from "../videoBoxContext"
import {
  play,
  pause,
  mute,
  unmute,
  reinitializeState,
  endOfVideo,
} from "../../_state/actions"

type UseVideoBox = {
  isMediaMuted?: boolean
  mediaState: "pause" | "play" | "stop" | null | undefined
  play: () => void
  pause: () => void
  mute: () => void
  unmute: () => void
  reinitializeState: () => void
  endOfVideo: () => void
}

export const useVideoBox = (): UseVideoBox => {
  const context = useContext(VideoContext)

  return {
    isMediaMuted: context?.state.muted,
    mediaState: context?.state.video,
    play: () => context?.dispatch(play()),
    pause: () => context?.dispatch(pause()),
    mute: () => context?.dispatch(mute()),
    unmute: () => context?.dispatch(unmute()),
    reinitializeState: () => context?.dispatch(reinitializeState()),
    endOfVideo: () => context?.dispatch(endOfVideo()),
  }
}
