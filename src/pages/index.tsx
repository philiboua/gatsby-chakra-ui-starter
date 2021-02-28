import React from "react"

import { graphql } from "gatsby"

import { useIntl } from "gatsby-plugin-intl"
import { Box } from "@chakra-ui/react"

import logoCompany from "@images/logo-1.svg"

import {
  Header,
  SEO,
  Billboard,
  Footer,
  LinkProps,
  BillBoardProps,
  SocialMediaLinksProps,
} from "@src/components"

import {
  FeatureModel,
  FeaturesSection,
  CardSection,
  CardModel,
} from "@src/pages-sections/homepage"

interface IPageQuery {
  data: {
    homepageJson: {
      billboard: BillBoardProps
      features: FeatureModel[]
      cards: CardModel[]
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
      <FeaturesSection data={data.homepageJson.features} />
      <CardSection data={data.homepageJson.cards} />

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
