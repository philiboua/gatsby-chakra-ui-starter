import React from "react"
import { bgWithHightSaturation } from "@src/contexts"
import { useIntl } from "gatsby-plugin-intl"
import {
  Box,
  BoxProps,
  Flex,
  HStack,
  Link as ChakraLink,
  useTheme,
} from "@chakra-ui/react"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import {
  Container,
  Column,
  Row,
  Link,
  LinkProps,
  ListOfLinks as Navigation,
  Text,
} from "@src/components"

export interface SocialMediaLinksProps extends LinkProps {
  id: "string"
  href: "string"
}

type IconLinkType = React.ReactElement | string

export interface FooterProps extends BoxProps {
  /**
   * Logo of of the project or company, preferable an svg file
   */
  logo: string
  /**
   * content of the footer
   */

  content?: {
    copyright: string
    footerLinks: LinkProps[]
    companyMission: string
    socialMedia: SocialMediaLinksProps[]
  }
  highSaturatedBgColor?: boolean
}

export const Footer: React.FC<FooterProps> = ({
  logo,
  bgColor,
  content,
  highSaturatedBgColor,
}) => {
  const { colors } = useTheme()
  const intl = useIntl()

  const displaySocialIcon = (name: string): IconLinkType => {
    switch (name) {
      case "facebook":
        return <FaFacebook />
      case "twitter":
        return <FaTwitter />
      case "instagram":
        return <FaInstagram />
      default:
        return ""
    }
  }

  if (highSaturatedBgColor) {
    return (
      <bgWithHightSaturation.Provider value>
        <Box
          bgColor={
            bgColor === undefined ? `${colors.gamma.neutralLight}` : bgColor
          }
          py={9}
        >
          <Container>
            <Row>
              <Column>
                <Flex justify="space-between">
                  {logo && (
                    <Box>
                      <Link href="/">
                        <img src={logo} alt="logo" />
                      </Link>
                    </Box>
                  )}
                  <Box>
                    <Text type="subtitle.medium">
                      {intl.formatMessage({
                        id: `${content?.companyMission}`,
                      })}
                    </Text>
                  </Box>
                </Flex>
              </Column>
            </Row>
            <Row>
              <Column>
                <Box
                  mt={9}
                  pt={9}
                  borderTop={`1px solid ${colors.gamma.passiveLight}`}
                >
                  <Flex justify="space-between">
                    <HStack>
                      <Navigation
                        alignNavigation="left"
                        content={content?.footerLinks}
                      />
                    </HStack>
                    <HStack>
                      {content?.socialMedia.map(
                        (link: SocialMediaLinksProps) => {
                          return (
                            <ChakraLink
                              color={highSaturatedBgColor ? "#fff" : ""}
                              key={link.id}
                              pr={4}
                              href={link.href}
                            >
                              {displaySocialIcon(link.id)}
                            </ChakraLink>
                          )
                        }
                      )}
                    </HStack>
                  </Flex>
                </Box>
              </Column>
            </Row>
          </Container>
        </Box>
      </bgWithHightSaturation.Provider>
    )
  }

  return (
    <Box
      bgColor={bgColor === undefined ? `${colors.gamma.neutralLight}` : bgColor}
      py={9}
    >
      <Container>
        <Row>
          <Column>
            <Flex justify="space-between">
              {logo && (
                <Box>
                  <Link href="/">
                    <img src={logo} alt="logo" />
                  </Link>
                </Box>
              )}
              <Box>
                <Text type="subtitle.medium">
                  {intl.formatMessage({
                    id: `${content?.companyMission}`,
                  })}
                </Text>
              </Box>
            </Flex>
          </Column>
        </Row>
        <Row>
          <Column>
            <Box
              mt={9}
              pt={9}
              borderTop={`1px solid ${colors.gamma.passiveLight}`}
            >
              <Flex justify="space-between">
                <HStack>
                  <Navigation
                    alignNavigation="left"
                    content={content?.footerLinks}
                  />
                </HStack>
                <HStack>
                  {content?.socialMedia.map((link: SocialMediaLinksProps) => {
                    return (
                      <ChakraLink key={link.id} pr={4} href={link.href}>
                        {displaySocialIcon(link.id)}
                      </ChakraLink>
                    )
                  })}
                </HStack>
              </Flex>
            </Box>
          </Column>
        </Row>
      </Container>
    </Box>
  )
}

export default Footer
