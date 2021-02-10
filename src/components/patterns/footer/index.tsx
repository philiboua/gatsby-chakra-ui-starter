import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import {
  Box,
  Flex,
  HStack,
  Link as ChakraLink,
  useTheme,
} from "@chakra-ui/react"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import { ISocialMediaLinks, ILink } from "@src/@interfaces"
import {
  Container,
  Column,
  Row,
  Link,
  ListOfLinks as Navigation,
  Text,
} from "@src/components"

type IconLinkType = React.ReactElement | string

export interface FooterProps {
  /**
   * Logo of of the project or company, preferable an svg file
   */
  logo: string
  /**
   * content of the footer
   */
  content?: {
    copyright: string
    footerLinks: ILink[]
    companyMission: string
    socialMedia: ISocialMediaLinks[]
  }
}

export const Footer: React.FC<FooterProps> = ({ logo, content }) => {
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
  return (
    <Box bgColor={`${colors.gamma.neutralLight}`} py={9}>
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
                  {content?.socialMedia.map((link: ISocialMediaLinks) => {
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
