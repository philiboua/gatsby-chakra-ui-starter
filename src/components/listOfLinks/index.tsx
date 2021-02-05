import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { List, ListItem } from "@chakra-ui/react"
import { ILink, IListOfLinks } from "@src/@interfaces"
import { Link } from "@src/components"

const ListOfLinks: React.FC<IListOfLinks> = ({ content, ...props }) => {
  const intl = useIntl()
  const displayList = content
    ? content.map((link: ILink) => {
        return (
          <ListItem key={link.href}>
            <Link
              fontSize="body.medium"
              isExternal={link.isExternal}
              asButton={link.asButton}
              href={link.href}
              ml={8}
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
