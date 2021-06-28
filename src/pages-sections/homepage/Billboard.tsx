import React from "react"
import { useIntl } from "gatsby-plugin-react-intl"
import {
  BillBoardBaseProps,
  LinkProps,
  ChildImageSharpProps,
  Billboard,
  SectionBox,
  ViewFactory,
  billboardViews,
  Text,
  Slice,
} from "@src/components"

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
        <ViewFactory type="alpha" views={billboardViews}>
          <Slice __TYPE="body">
            <Text type="headline.small">hello world</Text>
          </Slice>
        </ViewFactory>
      </Billboard>
    </SectionBox>
  )
}
