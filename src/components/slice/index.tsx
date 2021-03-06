import React from "react"

export type SlicesType =
  | "body"
  | "media"
  | "header"
  | "footer"
  | "background"
  | "navigation"
  | "sub-navigation"

interface SliceProps {
  __TYPE: SlicesType
  children: React.ReactNode
}

export const Slice: React.FC<SliceProps> = ({ children }) => {
  return <>{children}</>
}

export default Slice
