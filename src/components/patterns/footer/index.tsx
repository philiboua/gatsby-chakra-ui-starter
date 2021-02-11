import React from "react"
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
  bgColorWithHighSaturation?: boolean
  content?: {
    copyright: string
    footerLinks: LinkProps[]
    companyMission: string
    socialMedia: SocialMediaLinksProps[]
  }
}

export const Footer: React.FC<FooterProps> = ({
  logo,
  bgColor,
  content,
  bgColorWithHighSaturation,
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

  const contentColor = bgColorWithHighSaturation ? "#fff" : undefined

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
                <Text color={contentColor} type="subtitle.medium">
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
                    bgColorWithHighSaturation={bgColorWithHighSaturation}
                    alignNavigation="left"
                    content={content?.footerLinks}
                  />
                </HStack>
                <HStack>
                  {content?.socialMedia.map((link: SocialMediaLinksProps) => {
                    return (
                      <ChakraLink
                        color={contentColor}
                        key={link.id}
                        pr={4}
                        href={link.href}
                      >
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
