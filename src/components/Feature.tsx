import React from "react"
import { Text, Link } from "@components/index"
import { Grid, GridItem, Flex } from "@chakra-ui/react"
import { IFeature } from "@src/@interfaces"
import Img from "gatsby-image"

const Feature: React.FC<IFeature> = ({
  featureImage,
  headline,
  content,
  caption,
  link,
  reverseGridItemsOrder,
}) => {
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
        {caption && <Text type="caption">{caption}</Text>}
        <Text type="headline.small" mt={3}>
          {headline}
        </Text>
        <Text mt={3} type="body.medium">
          {content}
        </Text>
        {link && <Link href={link.href} />}
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
