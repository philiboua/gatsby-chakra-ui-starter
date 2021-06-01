/*
  Purpose : Link component is used to navigate within the website 
  Implementation : 
    - When link is external we are using Chakra UI Link component
    - When link is within the site, we are wrapping Gatsby link with Chakra UI link 
  Design : 
    - default design is a regular link 
    - when props asButton and sizeButton are added to component, we display link as Button 

*/
import React, { useContext } from "react"
import { Link as GatsbyLink } from "gatsby-plugin-react-intl"
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  useTheme,
} from "@chakra-ui/react"
import { ExternalLinkIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { bgWithHightSaturation } from "@src/contexts"
import GatsbyLinkAsButton, {
  GatsbyLinkAsButtonProps,
} from "./GatsbyLinkAsButton"

export interface LinkProps extends GatsbyLinkAsButtonProps, ChakraLinkProps {
  /**
   * displays the link as button
   */
  asButton?: boolean
  /**
   * When true an icon will be added on the right of the link and the page will be open in a separate tab
   */
  isExternal?: boolean
  /**
   * content the link will display
   */
  text?: string
  /**
   * link can be relative ex: "/contact" or external ex: "https://www.gatsbyjs.com/".
   * In case we display an external link, do not forget to set the prop isExternal to true
   */
  href: string
  /**
   * an arrow icon will be display if true. Mostly used in card and feature patterns
   */
  displayRightArrow?: boolean
  bgColorWithHighSaturation?: boolean
}

export const Link: React.FC<LinkProps> = ({
  text,
  displayRightArrow,
  href,
  isExternal,
  asButton,
  sizeButton,
  children,
  ...restProps
}) => {
  // Get chakra ui theme object
  const { colors } = useTheme()

  // Get bg color type
  const bgColorWithHighSaturation = useContext(bgWithHightSaturation)

  // displays link as button
  if (asButton) {
    return (
      <GatsbyLinkAsButton
        bgColorWithHighSaturation={bgColorWithHighSaturation}
        href={href}
        sizeButton={sizeButton}
      >
        {children}
      </GatsbyLinkAsButton>
    )
  }
  // displays as link
  return (
    <ChakraLink
      color={bgColorWithHighSaturation ? "#fff" : `${colors.gamma.neutralDark}`}
      display={isExternal || displayRightArrow ? "flex" : "block"}
      alignItems={isExternal || displayRightArrow ? "center" : ""}
      activeStyle={{
        color: bgColorWithHighSaturation ? "#fff" : colors.gamma.neutralDark,
        fontWeight: "bold",
      }}
      {...(isExternal ? { href } : { as: GatsbyLink, to: href })}
      {...restProps}
    >
      {children}
      {isExternal && <ExternalLinkIcon ml={1} />}
      {displayRightArrow && <ChevronRightIcon />}
    </ChakraLink>
  )
}

export default Link
