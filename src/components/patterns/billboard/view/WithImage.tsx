import React from "react"

import { VStack } from "@chakra-ui/react"
import { Column, Text, ListOfLinks, BillBoardProps } from "@src/components"

import Img from "gatsby-image"

export const BillboardWithImage: React.FC<BillBoardProps> = ({
  caption,
  headline,
  content,
  callToAction,
  image,
  bgColorWithHighSaturation,
}) => {
  const textColor = bgColorWithHighSaturation ? "#fff" : undefined

  return (
    <>
      <Column col={["sm4", "md6", "lg5"]} display="flex">
        <VStack
          justify="center"
          alignItems="flex-start"
          heigth="100%"
          maxWidth="30rem"
        >
          {caption && (
            <Text color={textColor} type="caption">
              {caption}
            </Text>
          )}
          <Text color={textColor} type="headline.large" mt={0}>
            {headline}
          </Text>
          <Text color={textColor} type="introduction">
            {content}
          </Text>
          <ListOfLinks
            bgColorWithHighSaturation={bgColorWithHighSaturation}
            content={callToAction}
          />
        </VStack>
      </Column>

      <Column col={["sm4", "md6", "lg7"]}>
        {image && (
          <Img fluid={image.childImageSharp.fluid} alt="billboard Image" />
        )}
      </Column>
    </>
  )
}
