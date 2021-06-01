import React from "react"
import { Box } from "@chakra-ui/react"
import { useToggleHover } from "@src/components"

export const HoverContainer: React.FC = ({ children, ...props }) => {
  const context = useToggleHover()

  if (context?.setHover) {
    const { setHover } = context
    return (
      <Box
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        position="relative"
        {...props}
      >
        {children}
      </Box>
    )
  }

  return null
}
