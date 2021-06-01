import React from "react"
import { useIntl } from "gatsby-plugin-react-intl"
import {
  BillBoardBaseProps,
  LinkProps,
  ChildImageSharpProps,
  Billboard,
  Slice,
  Text,
  ListOfLinks,
  SectionBox,
} from "@src/components"
import Img from "gatsby-image"

import { GridItem } from "@chakra-ui/react"

export interface BillboardModelProps extends BillBoardBaseProps {
  content: string
  callToAction: LinkProps[]
  image?: ChildImageSharpProps
  highSaturatedBgColor?: boolean
}

interface BillBoardSection {
  data: BillboardModelProps
}

export const BillboardSection: React.FC<BillBoardSection> = ({ data }) => {
  const intl = useIntl()
  return (
    <SectionBox withContainer contentType="section">
      <Billboard
        headline={intl.formatMessage({ id: `${data.headline}` })}
        caption={intl.formatMessage({ id: `${data.caption}` })}
      >
        <Slice __TYPE="body">
          <Text type="introduction">
            {intl.formatMessage({ id: `${data.content}` })}
          </Text>
          <ListOfLinks content={data.callToAction} />
        </Slice>
        <Slice __TYPE="media">
          <GridItem width="100%">
            {data.image && (
              <Img
                fluid={data.image.childImageSharp.fluid}
                alt="billboard Image"
              />
            )}
          </GridItem>
        </Slice>
      </Billboard>
    </SectionBox>
  )
}
