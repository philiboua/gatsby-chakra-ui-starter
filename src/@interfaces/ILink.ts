import { LinkProps } from "@chakra-ui/react"
import { IGatsbyLinkAsButton } from "./IGatsbyLinkAsButton"

export interface ILink extends IGatsbyLinkAsButton, LinkProps {
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
}
