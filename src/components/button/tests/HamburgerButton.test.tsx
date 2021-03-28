import React from "react"
import userEvent from "@testing-library/user-event"
import { render, testA11y, screen } from "@src/tests"
import { HamburgerButton } from "@src/components"

const content = {
  ariaLabel: "menu",
  menuLabel: "Mobile navigation",
}

describe("Hamburger Button", () => {
  it("passes a11y test", async () => {
    await testA11y(
      <HamburgerButton
        ariaLabel={content.ariaLabel}
        menuLabel={content.menuLabel}
      />
    )
  })

  test("user double clicks on the button", () => {
    render(
      <HamburgerButton
        ariaLabel={content.ariaLabel}
        menuLabel={content.menuLabel}
      />
    )

    const button = screen.getByRole("button")
    userEvent.click(button)
    expect(button).toHaveAttribute("aria-expanded", "true")
    expect(button).toHaveAttribute("aria-label", `${content.ariaLabel} is open`)
    userEvent.click(button)
    expect(button).toHaveAttribute("aria-expanded", "false")
    expect(button).toHaveAttribute(
      "aria-label",
      `${content.ariaLabel} is close`
    )
  })
})
