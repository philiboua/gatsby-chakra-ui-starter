import React from "react"
import { IListOfLinks } from "@src/@interfaces"
import { Flex, Box, useMediaQuery } from "@chakra-ui/react"

import {
  Container,
  Column,
  Row,
  Link,
  HamburgerButton,
  ListOfLinks as Navigation,
} from "@src/components"

import logo from "@images/logo-1.svg"

import { useStaticQuery, graphql } from "gatsby"

const Header: React.FC<IListOfLinks> = ({ content }) => {
  const [isDesktop] = useMediaQuery("(min-width: 992px")
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allNavigationJson {
        nodes {
          href
          isExternal
          text
          asButton
        }
      }
    }
  `)
  return (
    <Box as="header" role="banner" py={2}>
      <Container>
        <Row>
          <Column col={["sm4", "md6", "lg12"]}>
            <Flex
              justify="space-between"
              as="nav"
              role="navigation"
              alignItems="center"
              my={2}
            >
              <Link href="/">
                <img src={logo} alt="logo" />
              </Link>

              {isDesktop ? (
                <Navigation content={data.allNavigationJson.nodes} />
              ) : (
                <HamburgerButton ariaLabel="Navigation menu" menuLabel="Menu" />
              )}
            </Flex>
          </Column>
        </Row>
      </Container>
    </Box>
  )
}

export default Header
