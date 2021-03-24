import React from "react"
import { graphql } from "gatsby"
import logoCompany from "@images/logo-1.svg"
import video from "@static/videos/sample-beach.mp4"
import { SEO, SectionBox, VideoBox, LayoutVideoAlpha } from "@src/components"
import { Box } from "@chakra-ui/react"
import {
  FeatureModel,
  FeaturesSection,
  BillboardSection,
  BillboardModelProps,
  CardSection,
  CardModel,
} from "@src/pages-sections/homepage"
import {
  FooterSection,
  FooterModelBase,
  HeaderSection,
  HeaderModelProps,
} from "@src/pages-sections/shared"

interface IPageQuery {
  data: {
    homepageJson: {
      billboard: BillboardModelProps
      features: FeatureModel[]
      cards: CardModel[]
    }
    allNavigationJson: HeaderModelProps
    footerJson: FooterModelBase
  }
}

const Home: React.FC<IPageQuery> = ({ data }) => {
  return (
    <>
      <SEO />
      <HeaderSection
        nodes={data.allNavigationJson.nodes}
        logo={logoCompany}
        altLogo="Brand Logo"
      />
      <SectionBox contentType="main">
        <BillboardSection data={data.homepageJson.billboard} />
        <FeaturesSection data={data.homepageJson.features} />
        <CardSection data={data.homepageJson.cards} />
        <SectionBox contentType="section">
          <Box>
            <VideoBox
              loop
              videoMp4SrcURL={video}
              height="500px"
              width="100%"
              borderRadius="sm"
            >
              <LayoutVideoAlpha />
            </VideoBox>
          </Box>
        </SectionBox>
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
