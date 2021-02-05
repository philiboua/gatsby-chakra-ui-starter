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

const Card: React.FC<ICard> = ({ image, icon, data, link, type }) => {
  const { colors } = useTheme()
  const [isSmallThanTablet] = useMediaQuery("(max-width: 767px)")

  const handleSizeCard = () => {
    return isSmallThanTablet ? { marginTop: "0px" } : { marginTop: "auto" }
  }
  const displayImageOrIcon = () => {
    if (type === "withImage") {
      return (
        image && (
          <Box
            className="img-wp"
            maxHeight="200px"
            alignSelf="stretch"
            flex={1}
          >
            <Img
              style={{ maxHeight: "200px" }}
              fluid={image.childImageSharp.fluid}
            />
          </Box>
        )
      )
    }
    return (
      icon && (
        <Box
          className="img-wp"
          maxHeight="40px"
          alignSelf="stretch"
          flex={1}
          mb={4}
        >
          <Img
            style={{ maxHeight: "40px", maxWidth: "40px" }}
            fluid={icon.childImageSharp.fluid}
            alt="icon"
          />
        </Box>
      )
    )
  }

  return (
    <Flex
      mt={{ sm: 9, md: 3, lg: 0 }}
      border={type === "withImage" ? `1px solid ${colors.neutral[100]}` : ""}
      borderRadius="4px"
      direction="column"
      height="100%"
    >
      {displayImageOrIcon()}

      <Article
        p={type === "withImage" ? 9 : 0}
        pr={type !== "withImage" ? 12 : 0}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        flex="1 1 auto"
      >
        <Text
          type="subtitle.medium"
          marginBottom={type === "witImage" ? 3 : 2}
          fontWeight="bold"
        >
          {data.headline}
        </Text>
        <Text type="body.small" marginBottom={3}>
          {data.content}
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
