import React, { useContext } from "react"
import * as Video from "@src/components/videoBox/reducer/videoActionCreators"
import { videoContext, VideoContextType } from "@src/contexts"
import { Box, Grid, GridItem, Button } from "@chakra-ui/react"
import { IoPlay, IoPause, IoVolumeMedium, IoVolumeMute } from "react-icons/io5"

const getVideoScreenReadersInfo = (currentContext: VideoContextType) => {
  switch (currentContext?.state.video) {
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

const dispatchVideoAction = (currentContext: VideoContextType) => {
  switch (currentContext?.state.video) {
    case "pause":
      return currentContext?.dispatch(Video.play())

    case "play":
      return currentContext?.dispatch(Video.pause())

    default:
      return currentContext?.dispatch(Video.play())
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
  const context = useContext(videoContext)
  if (context !== null) {
    return (
      <Box position="absolute" width="100%" bottom="15px">
        <Grid gridTemplateColumns="repeat(2, 1fr)" px={px}>
          <GridItem>
            <Button
              size={sizeButton}
              aria-live="assertive"
              aria-label={getVideoScreenReadersInfo(context).ariaLabel}
              title={getVideoScreenReadersInfo(context).title}
              variant="transparent"
              onClick={() => dispatchVideoAction(context)}
            >
              {context?.state.video === null && (
                <IoPlay size={sizeIcon} color={colorIcon} />
              )}
              {context?.state.video === "play" && (
                <IoPause size={sizeIcon} color={colorIcon} />
              )}
              {context?.state.video === "pause" && (
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
                context?.state.muted === true
                  ? "video is currently mute, click to unmute"
                  : "the video is currently unmute, click to mute"
              }
              title={
                context?.state.muted === true
                  ? "unmute the video"
                  : "mute the video"
              }
              onClick={() =>
                context?.state.muted === true
                  ? context?.dispatch(Video.unmute())
                  : context?.dispatch(Video.mute())
              }
            >
              {context?.state.muted === true ? (
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
