import React from "react"
import {
  BoxProps,
  Grid,
  GridItem,
  GridProps,
  VStack,
  GridItemProps,
} from "@chakra-ui/react"
import { Text } from "@src/components"
import { getChildByType } from "@src/utils"

export interface ChildImageSharpProps {
  childImageSharp: {
    fluid: {
      aspectRatio: number
      base64: string
      src: string
      srcSet: string
      sizes: string
    }
  }
}

export interface BillBoardBaseProps extends BoxProps {
  caption?: string
  headline: string
  /**
   * Stack the content and media grid
   */
  stackGridItemsOnDestkop?: boolean
  /**
   * override the default grid styles
   */
  gridStyles?: GridProps
  /**
   * override the default content grid styles
   */
  gridContentStyles?: GridItemProps
}

type BillboardSlices = "body" | "media" | "footer"

export type BillBoardChildrenProps = {
  children?:
    | {
        props: {
          __TYPE: BillboardSlices
          children: React.ReactElement
        }
      }[]
    | {
        props: {
          __TYPE: BillboardSlices
          children: React.ReactElement
        }
      }
}

type BillBoardProps = BillBoardChildrenProps & BillBoardBaseProps

export const Billboard: React.FC<BillBoardProps> = ({
  caption,
  headline,
  children,
  gridContentStyles,
  stackGridItemsOnDestkop,
  gridStyles,
}) => {
  let billboardContent: unknown
  let billboardMedia: unknown
  let billboardFooter: unknown
  let billboardBg: unknown

  if (children) {
    billboardContent = getChildByType(children, "body")
    billboardMedia = getChildByType(children, "media")
    billboardFooter = getChildByType(children, "footer")
    billboardBg = getChildByType(children, "background")
  }

  const defaultFlexContent = {
    justify: "center",
    height: "100%",
    alignItems: "center",
    width: {
      sm: "100%",
    },
    maxWidth: "30rem",
  }

  const gridItemStyles = {
    grid: {
      gridTemplateColumns: {
        sm: "1fr",
      },
      justifyItems: "center",
      gridTemplateRows: "auto",
      py: 12,
    },
    flexContent: defaultFlexContent,
  }

  const gridItemsStyles = {
    grid: {
      py: 12,
      gridTemplateRows: "auto auto",
      gridTemplateColumns: "1fr",
      justifyItems: "center",
    },
    flexContent: {
      maxWidth: "30rem",
      heigth: "100%",
      alignItems: "center",
    },
  }

  const gridItemsDefault = {
    grid: {
      py: 8,
      justifyItems: {
        sm: "center",
        lg: "start",
      },
      gridTemplateColumns: {
        sm: "1fr",
        lg: "1fr 1fr",
      },
      gridTemplateRows: {
        sm: "auto auto",
        md: "auto auto",
        lg: "auto",
      },

      columnGap: { lg: "15px" },
    },
    flexContent: {
      justify: "center",
      height: "100%",
      alignItems: {
        sm: "center",
        lg: "start",
      },
      width: {
        sm: "100%",
      },
      maxWidth: "30rem",
    },
  }

  const getDefaultStyles = () => {
    if (billboardMedia === undefined) {
      return gridItemStyles
    }
    if (
      (billboardMedia && stackGridItemsOnDestkop) ||
      stackGridItemsOnDestkop
    ) {
      return gridItemsStyles
    }
    return gridItemsDefault
  }

  const defaultStyles = getDefaultStyles()

  return (
    <>
      <Grid {...{ ...defaultStyles.grid, ...gridStyles }}>
        <GridItem>
          <VStack {...{ ...defaultStyles.flexContent, ...gridContentStyles }}>
            {caption && <Text type="caption">{caption}</Text>}
            <Text type="headline.large" mt={0}>
              {headline}
            </Text>
            {billboardContent && billboardContent}
          </VStack>
        </GridItem>
        {billboardMedia && billboardMedia}
      </Grid>
      {billboardFooter && billboardFooter}
      {billboardBg && billboardBg}
    </>
  )
}

export default Billboard
