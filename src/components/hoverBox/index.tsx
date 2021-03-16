import React, { useState } from "react"
import { Box, BoxProps } from "@chakra-ui/react"
import { hoverContext } from "@src/contexts"

export const HoverBox: React.FC<BoxProps> = ({ children, ...props }) => {
  const [hover, setHover] = useState(false)
  return (
    <hoverContext.Provider value={hover}>
      <Box
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        position="relative"
        {...props}
      >
        {children}
      </Box>
    </hoverContext.Provider>
  )
}
