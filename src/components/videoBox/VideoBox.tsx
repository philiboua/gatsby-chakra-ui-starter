import React from "react"
import { BoxProps } from "@chakra-ui/react"
import { VideoPlayer, VideoContainer } from "./components"
import { ProvideVideoBox } from "./_context/components"

interface VideoBaseProps extends BoxProps {
  /**
   * url of the MP4 video
   */
  videoMp4SrcURL: string
  /**
   * url of the WebM video
   */
  videoWebpmSrcURL?: string
  /**
   * display a message in case the format MP4 or webM are not supported by the browser
   */
  fallbackMessage?: string
  /**
   * define the width of the video container
   */
  width: string
  /**
   * define the height of the video container
   */
  height: string
  /**
   * loop through the video
   */
  loop?: boolean
  /**
   * will start the video on page load when true
   */
  autoPlay?: boolean
  /**
   * video will play inside its frame on mobile
   */
  playsInline?: boolean
  /**
   * control border radius of video
   */
  videoBorderRadius?: string
  /**
   * React Element ( video context or another component)
   */
  children?: React.ReactElement
}

export const VideoBox: React.FC<VideoBaseProps> = ({
  videoMp4SrcURL,
  videoWebpmSrcURL,
  fallbackMessage,
  loop,
  autoPlay = false,
  playsInline,
  videoBorderRadius,
  children,
  ...props
}) => {
  return (
    <ProvideVideoBox>
      <VideoContainer {...props}>
        <VideoPlayer
          videoMp4SrcURL={videoMp4SrcURL}
          fallbackMessage={fallbackMessage}
          videoBorderRadius={videoBorderRadius}
          autoPlay={autoPlay}
          playsInline={playsInline}
          loop={loop}
        />
        {children}
      </VideoContainer>
    </ProvideVideoBox>
  )
}
