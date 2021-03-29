import React from "react"
import { render, screen, testA11y } from "@src/tests"
import { Text } from "@src/components"

describe("Text", () => {
  describe("accessibility tests", () => {
    it("passes a11y test: headline.large", async () => {
      await testA11y(<Text type="headline.large">Hello there</Text>)
    })

    it("passes a11y test: headline.medium", async () => {
      await testA11y(<Text type="headline.medium">Hello there</Text>)
    })

    it("passes a11y test: headline.small", async () => {
      await testA11y(<Text type="headline.small">Hello there</Text>)
    })

    it("passes a11y test: introduction", async () => {
      await testA11y(<Text type="introduction">Hello there</Text>)
    })

    it("passes a11y test: body.medium", async () => {
      await testA11y(<Text type="body.medium">Hello there</Text>)
    })

    it("passes a11y test: body.small", async () => {
      await testA11y(<Text type="body.small">Hello there</Text>)
    })

    it("passes a11y test: subtitle.medium", async () => {
      await testA11y(<Text type="subtitle.medium">Hello there</Text>)
    })

    it("passes a11y test: subtitle.small", async () => {
      await testA11y(<Text type="subtitle.small">Hello there</Text>)
    })

    it("passes a11y test: caption", async () => {
      await testA11y(<Text type="caption">Hello there</Text>)
    })

    it("passes a11y test: legal", async () => {
      await testA11y(<Text type="legal">Hello there</Text>)
    })
  })

  describe("Text component renders an Heading or Paragraph", () => {
    test("should render a Heading: headline.large", () => {
      const { rerender } = render(
        <Text type="headline.large">Hello there</Text>
      )

      expect(screen.getByText("Hello there")).toBeInTheDocument()
      expect(screen.getByText("Hello there").tagName).toBe("H1")

      rerender(<Text type="headline.medium">Hello there</Text>)
      expect(screen.getByText("Hello there")).toBeInTheDocument()
      expect(screen.getByText("Hello there").tagName).toBe("H2")

      rerender(<Text type="headline.small">Hello there</Text>)
      expect(screen.getByText("Hello there")).toBeInTheDocument()
      expect(screen.getByText("Hello there").tagName).toBe("H3")

      rerender(<Text type="subtitle.medium">Hello there</Text>)
      expect(screen.getByText("Hello there")).toBeInTheDocument()
      expect(screen.getByText("Hello there").tagName).toBe("H3")

      rerender(<Text type="subtitle.small">Hello there</Text>)
      expect(screen.getByText("Hello there")).toBeInTheDocument()
      expect(screen.getByText("Hello there").tagName).toBe("H4")

      rerender(<Text type="introduction">Hello there</Text>)
      expect(screen.getByText("Hello there")).toBeInTheDocument()
      expect(screen.getByText("Hello there").tagName).toBe("P")

      rerender(<Text type="body.medium">Hello there</Text>)
      expect(screen.getByText("Hello there")).toBeInTheDocument()
      expect(screen.getByText("Hello there").tagName).toBe("P")

      rerender(<Text type="body.small">Hello there</Text>)
      expect(screen.getByText("Hello there")).toBeInTheDocument()
      expect(screen.getByText("Hello there").tagName).toBe("P")

      rerender(<Text type="caption">Hello there</Text>)
      expect(screen.getByText("Hello there")).toBeInTheDocument()
      expect(screen.getByText("Hello there").tagName).toBe("P")

      rerender(<Text type="legal">Hello there</Text>)
      expect(screen.getByText("Hello there")).toBeInTheDocument()
      expect(screen.getByText("Hello there").tagName).toBe("P")
    })
  })
})
