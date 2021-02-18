import React from "react"

import { graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import { Box } from "@chakra-ui/react"
import { bgWithHightSaturation } from "@src/contexts"

import logoCompany from "@images/logo-1.svg"

import {
  Container,
  Header,
  SEO,
  Billboard,
  Features,
  Feature,
  CardContainer,
  Row,
  Column,
  Article,
  Text,
  Footer,
  LinkProps,
  FeatureProps,
  BillBoardProps,
  CardProps,
  SocialMediaLinksProps,
} from "@src/components"

interface IPageQuery {
  data: {
    homepageJson: {
      billboard: BillBoardProps
      features: FeatureProps[]
      cards: CardProps[]
    }
    allNavigationJson: {
      nodes: LinkProps[]
    }
    footerJson: {
      companyMission: string
      copyright: string
      footerLinks: LinkProps[]
      socialMedia: SocialMediaLinksProps[]
    }
  }
}

const Home: React.FC<IPageQuery> = ({ data }) => {
  const intl = useIntl()

  const {
    caption,
    headline,
    content,
    callToAction,
    image,
  } = data.homepageJson.billboard

  return (
    <>
      <SEO />
      <Header
        bgColor="#000"
        highSaturatedBgColor
        logo={logoCompany}
        content={data.allNavigationJson.nodes}
      />
      <Box as="main" role="main">
        <Billboard
          bgColor="#000"
          highSaturatedBgColor
          caption={intl.formatMessage({ id: `${caption}` })}
          headline={intl.formatMessage({ id: `${headline}` })}
          content={intl.formatMessage({ id: `${content}` })}
          callToAction={callToAction}
          image={image}
        />
      </Box>
      <bgWithHightSaturation.Provider value>
        <Box as="section" bgColor="#000" py={{ md: 16 }} px={{ md: 8 }}>
          <Container>
            <Features data={data.homepageJson.features} />
            <Feature
              reverseGridItemsOrder
              featureImage={data.homepageJson.features[0].featureImage}
              headline={data.homepageJson.features[0].headline}
              content={data.homepageJson.features[0].content}
              caption={data.homepageJson.features[0].caption}
            />
          </Container>
        </Box>
      </bgWithHightSaturation.Provider>

      <Box as="section" bgColor="#000" id="specifications" py={40}>
        <Container>
          <Row>
            <Column>
              <Article centerContent py={28}>
                <Text color="white" type="headline.medium" textAlign="center">
                  A better way to send money
                </Text>
                <Text color="white" type="body.medium">
                  This is to display a card container{" "}
                </Text>
              </Article>
            </Column>
          </Row>
          <Row wrap="wrap">
            <CardContainer content={data.homepageJson.cards} />
          </Row>
        </Container>
      </Box>
      <Box as="footer" role="contentinfo">
        <Footer
          bgColor="#000"
          highSaturatedBgColor
          logo={logoCompany}
          content={data.footerJson}
        />
      </Box>
    </>
  )
}

export const query = graphql`
  query Homepage {
    allNavigationJson {
      nodes {
        href
        isExternal
        text
        asButton
      }
    }
    homepageJson(billboard: {}) {
      billboard {
        caption
        content
        headline
        backgroundImage
        videoBackground
        callToAction {
          asButton
          href
          isExternal
          text
        }
        image {
          childImageSharp {
            fluid {
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        }
      }
      cards {
        id
        mediaType
        link {
          text
          asButton
          href
          isExternal
        }
        media {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        body
        headline
      }
      features {
        id
        caption
        content
        headline
        link
        featureImage {
          childImageSharp {
            fluid {
              aspectRatio
              base64
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
    footerJson {
      copyright
      footerLinks {
        asButton
        href
        isExternal
        text
      }
      companyMission
      socialMedia {
        id
        socialMediaUrl
      }
    }
  }
`

export default Home
