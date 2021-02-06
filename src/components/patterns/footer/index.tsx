import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { Box, Flex, VStack, HStack, Link, useTheme } from "@chakra-ui/react"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import { ISocialMediaLinks } from "@src/@interfaces"
import { useStaticQuery, graphql } from "gatsby"
import {
  Container,
  Column,
  Row,
  ListOfLinks as Navigation,
  Text,
} from "@src/components"
import Img from "gatsby-image"

type IconLinkType = React.ReactElement | string

const Footer: React.FC = () => {
  const { colors } = useTheme()
  const intl = useIntl()

  const data = useStaticQuery(graphql`
    query Footer {
      footerJson {
        copyright
        footerLinks {
          asButton
          href
          isExternal
          text
        }
        companyMission
        companyLogo {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        socialMedia {
          id
          socialMediaUrl
        }
      }
    }
  `)

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
    <Box bgColor={`${colors.neutral[100]}`} py={9}>
      <Container>
        <Row>
          <Column>
            <Flex justify="space-between">
              <Box>
                {data.companyLogo && (
                  <Img
                    fluid={data.footerJson.companyLogo.childImageSharp.fluid}
                  />
                )}
              </Box>
              <Box>
                <Text type="subtitle.medium">
                  {intl.formatMessage({
                    id: `${data.footerJson.companyMission}`,
                  })}
                </Text>
              </Box>
            </Flex>
          </Column>
        </Row>
        <Row>
          <Column>
            <Box mt={9} borderTop={`1px solid ${colors.neutral[300]}`}>
              <Flex justify="space-between">
                <HStack>
                  <Navigation content={data.footerJson.footerLinks} />
                </HStack>
                <HStack>
                  {data.footerJson.socialMedia.map(
                    (link: ISocialMediaLinks) => {
                      return (
                        <Link key={link.id} pr={4} href={link.href}>
                          {displaySocialIcon(link.id)}
                        </Link>
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
  )
}

export default Footer
