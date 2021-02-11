import React from "react"
import {
  Text,
  TextProps,
  Link,
  LinkProps,
  ChildImageSharpProps,
} from "@components/index"
import { Grid, GridItem } from "@chakra-ui/react"

import Img from "gatsby-image"

export interface FeatureProps {
  /**
   * Used in the Features Component when we iterate through an array of features
   */
  id?: string
  /**
   * Image or illustration
   */
  featureImage: ChildImageSharpProps
  headline: TextProps
  content: TextProps
  caption?: TextProps
  link?: LinkProps
  reverseGridItemsOrder?: boolean
  bgColorWithHighSaturation?: boolean
}

export const Feature: React.FC<FeatureProps> = ({
  featureImage,
  headline,
  content,
  caption,
  link,
  reverseGridItemsOrder,
  bgColorWithHighSaturation,
}) => {
  const textColor = bgColorWithHighSaturation ? "#fff" : undefined

  return (
    <Grid
      templateColumns="repeat(auto-fit,minmax(320px,1fr))"
      gap={6}
      alignItems="center"
      px="15px"
      py={20}
      mt={16}
    >
      <GridItem
        pr={reverseGridItemsOrder ? "" : { md: 16 }}
        pl={reverseGridItemsOrder ? { md: 16 } : ""}
      >
        {caption && (
          <Text color={textColor} type="caption">
            {caption}
          </Text>
        )}
        <Text color={textColor} type="headline.small" mt={3}>
          {headline}
        </Text>
        <Text color={textColor} mt={3} type="body.medium">
          {content}
        </Text>
        {link && (
          <Link
            bgColorWithHighSaturation={bgColorWithHighSaturation}
            mt={3}
            asButton={link.asButton}
            isExternal={link.isExternal}
            href={link.href}
          >
            {link.text}
          </Link>
        )}
      </GridItem>
      <GridItem
        pl={reverseGridItemsOrder ? "" : { md: 16 }}
        pr={reverseGridItemsOrder ? { md: 16 } : ""}
        order={reverseGridItemsOrder ? { md: -1 } : 0}
      >
        {featureImage && (
          <Img
            fluid={featureImage.childImageSharp.fluid}
            alt="billboard Image"
          />
        )}
      </GridItem>
    </Grid>
  )
}

export default Feature
