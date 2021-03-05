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
  SectionBox,
  Column,
  Footer,
  Row,
  Link,
  LinkProps,
  ListOfLinks as Navigation,
  Text,
  Slice,
} from "@src/components"
import logoCompany from "@images/logo-1.svg"

export interface SocialMediaLinksProps extends LinkProps {
  id: "string"
  href: "string"
}

type IconLinkType = React.ReactElement | string

interface Logo {
  /**
   * Logo of of the project or company, preferable an svg file
   */
  logo: string
  /**
   * content of the footer
   */
}

export interface FooterModelBase extends BoxProps {
  copyright: string
  footerLinks: LinkProps[]
  companyMission: string
  socialMedia: SocialMediaLinksProps[]
}

type FooterModelProps = Logo & FooterModelBase

export const FooterSection: React.FC<FooterModelProps> = ({
  copyright,
  companyMission,
  socialMedia,
  footerLinks,
  logo,
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
  return (
    <SectionBox withContainer contentType="footer" py={9}>
      <Footer>
        <Slice __TYPE="header">
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
                      id: `${companyMission}`,
                    })}
                  </Text>
                </Box>
              </Flex>
            </Column>
          </Row>
        </Slice>
        <Slice __TYPE="footer">
          <Row>
            <Column>
              <Box
                mt={9}
                pt={9}
                borderTop={`1px solid ${colors.gamma.passiveLight}`}
              >
                <Flex justify="space-between">
                  <HStack>
                    <Navigation alignNavigation="left" content={footerLinks} />
                  </HStack>
                  <HStack>
                    {socialMedia.map((link: SocialMediaLinksProps) => {
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
        </Slice>
      </Footer>
    </SectionBox>
  )
}
