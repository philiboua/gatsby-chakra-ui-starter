import React from "react"
import { Helmet } from "react-helmet"

export interface FacebookSeoProps {
  url: string
  title: string
  desc: string
  image: string
  locale: string
  name?: string
  type?: string
}

export const Facebook: React.FC<FacebookSeoProps> = ({
  url,
  name,
  type,
  title,
  desc,
  image,
  locale,
}) => (
  <Helmet>
    <meta property="og:locale" content={locale} />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={desc} />
    <meta property="og:image" content={image} />
    <meta property="og:image:alt" content={desc} />
    {name && <meta property="og:site_name" content={name} />}
    {type && <meta property="og:type" content={type} />}
  </Helmet>
)

export default Facebook
