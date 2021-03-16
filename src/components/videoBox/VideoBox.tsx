/** @jsx jsx */
import React, { useRef, useReducer, useEffect } from "react"
import { css, jsx } from "@emotion/react"
import { Box as VideoContainer, BoxProps } from "@chakra-ui/react"
import { videoContext } from "@src/contexts"
import styled from "@emotion/styled"
import { videoReducer, VideoState } from "./reducer"
import * as Video from "./videoActionCreators"

interface VideoBaseProps extends BoxProps {
  /**
   * url of the video
   */
  videoSrcURL: string
  /**
   * width of the video container
   */
  width: string
  /**
   * height of the video container
   */
  height: string

  /**
   * title of the video
   */
  videoTitle?: string
  /**
   * control audio state
   */
  muted?: boolean
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
}

const VideoPlayer = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const VideoBox: React.FC<VideoBaseProps> = ({
  videoSrcURL,
  videoTitle,
  autoPlay,
  loop,
  videoBorderRadius,
  playsInline,
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

  return (
    <videoContext.Provider value={{ state, dispatch }}>
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
            border-radius: ${videoBorderRadius && videoBorderRadius};
          `}
          ref={videoRef}
          muted={state.muted}
          playsInline={playsInline}
          onEnded={() =>
            dispatch(loop ? Video.play() : Video.reinitializeState())
          }
        >
          <source src={videoSrcURL} type="video/mp4" />
        </VideoPlayer>
        {children}
      </VideoContainer>
    </videoContext.Provider>
  )
}

export default VideoBox
