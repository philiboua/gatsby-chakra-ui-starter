import React from "react"
import { Flex, FlexProps } from "@chakra-ui/react"

export const NavigationList: React.FC<FlexProps> = ({ children, ...props }) => {
  return (
    <Flex
      as="ul"
      justifyContent="space-between"
      ml="0px"
      role="menubar"
      className="main-menubar"
      {...props}
    >
      {children}
    </Flex>
  )
}
