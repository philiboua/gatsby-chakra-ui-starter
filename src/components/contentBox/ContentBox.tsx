import React from "react"
import { bgWithHightSaturation } from "@src/contexts"

interface ContentBoxProps {
  /**
   * Provide indication about the color saturation of the background
   * In case the background is highly saturated, the text color will be white
   */
  hightSaturatedBg?: boolean
  children: React.ReactNode
}

export const ContentBox: React.FC<ContentBoxProps> = ({
  children,
  hightSaturatedBg,
}) => {
  if (hightSaturatedBg) {
    return (
      <bgWithHightSaturation.Provider value>
        {children}
      </bgWithHightSaturation.Provider>
    )
  }
  return <>{children}</>
}
