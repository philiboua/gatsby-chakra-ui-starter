import React from "react"
import { Text, TextProps } from "@components/index"
import { Grid, GridItem, GridProps, GridItemProps } from "@chakra-ui/react"
import { getChildByType } from "@src/utils"

export type FeatureBaseProps = {
  /**
   * Used in the Features Component when we iterate through an array of features
   */
  id?: string
  /**
   * Image or illustration
   */
  headline: TextProps
  caption?: TextProps
  reverseGridItemsOrder?: boolean
  gridStyles?: GridProps
  firstGridItemStyles?: GridItemProps
  secondGridItemStyles?: GridItemProps
}

type ChildType = "media" | "body"

export type FeatureChildrenProp = {
  children: {
    props: {
      __TYPE: ChildType
      children: React.ReactNode
    }
  }[]
}

export type FeatureProps = FeatureBaseProps & FeatureChildrenProp

const defaultGridStyles = {
  templateColumns: "repeat(auto-fit,minmax(320px,1fr))",
  gap: 6,
  alignItems: "center",
  px: "15px",
  py: 20,
  mt: 16,
}

export const Feature: React.FC<FeatureProps> = ({
  headline,
  caption,
  reverseGridItemsOrder,
  gridStyles,
  firstGridItemStyles,
  secondGridItemStyles,
  children,
}) => {
  const featureMedia = getChildByType(children, "media")
  const featureContent = getChildByType(children, "body")

  return (
    <Grid {...(gridStyles !== undefined ? gridStyles : defaultGridStyles)}>
      <GridItem
        pr={reverseGridItemsOrder ? "" : { md: 16 }}
        pl={reverseGridItemsOrder ? { md: 16 } : ""}
        {...(firstGridItemStyles !== undefined ? firstGridItemStyles : "")}
      >
        {caption && <Text type="caption">{caption}</Text>}
        <Text type="headline.small" mt={3}>
          {headline}
        </Text>
        {featureContent}
      </GridItem>
      <GridItem
        pl={reverseGridItemsOrder ? "" : { md: 16 }}
        pr={reverseGridItemsOrder ? { md: 16 } : ""}
        order={reverseGridItemsOrder ? { md: -1 } : 0}
        {...(secondGridItemStyles !== undefined ? secondGridItemStyles : "")}
      >
        {featureMedia}
      </GridItem>
    </Grid>
  )
}

export default Feature
