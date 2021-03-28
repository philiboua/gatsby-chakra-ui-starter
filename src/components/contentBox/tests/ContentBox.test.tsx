import React from "react"
import { screen } from "@testing-library/react"
import { Text, Box } from "@chakra-ui/react"
import { render, testA11y } from "@src/tests"
import { ContentBox } from "@src/components"

describe("ContentBox", () => {
  it("passes a11y test", async () => {
    await testA11y(
      <ContentBox>
        <Text>Chakra UI is great</Text>
      </ContentBox>
    )
  })

  it("renders some content", () => {
    render(
      <ContentBox>
        <Text>Lorem ipsum lorem</Text>
      </ContentBox>
    )

    expect(screen.getByText("Lorem ipsum lorem")).toBeInTheDocument()
  })

  it("passes a11y test when background color is saturated", async () => {
    await testA11y(
      <Box bg="#000">
        <ContentBox>
          <Text>Chakra UI is great</Text>
        </ContentBox>
      </Box>
    )
  })

  it("renders some content with a high contrasted background", () => {
    render(
      <Box bg="#000">
        <ContentBox>
          <Text>Chakra UI is great</Text>
        </ContentBox>
      </Box>
    )

    expect(screen.getByText("Chakra UI is great")).toBeInTheDocument()
  })
})
