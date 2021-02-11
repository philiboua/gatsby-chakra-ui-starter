/**
 * For better use to use the component with the Container and Row component
 * below the best DOM structure :
 * Container > Row > Column > Card
 *
 * A cards container is available to use at following location src/components/patterns/cards
 */

import React from "react"
import Img from "gatsby-image"
import { ICard } from "@src/@interfaces"
import { Box, useTheme, Flex, useMediaQuery } from "@chakra-ui/react"
import { Article, Link, Text } from "@src/components"

export const Card: React.FC<ICard> = ({
  media,
  headline,
  body,
  link,
  mediaType,
}) => {
  const { colors } = useTheme()
  const [isSmallThanTablet] = useMediaQuery("(max-width: 767px)")

  const handleSizeCard = () => {
    return isSmallThanTablet ? { marginTop: "0px" } : { marginTop: "auto" }
  }
  const displayImageOrIcon = () => {
    if (mediaType === "image") {
      return (
        media && (
          <Box
            className="img-wp"
            height="200px"
            width="100%"
            alignSelf="stretch"
            flex={1}
          >
            <Img
              style={{ maxHeight: "200px", maxWidth: "100%" }}
              fluid={media.childImageSharp.fluid}
            />
          </Box>
        )
      )
    }
    return (
      media && (
        <Box className="img-wp" alignSelf="stretch" flex={1} mb={4}>
          <Img
            style={{ width: "40px", height: "40px" }}
            imgStyle={{ objectFit: "contain" }}
            fluid={media.childImageSharp.fluid}
            alt="icon"
          />
        </Box>
      )
    )
  }

  return (
    <Flex
      mt={{ sm: 9, md: 3, lg: 0 }}
      bgColor={mediaType === "image" ? "#fff" : ""}
      border={
        mediaType === "image" ? `1px solid ${colors.gamma.soothingLight}` : ""
      }
      borderRadius="4px"
      maxWidth={{ sm: "100%", md: "100%", lg: "330px" }}
      direction="column"
      height="100%"
    >
      {displayImageOrIcon()}

      <Article
        p={mediaType === "image" ? 9 : 0}
        pr={mediaType !== "image" ? 12 : 0}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        flex="1 1 auto"
      >
        <Text
          type="subtitle.medium"
          marginBottom={mediaType === "image" ? 3 : 2}
          fontWeight="bold"
        >
          {headline}
        </Text>
        <Text type="body.small" marginBottom={3}>
          {body}
        </Text>
        <Box style={handleSizeCard()}>
          <Link
            href={link?.href ? link.href : ""}
            isExternal={link?.isExternal}
            marginTop="auto"
            paddingTop={3}
            displayRightArrow={link && !link?.isExternal}
          >
            {link?.text}
          </Link>
        </Box>
      </Article>
    </Flex>
  )
}

export default Card
