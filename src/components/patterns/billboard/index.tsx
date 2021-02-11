/**
 * @purpose The billboard is the main element the end user will see first when the page loads,
 * The purpose of the billboard is to highlight key elements about a product and/or company value proposition.
 *
 */

import React from "react"

import { IBillboard } from "@src/@interfaces"
import { Box, useTheme } from "@chakra-ui/react"
import { Container, Row } from "@src/components"
import { BillboardWithCopy, BillboardWithImage } from "./view"

export const Billboard: React.FC<IBillboard> = ({
  caption,
  headline,
  content,
  callToAction,
  image,
  bgColor,
  bgColorWithHighSaturation,
}) => {
  const { colors } = useTheme()
  return (
    <Box
      py={image === undefined ? 40 : 20}
      bg={bgColor === undefined ? colors.gamma.neutralLight : bgColor}
    >
      <Container>
        <Row wrap={{ sm: "wrap", md: "nowrap" }}>
          {image === undefined ? (
            <BillboardWithCopy
              caption={caption}
              headline={headline}
              content={content}
              bgColorWithHighSaturation={bgColorWithHighSaturation}
              callToAction={callToAction}
            />
          ) : (
            <BillboardWithImage
              caption={caption}
              headline={headline}
              content={content}
              image={image}
              bgColorWithHighSaturation={bgColorWithHighSaturation}
              callToAction={callToAction}
            />
          )}
        </Row>
      </Container>
    </Box>
  )
}

export default Billboard
