import React from "react"

export interface BillboardProps {
  backgroundImage?: string
  backgroundVideo?: string
  backgroundColor?: string
  caption?: string
  headline: string
}

export const BillboardContext = React.createContext<null | BillboardProps>(null)
