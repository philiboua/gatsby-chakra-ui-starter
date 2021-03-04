import React from "react"
import {
  ChildImageSharpProps,
  Article,
  Text,
  Link,
  ContentBox,
  SectionBox,
} from "@src/components"
import {
  useMediaQuery,
  useTheme,
  Box,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react"
import Img from "gatsby-image"

export interface CardModel {
  id?: string
  mediaType?: string
  media?: ChildImageSharpProps
  headline: string
  body: string
  link?: {
    text: string
    asButton?: boolean
    href: string
    isExternal?: boolean
  }
}

interface CardsProps {
  data: CardModel[]
}

export const CardSection: React.FC<CardsProps> = ({ data }) => {
  const [isSmallThanTablet] = useMediaQuery("(max-width: 767px)")

  const handleSizeCard = () => {
    return isSmallThanTablet ? { marginTop: "0px" } : { marginTop: "auto" }
  }

  return (
    <SectionBox contentType="section" bgColor="#000" withContainer>
      <Grid
        gridTemplateColumns="1fr"
        gridTemplateRows="auto auto"
        columnGap="15px"
        px="15px"
      >
        <GridItem>
          <Article centerContent py={28}>
            <Text color="white" type="headline.medium" textAlign="center">
              A better way to send money
            </Text>
            <Text color="white" type="body.medium">
              This is to display a card container{" "}
            </Text>
          </Article>
        </GridItem>
        <GridItem
          display="grid"
          gridColumnGap="15px"
          gridRowGap={{ sm: "20px", md: "20px", lg: "0px" }}
          gridTemplateColumns={{
            sm: "repeat( auto-fit, minmax(300px, 1fr) )",
            md: "repeat( auto-fit, minmax(300px, 1fr) )",
            lg: "repeat(3,1fr)",
          }}
        >
          {data.map((card: CardModel) => {
            return (
              <GridItem justifySelf="center">
                <ContentBox>
                  <Flex
                    mt={{ sm: 9, md: 3, lg: 0 }}
                    bgColor="#fff"
                    borderRadius="4px"
                    width="330px"
                    direction="column"
                    height="100%"
                  >
                    <Box
                      className="img-wp"
                      height="200px"
                      width="100%"
                      alignSelf="stretch"
                      flex={1}
                    >
                      {card.media && (
                        <Img
                          style={{ maxHeight: "200px", maxWidth: "100%" }}
                          fluid={card.media.childImageSharp.fluid}
                        />
                      )}
                    </Box>
                    <Article
                      p={4}
                      pr={12}
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-start"
                      flex="1 1 auto"
                    >
                      <Text
                        type="subtitle.medium"
                        marginBottom={3}
                        fontWeight="bold"
                      >
                        {card.headline}
                      </Text>
                      <Text type="body.small" marginBottom={3}>
                        {card.body}
                      </Text>
                      <Box style={handleSizeCard()}>
                        <Link
                          href={card.link?.href ? card.link.href : ""}
                          isExternal={card.link?.isExternal}
                          marginTop="auto"
                          paddingTop={3}
                          displayRightArrow={
                            card.link && !card.link?.isExternal
                          }
                        >
                          {card.link?.text}
                        </Link>
                      </Box>
                    </Article>
                  </Flex>
                </ContentBox>
              </GridItem>
            )
          })}
        </GridItem>
      </Grid>
    </SectionBox>
  )
}

export default CardSection
