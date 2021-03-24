/** @jsx jsx */
import React, { useRef, useReducer, useEffect, useMemo } from "react"
import { css, jsx } from "@emotion/react"
import { Box as VideoContainer, BoxProps } from "@chakra-ui/react"
import { videoContext } from "@src/contexts"
import styled from "@emotion/styled"
import { videoReducer, VideoState } from "./reducer"
import * as Video from "./reducer/videoActionCreators"

const VideoPlayer = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
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
  autoPlay = true,
  playsInline,
  videoBorderRadius,
  children,
  ...props
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const initialState: VideoState = {
    muted: true,
    video: autoPlay ? "play" : null,
    videoHovered: false,
  }

  const [state, dispatch] = useReducer(videoReducer, initialState)

  useEffect(() => {
    if (videoRef.current) {
      if (state.video === "play") {
        videoRef.current.play()
      }
      if (state.video === "pause") {
        videoRef.current.pause()
      }
    }
  }, [state])

  const contextValues = useMemo(() => {
    return { state, dispatch }
  }, [state])

  return (
    <videoContext.Provider value={contextValues}>
      <VideoContainer
        position="relative"
        onMouseEnter={() => {
          dispatch(Video.mouseEnter())
        }}
        onMouseLeave={() => {
          dispatch(Video.mouseLeave())
        }}
        {...props}
      >
        <VideoPlayer
          css={css`
            border-radius: ${videoBorderRadius !== undefined
              ? videoBorderRadius
              : "0px"};
          `}
          ref={videoRef}
          muted={state.muted}
          playsInline={playsInline}
          onEnded={() =>
            dispatch(loop ? Video.play() : Video.reinitializeState())
          }
        >
          {videoMp4SrcURL && <source src={videoMp4SrcURL} type="video/webm" />}
          {videoMp4SrcURL && <source src={videoMp4SrcURL} type="video/mp4" />}
          {fallbackMessage && <span>{fallbackMessage}</span>}
        </VideoPlayer>
        {children}
      </VideoContainer>
    </videoContext.Provider>
  )
}

export default VideoBox
