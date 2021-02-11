import React from "react"
import { ILink } from "@src/@interfaces"
import { Flex, Box, BoxProps, useMediaQuery } from "@chakra-ui/react"

import {
  Container,
  Column,
  Row,
  Link,
  HamburgerButton,
  ListOfLinks as Navigation,
} from "@src/components"

export interface HeaderProps extends BoxProps {
  logo: string
  content?: ILink[]
  bgColorType?: string
  bgColorWithHighSaturation?: boolean
}

export const Header: React.FC<HeaderProps> = ({
  content,
  logo,
  bgColor,
  bgColorWithHighSaturation,
}) => {
  const [isDesktop] = useMediaQuery("(min-width: 992px")

  if (content === undefined) {
    return (
      <Box
        as="header"
        bgColor={bgColor !== undefined ? bgColor : "#fff"}
        role="banner"
        py={2}
      >
        <Container>
          <Row>
            <Column col={["sm4", "md6", "lg12"]}>
              <Flex
                justify="center"
                as="nav"
                role="navigation"
                alignItems="center"
                my={2}
              >
                <Link href="/">
                  <img src={logo} alt="logo" />
                </Link>
              </Flex>
            </Column>
          </Row>
        </Container>
      </Box>
    )
  }
  return (
    <Box
      as="header"
      role="banner"
      bgColor={bgColor !== undefined ? bgColor : "#fff"}
      py={2}
    >
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
                <Navigation
                  bgColorWithHighSaturation={bgColorWithHighSaturation}
                  alignNavigation="right"
                  content={content}
                />
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
