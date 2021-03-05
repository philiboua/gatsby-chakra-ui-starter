import React from "react"
import { bgWithHightSaturation } from "@src/contexts"

interface ContentBoxProps {
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
