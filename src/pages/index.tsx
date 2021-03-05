import React from "react"

import { graphql } from "gatsby"

import { Box } from "@chakra-ui/react"

import logoCompany from "@images/logo-1.svg"

import { Header, SEO, Footer, LinkProps, SectionBox } from "@src/components"

import {
  FeatureModel,
  FeaturesSection,
  BillboardSection,
  BillboardModelProps,
  CardSection,
  CardModel,
} from "@src/pages-sections/homepage"
import { FooterSection, FooterModelBase } from "@src/pages-sections/shared"

interface IPageQuery {
  data: {
    homepageJson: {
      billboard: BillboardModelProps
      features: FeatureModel[]
      cards: CardModel[]
    }
    allNavigationJson: {
      nodes: LinkProps[]
    }
    footerJson: FooterModelBase
  }
}

const Home: React.FC<IPageQuery> = ({ data }) => {
  return (
    <>
      <SEO />
      <Header
        bgColor="#000"
        highSaturatedBgColor
        logo={logoCompany}
        content={data.allNavigationJson.nodes}
      />
      <SectionBox contentType="main">
        <BillboardSection data={data.homepageJson.billboard} />
        <FeaturesSection data={data.homepageJson.features} />
        <CardSection data={data.homepageJson.cards} />
      </SectionBox>
      <FooterSection
        socialMedia={data.footerJson.socialMedia}
        copyright={data.footerJson.copyright}
        logo={logoCompany}
        footerLinks={data.footerJson.footerLinks}
        companyMission={data.footerJson.companyMission}
      />
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
