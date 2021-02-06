import React from "react"
import { screen } from "@testing-library/react"
import { Text } from "@chakra-ui/react"
import { render } from "./test-utils"

it("renders a text on the page", () => {
  render(<Text>You can start testing your component</Text>)
  expect(
    screen.getByText("You can start testing your component")
  ).toBeInTheDocument()
})
