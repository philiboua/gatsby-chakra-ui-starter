import React from "react"

type Slices = "body" | "media" | "header" | "footer" | "background"

interface SliceProps {
  __TYPE: Slices
}

export const Slice: React.FC<SliceProps> = ({ children }) => {
  return <>{children}</>
}

export default Slice
