import React from "react"
import { BillboardContext, BillboardProps } from "../index"

export const ProvideBillboardContext: React.FC<BillboardProps> = ({
  children,
  ...props
}) => {
  const {
    backgroundImage,
    backgroundVideo,
    backgroundColor,
    headline,
    caption,
  } = props

  return (
    <BillboardContext.Provider
      value={{
        backgroundImage,
        backgroundVideo,
        backgroundColor,
        headline,
        caption,
      }}
    >
      {children}
    </BillboardContext.Provider>
  )
}
