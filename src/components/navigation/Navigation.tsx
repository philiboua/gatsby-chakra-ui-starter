import React from "react"
import { Box } from "@chakra-ui/react"

export const Navigation: React.FC = ({ children }) => {
  return (
    <Box as="nav" role="navigation" className="navigation">
      {children}
    </Box>
  )
}
