/** @jsx jsx */
import React from "react"
import { Box, BoxProps } from "@chakra-ui/react"
import { css, jsx } from "@emotion/react"

export const NavigationItem: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      as="li"
      css={css`
        list-style: none;
      `}
      role="menuitem"
      {...props}
    >
      {children}
    </Box>
  )
}
