import { useContext } from "react"
import { VideoContext } from "../videoBoxContext"
import { mouseEnter, mouseLeave } from "../../_state/actions"

type UseVideoBox = {
  mouseEnter: () => void
  mouseLeave: () => void
}

export const useVideoMouseEvents = (): UseVideoBox => {
  const context = useContext(VideoContext)

  return {
    mouseEnter: () => context?.dispatch(mouseEnter()),
    mouseLeave: () => context?.dispatch(mouseLeave()),
  }
}
