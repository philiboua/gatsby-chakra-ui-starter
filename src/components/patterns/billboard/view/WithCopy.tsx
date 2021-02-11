import React from "react"

import { IBillboard } from "@src/@interfaces"
import { VStack } from "@chakra-ui/react"
import { Column, Text, ListOfLinks } from "@src/components"

export const BillboardWithCopy: React.FC<IBillboard> = ({
  caption,
  headline,
  content,
  callToAction,
  bgColorWithHighSaturation,
}) => {
  const textColor = bgColorWithHighSaturation ? "#fff" : undefined

  return (
    <Column col={["sm4", "md6", "lg12"]} display="flex" justifyContent="center">
      <VStack
        justify="center"
        heigth="100%"
        alignItems="center"
        maxWidth="30rem"
      >
        {caption && (
          <Text color={textColor} type="caption">
            {caption}
          </Text>
        )}
        <Text color={textColor} type="headline.large" mt={0} align="center">
          {headline}
        </Text>
        <Text color={textColor} type="introduction" align="center">
          {content}
        </Text>
        <ListOfLinks
          bgColorWithHighSaturation={bgColorWithHighSaturation}
          content={callToAction}
        />
      </VStack>
    </Column>
  )
}
