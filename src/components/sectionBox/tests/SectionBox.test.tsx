import React from "react"
import { screen } from "@testing-library/react"
import { render, testA11y } from "@src/tests"
import { SectionBox } from "@src/components"
import { Text } from "@chakra-ui/react"

const content = {
  text: "SectionBox is awesome",
}

describe("SectionBox", () => {
  describe("test accessibility", () => {
    it("passes a11y test when section is an Header", () => {
      testA11y(
        <SectionBox contentType="header">
          <Text>{content.text}</Text>
        </SectionBox>
      )
    })

    it("passes a11y test when section is a Footer", () => {
      testA11y(
        <SectionBox contentType="footer">
          <Text>{content.text}</Text>
        </SectionBox>
      )
    })

    it("passes a11y test when section is main", () => {
      testA11y(
        <SectionBox contentType="main">
          <Text>{content.text}</Text>
        </SectionBox>
      )
    })

    it("passes a11y test when section is a section", () => {
      testA11y(
        <SectionBox contentType="section">
          <Text>{content.text}</Text>
        </SectionBox>
      )
    })
  })

  test("should render an header", () => {
    render(
      <SectionBox contentType="header">
        <Text>{content.text}</Text>
      </SectionBox>
    )

    expect(screen.getByRole("banner")).toBeInTheDocument()
    expect(screen.getByText(content.text)).toBeInTheDocument()
  })

  describe("test render component", () => {
    test("should render a Footer", () => {
      render(
        <SectionBox contentType="footer">
          <Text>{content.text}</Text>
        </SectionBox>
      )

      expect(screen.getByRole("contentinfo")).toBeInTheDocument()
      expect(screen.getByText(content.text)).toBeInTheDocument()
    })

    test("should render main", () => {
      render(
        <SectionBox contentType="main">
          <Text>{content.text}</Text>
        </SectionBox>
      )

      expect(screen.getByRole("main")).toBeInTheDocument()
      expect(screen.getByText(content.text)).toBeInTheDocument()
    })

    test("should render section", () => {
      render(
        <SectionBox contentType="section">
          <Text>{content.text}</Text>
        </SectionBox>
      )

      expect(screen.getByText(content.text)).toBeInTheDocument()
    })
  })
})
