const path = require("path")
const website = require("./config/website")

module.exports = {
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    title: website.siteTitle,
    titleAlt: website.siteTitleAlt,
    description: website.siteDescription,
    keywords: website.siteKeywords,
    banner: website.siteLogo,
    canonicalURL: website.siteUrl,
    siteUrl: website.siteUrl,
    language: website.siteLang,
    ogLanguage: website.siteOgLanguage,
    twitter: website.twitter,
    facebook: website.facebook,
    author: website.author,
    navigation: website.navigation,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-react-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/locales`,
        // supported language
        languages: [`en`, `fr`],
        ignoredPaths: ["/app/**"],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true,
      },
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        "@static": path.join(__dirname, "static"),
        "@src": path.join(__dirname, "src"),
        "@components": path.join(__dirname, "src/components"),
        "@assets": path.join(__dirname, "src/assets"),
        "@images": path.join(__dirname, "src/assets/images"),
        "@pages": path.join(__dirname, "src/pages"),
      },
    },
  ],
}
