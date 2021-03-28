import React from "react"
import { build, fake } from "@jackfranklin/test-data-bot"
import { render, testA11y, screen } from "@src/tests"
import { Billboard, Slice } from "@src/components"
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
const fakeSliceMedia = fakeBillboardContent.sliceMedia as string
const fakeSliceFooter = fakeBillboardContent.sliceFooter as string

describe("Billboard", () => {
  it("passes a11y test", async () => {
    await testA11y(
      <Billboard headline={fakeHeadline}>
        <Slice __TYPE="body">
          <Text type="subtitle.medium">{fakeSliceBody}</Text>
        </Slice>
        <Slice __TYPE="media">
          <GridItem>
            <Text>{fakeSliceMedia}</Text>
          </GridItem>
        </Slice>
        <Slice __TYPE="footer">
          <Text type="subtitle.medium">{fakeSliceFooter}</Text>
        </Slice>
      </Billboard>
    )
  })

  it("renders a Billboard with a caption and headline", () => {
    render(<Billboard caption={fakeCaption} headline={fakeHeadline} />)

    expect(screen.getByText(fakeCaption)).toBeInTheDocument()
    expect(screen.getByText(fakeHeadline)).toBeInTheDocument()
  })

  it("renders a Billboard with a headline, and slices (body, media and footer)", () => {
    render(
      <Billboard headline={fakeHeadline}>
        <Slice __TYPE="body">
          <Text type="subtitle.medium">{fakeSliceBody}</Text>
        </Slice>
        <Slice __TYPE="media">
          <GridItem>
            <Text>{fakeSliceMedia}</Text>
          </GridItem>
        </Slice>
        <Slice __TYPE="footer">
          <Text type="subtitle.medium">{fakeSliceFooter}</Text>
        </Slice>
      </Billboard>
    )

    expect(screen.getByText(fakeHeadline)).toBeInTheDocument()
    expect(screen.getByText(fakeSliceBody)).toBeInTheDocument()
    expect(screen.getByText(fakeSliceMedia)).toBeInTheDocument()
    expect(screen.getByText(fakeSliceFooter)).toBeInTheDocument()
  })
})
