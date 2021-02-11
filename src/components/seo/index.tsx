import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import { Facebook, Twitter } from "./socialMedia"

export interface SeoProps {
  title?: string
  banner?: string
  description?: string
  pathName?: string
  type?: string
  keywords?: string
}

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        siteUrl
        defaultTitle: title
        defaultDescription: description
        defaultBanner: banner
        language
        pagekeywords: keywords
        ogLanguage
        author
        twitter
        facebook
      }
    }
  }
`
export const SEO: React.FC<SeoProps> = ({
  title,
  description,
  banner,
  pathName,
  type,
  keywords,
}) => {
  const { site } = useStaticQuery(query)

  const {
    siteMetadata: {
      siteUrl,
      defaultTitle,
      defaultDescription,
      defaultBanner,
      pageKeywords,
      language,
      ogLanguage,
      twitter,
      facebook,
    },
  } = site

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}/${banner || defaultBanner}`,
    keywords: keywords || pageKeywords,
    url: `${siteUrl}/${pathName || ""}`,
  }

  return (
    <>
      <Helmet title={seo.title}>
        <html lang={language} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name="gatsby-starter" content="Gatsby Starter Prismic" />
        <meta name="keywords" content={seo.keywords} />
        {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
      </Helmet>
      {/* Social Media markups */}
      <Facebook
        desc={seo.description}
        image={seo.image}
        title={seo.title}
        type={type ? `${type}` : "website"}
        url={seo.url}
        locale={ogLanguage}
        name={facebook}
      />
      <Twitter
        title={seo.title}
        image={seo.image}
        desc={seo.description}
        username={twitter}
      />
    </>
  )
}

export default SEO
