/** @jsx jsx */
import React, { useEffect, useRef } from "react"
import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"
import { useVideoBox } from "../../_context/hooks/useVideoBox"

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

interface VideoPlayerProps {
  /**
   * url of the MP4 video
   */
  videoMp4SrcURL: string
  /**
   * url of the WebM video
   */

  videoWebpmSrcURL?: string
  /**
   * will start the video on page load when true
   */
  autoPlay?: boolean
  /**
   * display a message in case the format MP4 or webM are not supported by the browser
   */
  fallbackMessage?: string
  /**
   * loop through the video
   */
  loop?: boolean
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

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoBorderRadius,
  playsInline,
  videoMp4SrcURL,
  videoWebpmSrcURL,
  fallbackMessage,
  loop,
  autoPlay,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { isMediaMuted, play, mediaState, endOfVideo, pause } = useVideoBox()
  const { current: currentPlay } = useRef(play)

  useEffect(() => {
    if (autoPlay) {
      currentPlay()
    }
  }, [currentPlay, autoPlay])

  useEffect(() => {
    if (videoRef.current) {
      if (mediaState === "play") {
        videoRef.current.play()
      }
      if (mediaState === "pause") {
        videoRef.current.pause()
      }
      if (mediaState === "stop") {
        if (loop) {
          play()
        }
      }
    }
  }, [mediaState, loop, play])

  const handleOnEnded = () => {
    if (loop) {
      if (videoRef.current) {
        videoRef.current.currentTime = 0
        endOfVideo()
      }
    } else {
      pause()
    }
  }

  return (
    <Video
      css={css`
        border-radius: ${videoBorderRadius !== undefined
          ? videoBorderRadius
          : "0px"};
      `}
      ref={videoRef}
      muted={isMediaMuted}
      playsInline={playsInline}
      onEnded={() => handleOnEnded()}
    >
      {videoWebpmSrcURL && <source src={videoWebpmSrcURL} type="video/webm" />}
      {videoMp4SrcURL && <source src={videoMp4SrcURL} type="video/mp4" />}
      {fallbackMessage && <span>{fallbackMessage}</span>}
    </Video>
  )
}
