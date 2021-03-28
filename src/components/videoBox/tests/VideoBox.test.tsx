import React from "react"
import { screen, render, testA11y } from "@src/tests"
import { VideoBox } from "@src/components"
import video from "@assets/videos/sample-beach.mp4"

describe("VideoBox", () => {
  it("passes a11y test", async () => {
    await testA11y(
      <VideoBox videoMp4SrcURL={video} width="300px" height="200px" />
    )
  })

  test("Should render a video", () => {
    render(
      <VideoBox
        data-testid="video"
        videoMp4SrcURL={video}
        width="300px"
        height="200px"
      />
    )
    const source = screen.getByTestId("video").querySelector("source")
    const sourceTags = screen.getByTestId("video").querySelectorAll("source")
      .length

    expect(source).toHaveAttribute("src", video)
    expect(source).toHaveAttribute("type", "video/mp4")
    expect(sourceTags).toBe(1)
  })

  test("Should autoplay the video by default", () => {
    const playFn = jest.fn()
    window.HTMLMediaElement.prototype.play = playFn

    render(<VideoBox videoMp4SrcURL={video} width="300px" height="200px" />)

    expect(playFn).toHaveBeenCalled()
  })
})
