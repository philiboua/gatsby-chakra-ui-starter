import React from "react"
import { Grid, GridProps } from "@chakra-ui/react"

export const NavDropdownList: React.FC<GridProps> = ({
  children,
  ...props
}) => {
  return (
    <Grid
      as="ul"
      justifyContent="space-between"
      ml="0px"
      className="sub-navigation-list"
      role="menu"
      {...props}
    >
      {children}
    </Grid>
  )
}
