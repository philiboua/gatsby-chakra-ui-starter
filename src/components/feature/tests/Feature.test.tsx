import React from "react"
import { screen } from "@testing-library/react"
import { testA11y, render } from "@src/tests"
import { Text } from "@chakra-ui/react"
import { Feature, Slice } from "@src/components"

describe("Feature", () => {
  const feature = {
    headline: "Product comes with a great feature",
    sliceBody: "I am inside the sliceBody",
    sliceMedia: "I am inside the sliceMedia",
  }

  it("passes a11y test", () => {
    testA11y(<Feature headline={feature.headline} />)
  })

  test("Feature should render headline, a sliceBody and sliceMedia", () => {
    render(
      <Feature headline={feature.headline}>
        <Slice __TYPE="body">
          <Text>{feature.sliceBody}</Text>
        </Slice>
        <Slice __TYPE="media">
          <Text>{feature.sliceMedia}</Text>
        </Slice>
      </Feature>
    )

    expect(screen.getByText(feature.headline)).toBeInTheDocument()
    expect(screen.getByText(feature.sliceBody)).toBeInTheDocument()
    expect(screen.getByText(feature.sliceMedia)).toBeInTheDocument()
  })
})
