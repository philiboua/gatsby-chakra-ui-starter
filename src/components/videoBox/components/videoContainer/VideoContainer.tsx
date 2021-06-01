import React from "react"
import { Box } from "@chakra-ui/react"
import { useVideoMouseEvents } from "../../_context/hooks"

export const VideoContainer: React.FC = ({ children, ...props }) => {
  const { mouseEnter, mouseLeave } = useVideoMouseEvents()

  return (
    <Box
      position="relative"
      onMouseEnter={() => {
        mouseEnter()
      }}
      onMouseLeave={() => {
        mouseLeave()
      }}
      {...props}
    >
      {children}
    </Box>
  )
}
