import React from "react"
import { Box, BoxProps } from "@chakra-ui/react"
import { motion, MotionProps } from "framer-motion"

const MotionBox = motion(Box)

export const NavDropdownContent: React.FC<BoxProps & MotionProps> = ({
  children,
  ...props
}) => {
  return (
    <MotionBox position="absolute" className="navigationDropdown" {...props}>
      {children}
    </MotionBox>
  )
}
