/** @jsx jsx */
import React from "react"
import { Grid, GridProps } from "@chakra-ui/react"
import { css, jsx } from "@emotion/react"

export const NavDropdownListItem: React.FC<GridProps> = ({
  children,
  ...props
}) => {
  return (
    <Grid
      as="li"
      css={css`
        list-style: none;
      `}
      role="menuitem"
      {...props}
    >
      {children}
    </Grid>
  )
}
