import React from "react"
import { screen, render, testA11y } from "@src/tests"
import { GatsbyLinkProps } from "gatsby"
import { Link } from "../Link"

type GatsbyAnchorProps = {
  isExternal: boolean
  href: string
} & Omit<GatsbyLinkProps<unknown>, "to">

/** mock current link implementation  */
jest.mock("../Link", () => {
  const ReactModule = require("react")
  const { Link: GLink } = require("gatsby")
  return {
    Link: jest
      .fn()
      .mockImplementation(
        ({ isExternal = false, href, ...rest }: GatsbyAnchorProps) => {
          if (isExternal) {
            return ReactModule.createElement("a", {
              ...rest,
              href,
              target: isExternal ? "_blank" : "",
            })
          }

          return ReactModule.createElement(GLink, {
            ...rest,
            to: href,
          })
        }
      ),
  }
})

describe("Link", () => {
  describe("accessibility tests", () => {
    it("passes a11y test: internal page", async () => {
      await testA11y(<Link href="en/page-2">Click me!</Link>)
    })

    it("passes a11y test: external page", async () => {
      await testA11y(
        <Link isExternal href="https://www.google.com/">
          Click me
        </Link>
      )
    })
  })

  describe("Link: DOM and UI tests", () => {
    test("should render render a link: internal page", () => {
      render(<Link href="en/page-2">Click me!</Link>)

      expect(screen.getByText("Click me!")).toBeInTheDocument()
      expect(screen.getByRole("link")).toHaveAttribute("href", "en/page-2")
    })

    test("should render render a link: external page", () => {
      render(
        <Link isExternal href="https://www.google.com/">
          Click me!
        </Link>
      )

      expect(screen.getByText("Click me!")).toBeInTheDocument()
      expect(screen.getByRole("link")).toHaveAttribute(
        "href",
        "https://www.google.com/"
      )
      expect(screen.getByRole("link")).toHaveAttribute("target", "_blank")
    })
  })
})
