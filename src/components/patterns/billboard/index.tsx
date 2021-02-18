/**
 * @purpose The billboard is the main element the end user will see first when the page loads,
 * The purpose of the billboard is to highlight key elements about a product and/or company value proposition.
 *
 */

import React from "react"
import { bgWithHightSaturation } from "@src/contexts"
import { Box, BoxProps, useTheme } from "@chakra-ui/react"
import { Container, Row, LinkProps } from "@src/components"
import { BillboardWithCopy, BillboardWithImage } from "./view"

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

export interface BillBoardProps extends BoxProps {
  caption?: string
  headline: string
  content: string
  callToAction: LinkProps[]
  image?: ChildImageSharpProps
  highSaturatedBgColor?: boolean
}

export const Billboard: React.FC<BillBoardProps> = ({
  caption,
  headline,
  content,
  callToAction,
  image,
  bgColor,
  highSaturatedBgColor,
}) => {
  const { colors } = useTheme()

  /**
   * when the prop @highSaturatedBgColor we wrap the component with a context provider
   */
  if (highSaturatedBgColor) {
    return (
      <bgWithHightSaturation.Provider value>
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
                  callToAction={callToAction}
                />
              ) : (
                <BillboardWithImage
                  caption={caption}
                  headline={headline}
                  content={content}
                  image={image}
                  callToAction={callToAction}
                />
              )}
            </Row>
          </Container>
        </Box>
      </bgWithHightSaturation.Provider>
    )
  }
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
              callToAction={callToAction}
            />
          ) : (
            <BillboardWithImage
              caption={caption}
              headline={headline}
              content={content}
              image={image}
              callToAction={callToAction}
            />
          )}
        </Row>
      </Container>
    </Box>
  )
}

export default Billboard
