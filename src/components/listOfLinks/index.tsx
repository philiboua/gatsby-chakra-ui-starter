import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { List, ListItem } from "@chakra-ui/react"
import { ILink, IListOfLinks } from "@src/@interfaces"
import { Link } from "@src/components"

interface NavigationProps extends IListOfLinks {
  alignNavigation?: string
}

export const ListOfLinks: React.FC<NavigationProps> = ({
  content,
  alignNavigation,
  bgColorWithHighSaturation,
  ...props
}) => {
  const intl = useIntl()

  const displayList = content
    ? content.map((link: ILink) => {
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
              {intl.formatMessage({ id: `${link.text}` })}
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
