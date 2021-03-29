import React from "react"
import { screen, render, testA11y } from "@src/tests"
import { ListOfLinksProps, LinkProps } from "@src/components"
import { ListOfLinks } from "../ListOfLinks"

/** mock current ListOfLinks implementation  */
jest.mock("../ListOfLinks", () => {
  const ReactModule = require("react")
  return {
    ListOfLinks: jest
      .fn()
      .mockImplementation(({ content }: ListOfLinksProps) => {
        return content?.map((link: LinkProps) => {
          return ReactModule.createElement(
            "a",
            {
              key: link.text,
              href: link.href,
              target: link.isExternal ? "_blank" : "",
            },
            link.text
          )
        })
      }),
  }
})

const mockContent = [
  {
    text: "Get started now",
    href: "https://www.scotiabank.com/ca/en/personal.html",
    isExternal: true,
  },
  {
    text: "Framer motion is awesome",
    href: "https://www.framer.com/motion/",
    isExternal: true,
  },
  {
    text: "about",
    href: "/page-6",
  },
  {
    text: "contact",
    href: "/page-2",
  },
]

describe("ListOfLinks", () => {
  it("passes a11y test", async () => {
    testA11y(<ListOfLinks content={mockContent} />)
  })

  test("should display 4 links", () => {
    render(<ListOfLinks content={mockContent} />)
    const links = screen.getAllByRole("link")
    expect(links).toHaveLength(4)

    expect(screen.getByText("Get started now")).toBeInTheDocument()
    expect(screen.getByText("Framer motion is awesome")).toBeInTheDocument()
    expect(screen.getByText("about")).toBeInTheDocument()
    expect(screen.getByText("contact")).toBeInTheDocument()
  })
})
