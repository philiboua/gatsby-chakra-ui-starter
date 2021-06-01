import React from "react"
import { BoxProps } from "@chakra-ui/react"
import { ProvideHoverContext } from "./_context/components/provideHoverContext"
import { HoverContainer } from "./components"

export const HoverBox: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <ProvideHoverContext>
      <HoverContainer {...props}>{children}</HoverContainer>
    </ProvideHoverContext>
  )
}
