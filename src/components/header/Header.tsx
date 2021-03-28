import React from "react"

import { getChildByType } from "@src/utils"
import { Grid, GridProps, Link } from "@chakra-ui/react"

type HeaderSlices = "navigation" | "sub-navigation"

export type HeaderChildrenProps = {
  children?:
    | {
        props: {
          __TYPE: HeaderSlices
          children: React.ReactElement
        }
      }[]
    | {
        props: {
          __TYPE: HeaderSlices
          children: React.ReactElement
        }
      }
}

export interface HeaderBaseProps {
  /** logo source URL */
  logo: string
  /** alt of logo, provide useful information for screen readers */
  altLogo: string
  /** Grid styles are defined by default, you can override the styles with the prop GridStyles */
  GridStyles?: GridProps
}

type HeaderProps = HeaderBaseProps & HeaderChildrenProps

export const Header: React.FC<HeaderProps> = ({
  logo,
  altLogo,
  children,
  GridStyles,
}) => {
  const sliceNavigation =
    children !== undefined ? getChildByType(children, "navigation") : undefined
  const sliceSubNavigation =
    children !== undefined
      ? getChildByType(children, "sub-navigation")
      : undefined

  const gridWithoutNavigation = {
    gridTemplateColumns: "1fr",
    justifyItems: "center",
    py: 6,
  }

  const gridWithNavigation = {
    gridTemplateColumns: "auto 1fr",
    py: 6,
  }

  const getDefaultGridStyles = () => {
    if (sliceNavigation === undefined) {
      return gridWithoutNavigation
    }
    return gridWithNavigation
  }

  return (
    <>
      <Grid {...{ ...getDefaultGridStyles(), ...GridStyles }}>
        <Link href="/">
          <img src={logo} alt={altLogo} />
        </Link>
        {sliceNavigation && sliceNavigation}
      </Grid>
      {sliceSubNavigation && sliceSubNavigation}
    </>
  )
}
