import React from "react"
import { screen, render, testA11y } from "@src/tests"
import userEvent from "@testing-library/user-event"
import { GatsbyLinkProps } from "gatsby"
import { toggleContext } from "@src/contexts"
import {
  Navigation,
  NavDropdownButton,
  NavigationList,
  NavigationItem,
  NavDropdown,
  NavDropdownContent,
  NavDropdownList,
  NavDropdownListItem,
  Container,
} from "@src/components"
import { Link } from "../../link/Link"

type GatsbyAnchorProps = {
  isExternal: boolean
  href: string
} & Omit<GatsbyLinkProps<unknown>, "to">

/** mock current link implementation  */
jest.mock("../../link/Link", () => {
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

describe("Navigation", () => {
  it("passes a11y test", async () => {
    await testA11y(
      <Container>
        <Navigation>
          <NavigationList justifyContent="center" alignItems="center">
            <NavDropdown py={6} position="relative" px={6}>
              <toggleContext.Consumer>
                {value => {
                  const variants = {
                    mouseEnter: {
                      opacity: 1,
                      x: "-50%",
                      y: "0%",
                      display: "block",
                    },
                    mouseLeave: {
                      opacity: 0,
                      x: "-50%",
                      y: "10px",
                      display: "none",
                    },
                  }
                  return (
                    <>
                      <NavDropdownButton expanded={value} variant="transparent">
                        dropdown button
                      </NavDropdownButton>
                      <NavDropdownContent
                        width="300px"
                        height="200px"
                        position="absolute"
                        display="none"
                        opacity={0}
                        top="90%"
                        left="50%"
                        zIndex={value ? 1 : -1}
                        bg="#F0F0F0"
                        color="#000"
                        initial={false}
                        animate={value ? "mouseEnter" : "mouseLeave"}
                        variants={variants}
                      >
                        <NavDropdownList gridTemplateColumns="1fr 1fr">
                          <NavDropdownListItem>
                            <Link
                              className="subNavigationLink"
                              isExternal
                              href="https://www.scotiabank.com/ca/en/personal.html"
                            >
                              First dropdown navLink
                            </Link>
                          </NavDropdownListItem>
                          <NavDropdownListItem>
                            <Link
                              className="subNavigationLink"
                              isExternal
                              href="https://www.scotiabank.com/ca/en/personal.html"
                            >
                              Second dropdown NavLink
                            </Link>
                          </NavDropdownListItem>
                        </NavDropdownList>
                      </NavDropdownContent>
                    </>
                  )
                }}
              </toggleContext.Consumer>
            </NavDropdown>
            <NavigationItem pr={6}>
              <Link
                isExternal
                href="https://www.scotiabank.com/ca/en/personal.html"
              >
                Get started
              </Link>
            </NavigationItem>
            <NavigationItem pr={6}>
              <Link
                isExternal
                href="https://www.scotiabank.com/ca/en/personal.html"
              >
                Link1
              </Link>
            </NavigationItem>
            <NavigationItem pr={6}>
              <Link
                isExternal
                href="https://www.scotiabank.com/ca/en/personal.html"
              >
                Link2
              </Link>
            </NavigationItem>
            <NavigationItem pr={6}>
              <Link
                isExternal
                href="https://www.scotiabank.com/ca/en/personal.html"
              >
                Link3
              </Link>
            </NavigationItem>
          </NavigationList>
        </Navigation>
      </Container>
    )
  })

  test("user should be able to interact with a dropdown navigation", () => {
    render(
      <Container>
        <Navigation>
          <NavigationList justifyContent="center" alignItems="center">
            <NavDropdown
              data-testid="dropdown"
              py={6}
              position="relative"
              px={6}
            >
              <toggleContext.Consumer>
                {value => {
                  const variants = {
                    mouseEnter: {
                      opacity: 1,
                      x: "-50%",
                      y: "0%",
                      display: "block",
                    },
                    mouseLeave: {
                      opacity: 0,
                      x: "-50%",
                      y: "10px",
                      display: "none",
                    },
                  }
                  return (
                    <>
                      <NavDropdownButton expanded={value} variant="transparent">
                        dropdown button
                      </NavDropdownButton>
                      <NavDropdownContent
                        data-testid="dropdown-content"
                        width="300px"
                        height="200px"
                        position="absolute"
                        display="none"
                        opacity={0}
                        top="90%"
                        left="50%"
                        zIndex={value ? 1 : -1}
                        bg="#F0F0F0"
                        color="#000"
                        initial={false}
                        animate={value ? "mouseEnter" : "mouseLeave"}
                        variants={variants}
                      >
                        <NavDropdownList gridTemplateColumns="1fr 1fr">
                          <NavDropdownListItem>
                            <Link
                              className="subNavigationLink"
                              isExternal
                              href="https://www.scotiabank.com/ca/en/personal.html"
                            >
                              First dropdown navLink
                            </Link>
                          </NavDropdownListItem>
                          <NavDropdownListItem>
                            <Link
                              className="subNavigationLink"
                              isExternal
                              href="https://www.scotiabank.com/ca/en/personal.html"
                            >
                              Second dropdown NavLink
                            </Link>
                          </NavDropdownListItem>
                        </NavDropdownList>
                      </NavDropdownContent>
                    </>
                  )
                }}
              </toggleContext.Consumer>
            </NavDropdown>
            <NavigationItem pr={6}>
              <Link
                isExternal
                href="https://www.scotiabank.com/ca/en/personal.html"
              >
                Get started with Chakra UI
              </Link>
            </NavigationItem>
          </NavigationList>
        </Navigation>
      </Container>
    )

    const dropdownButton = screen.getByText("dropdown button")
    const firstDropdownLink = screen.getByText("First dropdown navLink")
    const secondDropdownLink = screen.getByText("Second dropdown NavLink")
    const navigationLink = screen.getByText("Second dropdown NavLink")

    // dropdown menu should be in the document
    expect(dropdownButton).toBeInTheDocument()
    expect(firstDropdownLink).toBeInTheDocument()
    expect(secondDropdownLink).toBeInTheDocument()
    expect(navigationLink).toBeInTheDocument()

    // test initial state of the dropdown
    expect(dropdownButton).toHaveAttribute("aria-expanded", "false")
    expect(dropdownButton).toHaveAttribute("aria-haspopup", "true")
    expect(screen.getByTestId("dropdown-content")).toHaveStyle("display:none")

    // user's mouse hover a dropdown button
    userEvent.hover(dropdownButton)
    expect(dropdownButton).toHaveAttribute("aria-expanded", "true")
    expect(screen.getByTestId("dropdown-content")).toHaveStyle("display:block")

    // user's mouse unhover a dropdown button
    userEvent.unhover(dropdownButton)
    expect(dropdownButton).toHaveAttribute("aria-expanded", "false")
    expect(firstDropdownLink).not.toBeVisible()
    expect(secondDropdownLink).not.toBeVisible()
  })
})
