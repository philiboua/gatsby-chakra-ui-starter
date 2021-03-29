import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { List, ListItem } from "@chakra-ui/react"
import { Link, LinkProps } from "@src/components"

export interface ListOfLinksProps {
  alignNavigation?: string
  /**
   * Array of Link components
   */
  content?: LinkProps[]
  bgColorWithHighSaturation?: boolean
}

export const ListOfLinks: React.FC<ListOfLinksProps> = ({
  content,
  alignNavigation,
  bgColorWithHighSaturation,
  ...props
}) => {
  const displayList = content
    ? content.map((link: LinkProps) => {
        return (
          <ListItem key={link.href}>
            <Link
              bgColorWithHighSaturation={bgColorWithHighSaturation}
              fontSize="body.medium"
              isExternal={link.isExternal}
              asButton={link.asButton}
              href={link.href}
              ml={alignNavigation === "left" ? 0 : 8}
              mr={alignNavigation === "right" ? 0 : 8}
            >
              {link.text}
            </Link>
          </ListItem>
        )
      })
    : ""

  return (
    <List display="flex" alignItems="center" {...props}>
      {displayList}
    </List>
  )
}

export default ListOfLinks
