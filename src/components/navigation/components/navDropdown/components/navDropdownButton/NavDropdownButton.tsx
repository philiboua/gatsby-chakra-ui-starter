import React from "react"
import { Button, Box, ButtonProps } from "@chakra-ui/react"

export const NavDropdownButton: React.FC<
  ButtonProps & { expanded: boolean }
> = ({ expanded = false, children, ...props }) => {
  return (
    <Box style={{ cursor: "pointer" }}>
      <Button
        style={{ pointerEvents: "none" }}
        aria-haspopup
        aria-expanded={expanded}
        className="navigationItem---button"
        {...props}
      >
        {children}
      </Button>
    </Box>
  )
}
