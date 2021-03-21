import React from "react"
import { Box, BoxProps, forwardRef } from "@chakra-ui/react"
import { motion, isValidMotionProp } from "framer-motion"

const MotionBox = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    )
    return <Box ref={ref} {...chakraProps} />
  })
)

export const NavDropdownContent: React.FC<BoxProps> = ({
  children,
  ...props
}) => {
  return (
    <MotionBox position="absolute" className="navigationDropdown" {...props}>
      {children}
    </MotionBox>
  )
}
