import React from "react"
import { Box, Grid, GridItem, Button } from "@chakra-ui/react"
import { IoPlay, IoPause, IoVolumeMedium, IoVolumeMute } from "react-icons/io5"
import { useVideoBox } from "@src/components/videoBox/_context/hooks"
import { IMediaState } from "../../../_state/initialState"

const getVideoScreenReadersInfo = (mediaState: IMediaState) => {
  switch (mediaState) {
    case "pause":
      return {
        ariaLabel: "the video is currently on pause, click to resume the video",
        title: "play the video",
      }

    case "play":
      return {
        ariaLabel: "the video is currently playing, click to pause the video",
        title: "pause the video",
      }

    default:
      return {
        ariaLabel: "the video is currently playing, click to pause the video",
        title: "pause the video",
      }
  }
}

interface LayoutVideoAlphaProps {
  /**
   * define the size of icons
   */
  sizeIcon?: string
  /**
   * define the color of icons
   */
  colorIcon?: string
  /**
   * define the padding on the x axis of the grid, usefull to provide some space with borders of the screen
   */
  px?:
    | {
        [key in "sm" | "md" | "lg"]: string | number
      }
    | [string | number]
  /**
   * define the size of each button
   */
  sizeButton?: "xs" | "sm" | "md" | "lg"
}

export const LayoutVideoAlpha: React.FC<LayoutVideoAlphaProps> = ({
  sizeIcon = "1.5rem",
  colorIcon = "#fff",
  px = 3,
  sizeButton = "md",
}) => {
  const { isMediaMuted, mediaState, play, pause, mute, unmute } = useVideoBox()

  const dispatchVideoAction = (mediaCurrentState: IMediaState) => {
    switch (mediaCurrentState) {
      case "pause":
        return play()

      case "play":
        return pause()

      default:
        return pause()
    }
  }

  if (mediaState) {
    return (
      <Box position="absolute" width="100%" bottom="15px">
        <Grid gridTemplateColumns="repeat(2, 1fr)" px={px}>
          <GridItem>
            <Button
              size={sizeButton}
              aria-live="assertive"
              aria-label={getVideoScreenReadersInfo(mediaState).ariaLabel}
              title={getVideoScreenReadersInfo(mediaState).title}
              variant="transparent"
              onClick={() => dispatchVideoAction(mediaState)}
            >
              {mediaState === null && (
                <IoPlay size={sizeIcon} color={colorIcon} />
              )}
              {mediaState === "play" && (
                <IoPause size={sizeIcon} color={colorIcon} />
              )}
              {mediaState === "pause" && (
                <IoPlay size={sizeIcon} color={colorIcon} />
              )}
            </Button>
          </GridItem>
          <GridItem display="grid" justifyItems="flex-end">
            <Button
              aria-live="assertive"
              variant="transparent"
              size={sizeButton}
              aria-label={
                isMediaMuted === true
                  ? "video is currently mute, click to unmute"
                  : "the video is currently unmute, click to mute"
              }
              title={
                isMediaMuted === true ? "unmute the video" : "mute the video"
              }
              onClick={() => (isMediaMuted === true ? unmute() : mute())}
            >
              {isMediaMuted === true ? (
                <IoVolumeMute size={sizeIcon} color={colorIcon} />
              ) : (
                <IoVolumeMedium size={sizeIcon} color={colorIcon} />
              )}
            </Button>
          </GridItem>
        </Grid>
      </Box>
    )
  }

  return null
}
