import React from "react"
import { build, fake } from "@jackfranklin/test-data-bot"
import { render, testA11y, screen } from "@src/tests"
import { Billboard, Slice, ViewFactory, billboardViews } from "@src/components"
import { Text, GridItem } from "@chakra-ui/react"

const BillboardBuilder = build("Billboard", {
  fields: {
    caption: fake(f => f.lorem.words()),
    headline: fake(f => f.lorem.sentence()),
    sliceBody: fake(f => f.lorem.sentence()),
    sliceMedia: fake(f => f.lorem.sentence()),
    sliceFooter: fake(f => f.lorem.sentence()),
  },
})

const fakeBillboardContent = BillboardBuilder()

const fakeCaption = fakeBillboardContent.caption as string
const fakeHeadline = fakeBillboardContent.headline as string
const fakeSliceBody = fakeBillboardContent.sliceBody as string

describe("Billboard", () => {
  it("passes a11y test", async () => {
    await testA11y(
      <Billboard headline={fakeHeadline} caption={fakeCaption}>
        <ViewFactory type="alpha" views={billboardViews}>
          <Slice __TYPE="body">
            <Text type="headline.small">{fakeSliceBody}</Text>
          </Slice>
        </ViewFactory>
      </Billboard>
    )
  })

  it("renders a Billboard with a caption and headline", () => {
    render(
      <Billboard headline={fakeHeadline} caption={fakeCaption}>
        <ViewFactory type="alpha" views={billboardViews}>
          <Slice __TYPE="body">
            <Text type="headline.small">{fakeSliceBody}</Text>
          </Slice>
        </ViewFactory>
      </Billboard>
    )

    expect(screen.getByText(fakeCaption)).toBeInTheDocument()
    expect(screen.getByText(fakeHeadline)).toBeInTheDocument()
  })

  it("renders a Billboard with a headline, and slices (body, media and footer)", () => {
    render(
      <Billboard headline={fakeHeadline} caption={fakeCaption}>
        <ViewFactory type="alpha" views={billboardViews}>
          <Slice __TYPE="body">
            <Text type="headline.small">{fakeSliceBody}</Text>
          </Slice>
        </ViewFactory>
      </Billboard>
    )

    expect(screen.getByText(fakeHeadline)).toBeInTheDocument()
    expect(screen.getByText(fakeSliceBody)).toBeInTheDocument()
  })
})
