import { useContext } from "react"
import { videoContext } from "@src/contexts"
import * as Video from "@src/components/videoBox/reducer/videoActionCreators"

type UseVideoBox = {
  isMediaMuted?: boolean
  mediaState: "pause" | "play" | "ended" | null | undefined
  play: () => void
  pause: () => void
  mute: () => void
  unmute: () => void
}

export const useVideoBox = (): UseVideoBox => {
  const context = useContext(videoContext)

  return {
    isMediaMuted: context?.state.muted,
    mediaState: context?.state.video,
    play: () => context?.dispatch(Video.play()),
    pause: () => context?.dispatch(Video.pause()),
    mute: () => context?.dispatch(Video.mute()),
    unmute: () => context?.dispatch(Video.unmute()),
  }
}
