import React from "react"
import {
  Header,
  SectionBox,
  LinkProps,
  HeaderBaseProps,
  Slice,
  ListOfLinks as Navigation,
  HamburgerButton,
} from "@src/components"
import { GridItem, useMediaQuery } from "@chakra-ui/react"

export interface HeaderModelProps {
  nodes?: LinkProps[]
}

type HeaderSectionProps = HeaderModelProps & HeaderBaseProps

export const HeaderSection: React.FC<HeaderSectionProps> = ({
  logo,
  altLogo,
  nodes,
}) => {
  const [isDesktop] = useMediaQuery("(min-width: 992px")

  return (
    <SectionBox contentType="header" withContainer>
      <Header altLogo={altLogo} logo={logo}>
        <Slice __TYPE="navigation">
          <GridItem display="grid" justifyItems="end">
            {isDesktop ? (
              <Navigation alignNavigation="right" content={nodes} />
            ) : (
              <HamburgerButton ariaLabel="Navigation menu" menuLabel="Menu" />
            )}
          </GridItem>
        </Slice>
      </Header>
    </SectionBox>
  )
}
