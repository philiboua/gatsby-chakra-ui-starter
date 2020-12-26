import React from "react"
import { graphql } from "gatsby"
import Header from "@components/patterns/header"
import { ILink } from "@src/@interfaces"
import SEO from "@src/components/seo"
import { Box } from "@chakra-ui/react"
import Billboard from "@components/patterns/billboard"

interface IBillboard {
  caption: string
  content: string
  headline: string
  callToAction: ILink[]
}

interface IPageQuery {
  data: {
    homepageJson: {
      billboard: {
        caption: string
        content: string
        headline: string
        callToAction: ILink[]
        billboardImage: {
          childImageSharp: {
            fluid: {
              aspectRatio: number
              base64: string
              src: string
              srcSet: string
              sizes: string
            }
          }
        }
      }
    }
    allNavigationJson: {
      nodes: ILink[]
    }
  }
}

const Home: React.FC<IPageQuery> = ({ data }) => {
  const {
    caption,
    headline,
    content,
    callToAction,
    billboardImage,
  } = data.homepageJson.billboard

  return (
    <>
      <SEO />
      <Header />
      <Box as="main" role="main" bg="#c6e3e9">
        <Billboard
          caption={caption}
          headline={headline}
          content={content}
          callToAction={callToAction}
          image={billboardImage.childImageSharp}
        />
      </Box>
      <Box as="footer" role="contentinfo">
        <div>Text</div>
      </Box>
    </>
  )
}

export const query = graphql`
  query Navigation {
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
        billboardImage {
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
    }
  }
`

export default Home
