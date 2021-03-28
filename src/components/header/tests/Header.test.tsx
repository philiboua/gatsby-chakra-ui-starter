import React from "react"
import { render, testA11y, screen } from "@src/tests"
import { Header } from "@src/components"
import logo from "@src/assets/images/logo-1.svg"

describe("Header", () => {
  it("passes a11y test", async () => {
    await testA11y(<Header logo={logo} altLogo="company logo" />)
  })

  test("should render an image with source", () => {
    render(<Header logo={logo} altLogo="company logo" />)

    expect(screen.getByAltText("company logo")).toBeInTheDocument()
    expect(screen.getByAltText("company logo")).toHaveAttribute("src", logo)
  })
})
