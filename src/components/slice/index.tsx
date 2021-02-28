import React from "react"

export type SlicesType = "body" | "media" | "header" | "footer" | "background"

interface SliceProps {
  __TYPE: SlicesType
}

export const Slice: React.FC<SliceProps> = ({ children }) => {
  return <>{children}</>
}

export default Slice
